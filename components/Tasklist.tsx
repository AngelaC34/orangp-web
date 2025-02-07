import { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  xp: number;
  points: number;
}

interface TasklistProps {
  tasks: Task[];
}

const Tasklist = ({ tasks }: TasklistProps) => {
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
          <h2 className="card-title">Tasks - {new Date().toISOString().split("T")[0]}</h2>
          <div className="space-y-2 w-full">
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks available</p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col border p-4 rounded-lg bg-base-200 w-full"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={completedTasks.includes(task.id)}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <div className="text-left">
                      <p className="text-md font-semibold">{task.title}</p>
                      <p className="text-sm text-gray-500">{task.description}</p>
                    </div>
                  </div>
                  <div className="space-x-1">
                    <span className="badge badge-primary">+{task.xp} XP</span>
                    <span className="badge badge-success">+{task.points} P</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
