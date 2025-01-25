import React from "react";
import {
  CirclePlus,
  Ellipsis,
  FolderCode,
  MessageSquareMore,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectTY } from "../page";
interface ProjectsListProps {
  ProjectsData: ProjectTY;
  ViewStatus: "rows" | "squares";
  FilteringValue: "all" | "active" | "completed";
  setShowNewProjectForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProjectsList: React.FC<ProjectsListProps> = ({
  ProjectsData,
  ViewStatus,
  FilteringValue,
  setShowNewProjectForm,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-y-5 gap-x-10 py-8",
        ViewStatus === "rows" &&
          "grid-cols-1 max-xl:grid-cols-1 max-sm:grid-cols-1 "
      )}
    >
      {ProjectsData.filter((project) => {
        if (FilteringValue === project.status) {
          return project;
        } else if (FilteringValue === "all") {
          return project;
        }
      }).map((project, i) => (
        <Card className="rounded-2xl" key={i}>
          <CardHeader className="flex items-center justify-between flex-row">
            <span
              className={cn(
                "bg-[#cdedeb] text-[#59C4BD] px-2 py-0.5 rounded-sm text-sm",
                project.status === "completed" && "bg-[#daede2] text-[#68B266]"
              )}
            >
              {project.status}
            </span>
            <Ellipsis />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg font-semibold text-[#464E52]">
              <Link href={`/projects/project-id-${i}`}>{project.name}</Link>
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
                className="w-full h-3 *:bg-gradient-to-r from-primary to-secondary"
              />
              <span>{project.completionRate}%</span>
            </div>
          </CardFooter>
        </Card>
      ))}
      <button
        onClick={() => setShowNewProjectForm(true)}
        className="rounded-2xl size-full outline-none min-h-72"
      >
        <Card className="rounded-2xl capitalize flex gap-2 flex-col justify-center items-center size-full border-dashed border-primary border-2">
          <CirclePlus className="size-20 text-primary" strokeWidth={1} />
          <CardDescription className="text-[#5B5B5B]">
            New Project
          </CardDescription>
        </Card>
      </button>
    </div>
  );
};
export default ProjectsList;
