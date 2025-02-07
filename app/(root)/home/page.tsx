"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Tasklist from "@/components/Tasklist";

const tasks = [
  { id: "artikel", title: "Membuat Artikel", description: "membuat artikel yang panjang", xp: 50, points: 10, frequency: 1 },
  { id: "jurnal", title: "Membaca Jurnal", description: "membaca jurnal yang tebal", xp: 30, points: 5, frequency: 2 },
  { id: "skripsi", title: "Menulis Skripsi", description: "menulis skripsi yang panjang", xp: 75, points: 15, frequency: 3 },
  { id: "meeting", title: "Weekly Team Meeting", description: "Attend the weekly team sync meeting", xp: 20, points: 5, frequency: 2 },
  { id: "budget", title: "Review Monthly Budget", description: "Check and review expenses for the month", xp: 100, points: 25, frequency: 3 },
];

// Get all dates in current month
const getDatesInMonth = (year: number, month: number): string[] => {
  const dates: string[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(new Date(year, month, day + 1).toISOString().split("T")[0]);
  }

  return dates;
};

// Get date status today, past, future
const getDateStatus = (date: string): "past" | "today" | "future" => {
  const currentDate = new Date();
  const targetDate = new Date(date);

  if (targetDate < currentDate) return "past";
  if (targetDate.toDateString() === currentDate.toDateString()) return "today";
  return "future";
};

export default function Home() {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();
    setDates(getDatesInMonth(today.getFullYear(), today.getMonth()));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-sky-200 h-auto p-3 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <div className="overflow-auto no-scrollbar h-[70vh] border border-primary rounded-2xl">
          {dates
            .slice()
            .reverse()
            .map((date) => {
              const day = parseInt(date.split("-")[2]);
              const status = getDateStatus(date);

              const imageSrc =
                day % 2 === 0
                  ? status === "past"
                    ? "/assets/images/left_stairs.png"
                    : status === "today"
                    ? "/assets/images/left_stairs.png"
                    : "/assets/images/left_grey_stairs.png"
                  : status === "past"
                  ? "/assets/images/right_stairs.png"
                  : status === "today"
                  ? "/assets/images/right_stairs.png"
                  : "/assets/images/right_grey_stairs.png";

              const datePosition = day % 2 === 0 ? "left-[13%]" : "right-[13%]";

              return (
                <div key={date} className="relative">
                  <div
                    className={`absolute bottom-[20%] ${datePosition} text-black px-3 py-1 rounded-md`}
                  >
                    {date}
                  </div>

                  <Image
                    src={imageSrc}
                    alt="Stair Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    onClick={() => alert(`Clicked on date: ${date}`)}
                  />
                </div>
              );
            })}
          <div>
            <Image
              src="/assets/images/lower_stairs.png"
              alt="Stair Image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Daily tasks */}
        <div className="relative hidden md:block">
          <Tasklist tasks={tasks.filter(task => task.frequency === 1)} />
        </div>
      </div>
    </div>
  );
}
