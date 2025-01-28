"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
const tasks = [
  {
    taskId: 0,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 1,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 2,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 3,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 4,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 5,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 6,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
  {
    taskId: 7,
    description: "Design User Interface Mockups",
    date: "21 Nov",
    level: "low",
  },
];
const membersInfoWindow = {
  hidden: {
    width: 0,
  },
  show: {
    width: "80%",
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const membersInfoWindowChiles = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
import React, { useState } from "react";
const ProjectTask = () => {
  const [OpenTask, setOpenTask] = useState<object>({});
  return (
    <Card className="h-[420px] w-full capitalize py-6 px-2 grid gap-4 grid-rows-[auto_1fr]">
      <div className="flex items-center justify-between px-4">
        <CardTitle className="text-lg font-medium">Project Task</CardTitle>
        <Button
          variant={"outline"}
          className="w-20 h-5 rounded-md capitalize border-[#1F57A1] text-[#1F57A1] hover:bg-transparent hover:text-[#1F57A1]"
        >
          add
        </Button>
      </div>
      <div className="w-full h-full text-sm overflow-y-scroll">
        {tasks.map((task) => (
          <div
            key={task.taskId}
            className="flex items-center justify-between max-sm:flex-col py-4 gap-8 max-sm:gap-2 hover:bg-muted/50 rounded-sm px-4 cursor-pointer"
            onClick={() => setOpenTask(task)}
          >
            <div className="flex items-center gap-4 w-2/4 max-sm:w-full">
              <span className="size-[16px] relative -top-[1px] border-2 border-black/50 rounded-full"></span>
              <span className="truncate">{task.description}</span>
            </div>
            <div className="w-2/4 max-sm:w-full flex justify-between max-sm:mb-1">
              <span className="text-[#4F4F4F] text-center">{task.date}</span>
              <span className="w-20 h-5  text-center rounded-md capitalize text-[#d58d49] bg-[#f9eee3]">
                {task.level}
              </span>
            </div>
          </div>
        ))}
        {OpenTask.hasOwnProperty("taskId") && (
          <motion.div
            variants={membersInfoWindow}
            initial="hidden"
            animate="show"
            className="fixed bg-white shadow-xl size-4/5 left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 z-50 overflow-hidden p-4"
          >
            <div className="w-full flex justify-end">
              <CircleX onClick={() => setOpenTask({})} />
            </div>
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4 overflow-hidden overflow-y-auto h-fit max-h-full w-full">
              task details
            </div>
          </motion.div>
        )}
      </div>
    </Card>
  );
};
export default ProjectTask;
