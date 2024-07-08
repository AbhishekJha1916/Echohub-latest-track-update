import {z} from 'zod'

export const loginSchema  = z.object({
   email :  z.string().email({ message: "Invalid email address" }),
   password : z.string()
}) 

export const signUpSchema = z.object({
   firstName : z.string().min(3, { message: "Must be 3 or more characters long" }),
   lastName : z.string().min(3 , {message : "Must be 3 or more Characters long"}),
   email : z.string().email({message : "Invalid email address"}),
   password :  z.string(),
   gender : z.string()
})