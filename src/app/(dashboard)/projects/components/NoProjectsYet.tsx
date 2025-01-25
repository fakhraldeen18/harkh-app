import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
interface NoProjectsYetProps {
  setShowNewProjectForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const NoProjectsYet: React.FC<NoProjectsYetProps> = ({
  setShowNewProjectForm,
}) => {
  return (
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
        variant={"secondary"}
        onClick={() => setShowNewProjectForm(true)}
        className="capitalize px-12 rounded-sm"
      >
        add new project
      </Button>
    </div>
  );
};
export default NoProjectsYet;
