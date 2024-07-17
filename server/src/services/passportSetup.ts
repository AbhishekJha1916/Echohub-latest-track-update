import { PrismaClient } from "@prisma/client";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();
passport.initialize();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: "/user/google/redirect",
      scope: ["email", "profile"],
    },
    async (
      accessToken: String,
      refreshToken: String,
      profile: any,
      done: any
    ) => {
      // console.log(profile)
      const user = await prisma.user.create({
        data: {
          googleId: profile.id,
          email: profile.emails[0].value,
          firstName: profile.name?.givenName,
          lastName: profile.name?.familyName,
          password: profile.id,
        },
      });

      return done(null, user);
    }
  )
);

export { passport };
