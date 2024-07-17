import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { loginSchema, signUpSchema } from "../schemas/user.validation";
import {Queue} from 'bullmq'
import { sendWelcomeEmail } from "../services/welcomeMail";
// const welcomeNoti = new Queue("email-queue")
const key: string = process.env.JWT_SECRET_KEY!;
const prisma = new PrismaClient();

interface UserCreateData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const signup = async (
  req: Request<any, any, UserCreateData>,
  res: Response
) => {
  const result = signUpSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  const { firstName, lastName, email, password, gender } = result.data;
  try {
    let user = await prisma.user.findFirst({ where: { email } });
    if (user) return res.json("User Already Exist");

    user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashSync(password, 10),
        gender,
      },
    });

    // await welcomeNoti.add("email-queue",{
    //   email ,
    //   firstName
    // })
    await sendWelcomeEmail(email , firstName);
    console.log(user);
    res.status(201).send("Successfully created");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the user");
  }
};

export const login = async (
  req: Request<any, any, LoginData>,
  res: Response
) => {
  const result = loginSchema.safeParse(req.body);
  console.log(result);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  const { email, password } = result.data;

  try {
    let user = await prisma.user.findFirst({ where: { email } });
    if (!user) return res.status(404).json("User Not Exist");
    if (!compareSync(password, user.password))
      return res.status(401).json("Incorrect Password");

    const token = jwt.sign({ userId: user.id }, key);

    const response: LoginResponse = { user, token };
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in");
  }
};


export const googleRedirect = (  req: any, res: any) => {
  try{
    console.log("hit pont")
    console.log(req.user)
    const token = jwt.sign({userId : req.user} , key);
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
    res.json(token)

  }catch(error){
    console.log(error);
  }
}