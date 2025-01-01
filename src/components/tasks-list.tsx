"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const tasks = [
  { id: 1, title: "User flow update", time: "Today till 01:00 pm" },
  { id: 2, title: "User flow update", time: "Today till 01:00 pm" },
  { id: 3, title: "User flow update", time: "Today till 01:00 pm" },
  { id: 4, title: "User flow update", time: "Today till 01:00 pm" },
];

export function TasksList() {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">My tasks</CardTitle>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 underline">
          See all
        </a>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.01 }}
          >
            <button
              className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-colors"
              role="checkbox"
              aria-checked="false"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium">{task.title}</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{task.time}</span>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}
