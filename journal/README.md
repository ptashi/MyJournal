# MyJournal
A personal journaling web app built with Next.js, React, and Prisma. Sign in, write entries, and keep a private, searchable log of your day.

## Features

- Passwordless sign-in via email magic link
- Create, edit, and delete journal entries / todo-tasks
- view past/future entries
- tracks your progress of tasks

## Tech Stack
Framework: Next.js 16 (App Router)
UI: React 19, Tailwind CSS 4, Lucide icons
Database/ORM: Prisma 6
Auth: NextAuth.js v5 with the Prisma adapter
Email: Resend (for magic-link sign-in emails)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
