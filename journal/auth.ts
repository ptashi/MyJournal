import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Resend from "next-auth/providers/resend";

const prisma = new PrismaClient(); // creates one instance of prisma client for db calls

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma), 
  providers: [ // this is list bs Auth.js supports multiple login methods (google, github, etc.)
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: "noreply@pematashi.com",
    }),
  ],
  session: {
    strategy: "database",
  },
});