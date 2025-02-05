import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

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

type CardProps = React.ComponentProps<typeof Card>;

const Tasklist = ({ className, ...props }: CardProps) => {
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
            <Card className={cn(className)} {...props}>
            <CardHeader>
              <CardTitle>Daily Tasks - {new Date().toISOString().split("T")[0]}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between border p-4 rounded-md"
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={completedTasks.includes(task.id)}
                      onCheckedChange={() => toggleTaskCompletion(task.id)}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-xs font-semibold bg-blue-500 text-white px-2 py-1 rounded-md">
                      +{task.xp} XP
                    </span>
                    <span className="text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded-md">
                      +{task.points} P
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
    )};
    export default Tasklist;