"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Filter,
  LayoutDashboard,
  Pencil,
  StretchHorizontal,
} from "lucide-react";
interface ProjectsActionsProps {
  ViewStatus: "squares" | "rows";
  setViewStatus: React.Dispatch<React.SetStateAction<"squares" | "rows">>;
  setFilteringValue: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
}
const ProjectsActions: React.FC<ProjectsActionsProps> = ({
  ViewStatus,
  setViewStatus,
  setFilteringValue,
}) => {
  return (
    <div className="flex justify-between items-center">
      <Select
        onValueChange={(value) =>
          setFilteringValue(value as "all" | "active" | "completed")
        }
      >
        <SelectTrigger className="w-fit flex gap-2 bg-transparent border-[#787486] border-2">
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
        <Button variant={"default"} className="size-8 rounded-md">
          <Pencil />
        </Button>
        <div className="max-sm:hidden h-8 w-[2px] bg-primary"></div>
        <Button
          onClick={() => setViewStatus("squares")}
          variant={"default"}
          className={cn(
            "max-sm:hidden text-black size-8 rounded-md",
            ViewStatus === "squares"
              ? "text-primary-foreground"
              : "bg-transparent"
          )}
        >
          <LayoutDashboard />
        </Button>
        <Button
          onClick={() => setViewStatus("rows")}
          className={cn(
            "max-sm:hidden bg-transparent text-black size-8 rounded-md",
            ViewStatus === "rows"
              ? "bg-primary text-primary-foreground"
              : "bg-transparent"
          )}
        >
          <StretchHorizontal />
        </Button>
      </div>
    </div>
  );
};
export default ProjectsActions;
