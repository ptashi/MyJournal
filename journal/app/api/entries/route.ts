import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const TEST_USER_ID = "cmtc4htk50000r82c7duvux9c"

export async function POST(req: NextRequest) {
    const { date, journalText, tasks } = await req.json()

    const entry = await prisma.entry.upsert({ // upsert = update or insert -> if userID and date exists it will update, otherwise create
        where: {
            userId_date: {
                userId: TEST_USER_ID,
                date: date
            }
        },
        update: {
            journalText,
            tasks: {
                deleteMany: {}, // clear old tasks
                create: tasks.map((t: { text: string; isComplete: boolean }) => ({
                    text: t.text,
                    isComplete: t.isComplete
                }))
            }
        },
        create: {
            date,
            journalText,
            userId: TEST_USER_ID,
            tasks: {
                create: tasks.map((t: { text: string; isComplete: boolean }) => ({
                text: t.text,
                isComplete: t.isComplete,
            }))}
        },
        include: {tasks: true},
    })
    return NextResponse.json({ entry });
}

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Missing date parameter" }, { status: 400 });
  }

  const entry = await prisma.entry.findUnique({
    where: {
      userId_date: {
        userId: TEST_USER_ID,
        date: date,
      },
    },
    include: { tasks: true },
  });

  return NextResponse.json({ entry });
}