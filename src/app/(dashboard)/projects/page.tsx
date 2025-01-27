"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  BetweenHorizontalStart,
  CirclePlus,
  Ellipsis,
  Filter,
  FolderCode,
  LayoutDashboard,
  MessageSquareMore,
  Pencil,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import NewProjectForm from "./_components/NewProjectForm";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const Page = () => {
  const ProjectsData: {
    id: number;
    name: string;
    status: string;
    completionRate: number;
  }[] = [
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
  const [ViewStatus, setViewStatus] = useState("squares");
  const [FilteringValue, setFilteringValue] = useState<string>("all");
  const [ShowNewProjectForm, setShowNewProjectForm] = useState<boolean>(false);
  return (
    <div className="relative">
      {ProjectsData.length ? (
        <div className="capitalize">
          <div className="flex justify-between items-center">
            <Select onValueChange={(value) => setFilteringValue(value)}>
              <SelectTrigger className="w-fit flex gap-2 bg-transparent border-[#787486] border-2 focus:ring-0 focus:ring-offset-0">
                <Filter className="w-4" />
                <SelectValue placeholder="all projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">all projects</SelectItem>
                  <SelectItem value="active">active projects</SelectItem>
                  <SelectItem value="completed">completed projects</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-4">
              <Button className="bg-[#192181] hover:bg-[#192181] size-8 rounded-md">
                <Pencil />
              </Button>
              <div className="max-sm:hidden h-8 w-[2px] bg-[#192181]"></div>
              <Button
                onClick={() => setViewStatus("squares")}
                className={cn(
                  "max-sm:hidden bg-[#192181] hover:bg-[#192181] text-black size-8 rounded-md",
                  ViewStatus === "squares"
                    ? "bg-[#192181] hover:bg-[#192181] text-white"
                    : "bg-transparent hover:bg-transparent"
                )}
              >
                <LayoutDashboard />
              </Button>
              <Button
                onClick={() => setViewStatus("rows")}
                className={cn(
                  "max-sm:hidden bg-transparent hover:bg-transparent text-black size-8 rounded-md",
                  ViewStatus === "rows"
                    ? "bg-[#192181] hover:bg-[#192181] text-white"
                    : "bg-transparent hover:bg-transparent"
                )}
              >
                <BetweenHorizontalStart />
              </Button>
            </div>
          </div>
          <div
            className={cn(
              "grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-y-5 gap-x-10 p-8",
              ViewStatus === "rows" && "grid-cols-1"
            )}
          >
            {ProjectsData.filter((project) => {
              if (FilteringValue === project.status) {
                return project;
              } else if (FilteringValue === "all") {
                return project;
              }
            }).map((project, i) => (
              <Link href={`/projects/project-id-${i}`} key={i}>
                <Card className="rounded-2xl">
                  <CardHeader className="flex items-center justify-between flex-row">
                    <span
                      className={cn(
                        "bg-[#cdedeb] text-[#59C4BD] px-2 py-0.5 rounded-sm text-sm",
                        project.status === "completed" &&
                          "bg-[#daede2] text-[#68B266]"
                      )}
                    >
                      {project.status}
                    </span>
                    <Ellipsis />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg font-semibold text-[#464E52]">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-[#5B5B5B]">
                      Start design the app for the beginning
                    </CardDescription>
                    <CardDescription className="text-[#D1D1D1]">
                      April 25, 2025 at 10:40 AM
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="grid gap-4">
                    <div className="flex justify-between items-center w-full">
                      <Avatar className="flex items-center">
                        <AvatarImage
                          src="/assets/images/personal-image.jpg"
                          alt="@shadcn"
                          className="rounded-full size-8 z-[3] object-cover"
                        />
                        <AvatarImage
                          src="/assets/images/personal-image.jpg"
                          alt="@shadcn"
                          className="rounded-full size-8 z-[2] -ml-2 object-cover"
                        />
                        <AvatarImage
                          src="/assets/images/personal-image.jpg"
                          alt="@shadcn"
                          className="rounded-full size-8 z-[1] -ml-2 object-cover"
                        />
                      </Avatar>
                      <div className="flex items-center gap-4 lowercase text-[#787486]">
                        <div className="flex items-center gap-1 text-sm">
                          <MessageSquareMore className="relative -top-[1px] size-5" />
                          <span>{12} comments</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <FolderCode className="relative -top-[1px] size-5" />
                          <span>{0} files</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress
                        value={project.completionRate}
                        className="w-full h-3 *:bg-gradient-to-r from-[#0E0D3C] to-[#2623A2]"
                      />
                      <span>{project.completionRate}%</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
            <button
              onClick={() => setShowNewProjectForm(true)}
              className="rounded-2xl size-full outline-none"
            >
              <Card className="rounded-2xl capitalize flex gap-2 flex-col justify-center items-center size-full border-dashed border-[#1C1A78] border-2">
                <CirclePlus
                  className="size-20 text-[#1C1A78]"
                  strokeWidth={1}
                />
                <CardDescription className="text-[#5B5B5B]">
                  New Project
                </CardDescription>
              </Card>
            </button>
          </div>
        </div>
      ) : (
        <div className="capitalize flex gap-4 justify-center items-center flex-col absolute left-2/4 top-2/4 -translate-x-2/4 translate-y-2/4">
          <h2 className="font-bold text-xl">No Projects Yet</h2>
          <p className="text-base">Create your first project to get started.</p>
          <Image
            src={"/assets/images/NoProjectsYet.svg"}
            width={200}
            height={200}
            alt="No Projects Yet"
          />
          <Button
            onClick={() => setShowNewProjectForm(true)}
            className="bg-[#0F76DB] hover:bg-[#0F76DB] capitalize px-12 rounded-sm"
          >
            add new project
          </Button>
        </div>
      )}
      {ShowNewProjectForm && (
        <NewProjectForm setShowNewProjectForm={setShowNewProjectForm} />
      )}
    </div>
  );
};
export default Page;
