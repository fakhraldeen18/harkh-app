import React,   from "react";

// import NewProjectForm from "../projects/_components/NewProjectForm";
import { ProjectsList } from "@/components/project-list";
import { TasksList } from "@/components/task-list";
import { TasksStatus } from "@/components/task-status";
import { UpcomingEvents } from "./_components/upcoming-events";

export default function Home() {
    
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TasksStatus />
          <TasksList />
          <ProjectsList />
        </div>
        <div className="space-y-6">
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
}
