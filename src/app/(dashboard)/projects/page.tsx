"use client";
import React, { useState } from "react";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectsYet from "./components/NoProjectsYet";
import ProjectsActions from "./components/ProjectsActions";
import ProjectsList from "./components/ProjectsList";
export type ProjectTY = {
  id: number;
  name: string;
  status: string;
  completionRate: number;
}[];
const Page = () => {
  const ProjectsData: ProjectTY = [
    {
      id: 1,
      name: "Design Web for Harkh Company",
      status: "active",
      completionRate: 40,
    },
    { id: 2, name: "Project 2", status: "completed", completionRate: 100 },
    { id: 3, name: "Project 3", status: "active", completionRate: 10 },
    { id: 4, name: "Project 4", status: "completed", completionRate: 100 },
  ];
  const [ViewStatus, setViewStatus] = useState<"rows" | "squares">("squares");
  const [FilteringValue, setFilteringValue] = useState<
    "all" | "active" | "completed"
  >("all");
  const [ShowNewProjectForm, setShowNewProjectForm] = useState<boolean>(false);
  return (
    <div className="relative">
      {ProjectsData.length ? (
        <div className="capitalize">
          <ProjectsActions
            ViewStatus={ViewStatus}
            setViewStatus={setViewStatus}
            setFilteringValue={setFilteringValue}
          />
          <ProjectsList
            ProjectsData={ProjectsData}
            ViewStatus={ViewStatus}
            FilteringValue={FilteringValue}
            setShowNewProjectForm={setShowNewProjectForm}
          />
        </div>
      ) : (
        <NoProjectsYet setShowNewProjectForm={setShowNewProjectForm} />
      )}
      {ShowNewProjectForm && (
        <NewProjectForm setShowNewProjectForm={setShowNewProjectForm} />
      )}
    </div>
  );
};
export default Page;
