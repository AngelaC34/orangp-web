import { useState } from "react";

const tasks = [
  {
    id: "artikel",
    title: "Membuat Artikel",
    description: "membuat artikel yang panjang",
    xp: 50,
    points: 10,
  },
  {
    id: "jurnal",
    title: "Membaca Jurnal",
    description: "membaca jurnal yang tebal",
    xp: 30,
    points: 5,
  },
  {
    id: "skripsi",
    title: "Menulis Skripsi",
    description: "menulis skripsi yang panjang",
    xp: 75,
    points: 15,
  },
];

const Tasklist = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const toggleTaskCompletion = (taskId: string) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div>
      <div className="card bg-neutral text-neutral-content w-full shadow-lg p-5">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Daily Tasks - {new Date().toISOString().split("T")[0]}</h2>
          <div className="space-y-2 w-full">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between border p-4 rounded-lg bg-base-200 w-full"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={completedTasks.includes(task.id)}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <div className="flex-1">
                    <p className="text-md font-semibold">{task.title}</p>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="badge badge-primary">+{task.xp} XP</span>
                  <span className="badge badge-success">+{task.points} P</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
