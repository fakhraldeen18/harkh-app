import { AlertCircle, CircleCheck, ClipboardList, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Task",
    value: "1",
    icon: ClipboardList,
    color: "text-orange-500 bg-orange-100",
  },
  {
    title: "In progress",
    value: "1",
    icon: Clock,
    color: "text-blue-500 bg-blue-100",
  },
  {
    title: "Completed",
    value: "0",
    icon: CircleCheck,
    color: "text-green-500 bg-green-100",
  },
  {
    title: "Late",
    value: "0",
    icon: AlertCircle,
    color: "text-red-500 bg-red-100",
  },
];

export function TasksStatus() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="flex items-center gap-4 p-4">
            <div className={`rounded-full p-2 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
