"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CalendarCard from "@/components/CalendarCard";
import JournalPanel from "@/components/JournalPanel";
import TodoPanel from "@/components/TodoPanel";
import ProgressBar from "@/components/ProgressBar"


export default function DayPage() {
    const params = useParams();
    const date = params.date as string;

    const [tasks, setTasks] = useState([
            { task: "", isComplete: false },
            { task: "", isComplete: false },
            { task: "", isComplete: false },
    ])

    const [journalEntry, setJournalEntry] = useState("") 

    useEffect(() => {
        const saved = localStorage.getItem(`entry-${date}`);
        if (saved) {
            const parsed = JSON.parse(saved)
            setJournalEntry(parsed.journalEntry)
            setTasks(parsed.tasks)
        }
    })

    function saveDay() {
        const entry = { journalEntry, tasks }
        localStorage.setItem(`entry-${date}`, JSON.stringify(entry));
        alert("Day saved!")
    }

    return (
        <div className="flex gap-4 min-h-screen p-6">
        <div className="flex flex-col">
            <div className="flex-1">
                <Link href="/calendar" className="inline-flex items-center gap-2 text-coffee hover:text-black mb-4">
                    <ArrowLeft size={20} />
                    <span className="font-fredoka">
                        Calendar
                    </span>
                </Link>
                <CalendarCard />
                <ProgressBar tasks={tasks} />
                <button className="flex-1 shadow-md w-full h-10 bg-coffee text-white font-fredoka rounded-full hover:bg-strikeout/20" onClick={() => saveDay()}>Save Day</button>
            </div>

        </div>
        <div className="flex-1">
            <JournalPanel journalText={journalEntry} setJournalText={setJournalEntry} />
        </div>
        <div className="flex-1">
            <TodoPanel tasks={tasks} setTasks={setTasks}/>
        </div>
        </div>
    );
    }