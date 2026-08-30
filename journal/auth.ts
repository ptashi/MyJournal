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
      async sendVerificationRequest({ identifier: email, url, provider }) {
        const { host } = new URL(url)
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: provider.from,
            to: email,
            subject: `Sign in to ${host}`,
            // ! Make his html better looking. This is what the email looks like.
              // ! Don't edit inside here, point to another file or const inside this file. Document inside your readme
            html: `
            <p>Click <a href="${url}">here</a> to sign in.</p>
            <h2>THANKS! MMMMM</h2>
            `,
          }),
        })

        if (!res.ok) {
          throw new Error("Resend error: Failed to send verification email.")
        }
      },
    }),
  ],
})