import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const TEST_USER_ID = "cmtc4htk50000r82c7duvux9c"

export async function GET() {
    const entries = await prisma.entry.findMany({
        where: { userId: TEST_USER_ID },
        select: { date: true } // only fetches date
    })

    const dates = entries.map((e) => e.date)
    return NextResponse.json({ dates })
}