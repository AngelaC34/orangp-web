"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Tasklist from "@/components/Tasklist";

const getDatesInMonth = (year: number, month: number): string[] => {
  const dates: string[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(new Date(year, month, day + 1).toISOString().split("T")[0]);
  }

  return dates;
};

const getDateStatus = (date: string): "past" | "today" | "future" => {
  const currentDate = new Date();
  const targetDate = new Date(date);

  if (targetDate < currentDate) return "past";
  if (targetDate.getTime() === currentDate.getTime()) return "today";
  return "future";
};

export default function Home() {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();
    setDates(getDatesInMonth(today.getFullYear(), today.getMonth()));
  }, []);

  return (
    <div className="flex min-h-[85vh] flex-col items-center bg-sky h-auto bg-fixed p-3 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-fit">
        <div className="overflow-auto no-scrollbar h-[70vh] border-solid border-4 border-primary rounded-xl">
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
                    width={500}
                    height={600}
                    alt="Stair Image"
                    onClick={() => alert(`Clicked on date: ${date}`)}
                  />
                </div>
              );
            })}
          <div>
            <Image
              src="/assets/images/lower_stairs.png"
              width={500}
              height={600}
              alt="Stair Image"
            />
          </div>
        </div>

        <div className="relative hidden md:block">
          <Tasklist/>
        </div>
      </div>
    </div>
  );
}
