"use client";

import { Calendar1Icon, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
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
        <a
          href="#"
          className="text-sm text-blue-600 hover:text-blue-700 underline"
        >
          See all
        </a>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            className=" items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex">
              <Checkbox className="w-5 h-5 mr-6 rounded-full border-2 border-gray-300 hover:border-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500" />

              <div className="flex-1">
                <h3 className="text-lg font-medium">{task.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 py-3">
              <span className="flex items-start justify-center ml-6">
                {" "}
                <Calendar1Icon /> {task.time}
              </span>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}
