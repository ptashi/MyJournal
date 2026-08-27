"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CalendarPage() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 - JAN

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const [viewMonth, setViewMonth] = useState(month)
    const [viewYear, setViewYear] = useState(year)

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const firstDayWeekday = new Date(viewYear, viewMonth, 1).getDay();
    const dateKey = (day: number) => {
        const mm = String(viewMonth + 1).padStart(2, "0");
        const dd = String(day).padStart(2, "0");
        return `${viewYear}-${mm}-${dd}`;
    };

    const todayKey = today.toISOString().split("T")[0];

    function getPrevMonth() {
        if (viewMonth === 0) {
            setViewMonth(11)
            setViewYear(viewYear - 1)
        } else {
            setViewMonth(viewMonth - 1)
        }
    }

    function getNextMonth() {
        if (viewMonth === 11) {
            setViewMonth(0)
            setViewYear(viewYear + 1)
        } else {
            setViewMonth(viewMonth + 1)
        }
    }

    return (
        <div className="flex min-h-screen w-full justify-center items-center">
            <div className="flex flex-col border rounded-2xl overflow-hidden h-[600px] w-full max-w-2xl">
                <div className="flex text-3xl h-[110px] font-fredoka justify-between p-8 bg-coffee">
                    <ArrowLeft onClick={() => getPrevMonth()} className="hover:text-paper cursor-pointer" />
                    <div className="flex flex-col items-center gap-1">
                        <div>{monthNames[viewMonth]} {viewYear}</div>
                        <button
                        onClick={() => {
                            setViewMonth(today.getMonth());
                            setViewYear(today.getFullYear());
                        }}
                        className="text-sm font-normal underline hover:text-paper cursor-pointer"
                        >
                        Today
                        </button>
                    </div>
                    <ArrowRight onClick={() => getNextMonth()} className="hover:text-paper cursor-pointer" />
                </div>

                <div className="grid grid-cols-7 p-5 gap-3 bg-white flex-1 content-start">

                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <div className="text-center w-full font-semibold mb-2" key={d}>{d}</div>
                    ))}

                    {Array.from({ length: firstDayWeekday }, (_, i) => (
                        <div key={`empty-${i}`} />
                    ))}

                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                        const isToday = dateKey(day) === todayKey;
                        return (
                            <Link
                                key={day}
                                href={`/day/${dateKey(day)}`}
                                className={`h-14 flex items-center justify-center rounded-full hover:bg-page-bg font-fredoka text-lg ${isToday ? "bg-coffee text-white" : ""} `}
                            >
                            {day}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}