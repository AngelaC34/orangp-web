"use client";
import { useState } from "react";
import Tasklist from "@/components/Tasklist";

const tasks = [
  { id: "artikel", title: "Membuat Artikel", description: "membuat artikel yang panjang", xp: 50, points: 10, frequency: 1 },
  { id: "jurnal", title: "Membaca Jurnal", description: "membaca jurnal yang tebal", xp: 30, points: 5, frequency: 2 },
  { id: "skripsi", title: "Menulis Skripsi", description: "menulis skripsi yang panjang", xp: 75, points: 15, frequency: 3 },
  { id: "meeting", title: "Weekly Team Meeting", description: "Progress meeting mingguan", xp: 20, points: 5, frequency: 2 },
  { id: "budget", title: "Review Monthly", description: "Review pekerjaan bulanan", xp: 100, points: 25, frequency: 3 },
];

export default function TaskPage() {
  const [filter, setFilter] = useState(1); // default filter daily 1

  // Filter tasks based on frequency
  const filteredTasks = tasks.filter((task) => task.frequency === filter);

  return (
    <div className="flex flex-col items-center bg-sky-200 h-auto p-3 md:p-10">
      <div className="flex flex-col items-center justify-center max-w-xl gap-4 p-8">
        
        {/* Daily weekly monthly tabs */}
        <div className="tabs tabs-bordered flex justify-center">
          <button className={`tab ${filter === 1 ? "tab-active" : ""}`} onClick={() => setFilter(1)}>Daily</button>
          <button className={`tab ${filter === 2 ? "tab-active" : ""}`} onClick={() => setFilter(2)}>Weekly</button>
          <button className={`tab ${filter === 3 ? "tab-active" : ""}`} onClick={() => setFilter(3)}>Monthly</button>
        </div>

        {/* Display tasks*/}
        <div className="p-0">
          <Tasklist tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
}
