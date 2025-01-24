"use client";
import React, { FormEvent, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon, Check, FileCheck2, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const NewProjectForm = ({ setShowNewProjectForm }) => {
  const [DateObject, setDate] = useState<{
    startDate: string;
    endDate: string;
  }>({
    startDate: "",
    endDate: "",
  });
  const [fileInputDisplayed, setFileInputDisplayed] = useState<boolean>(false);
  const FormElement = useRef<HTMLFormElement | null>(null);
  const [DataOfNewProject, setDataOfNewProject] = useState({});
  console.log(DataOfNewProject);
  const nextAndContinueButton = (e: FormEvent<HTMLButtonElement>) => {
    const formData = new FormData(FormElement?.current);
    const data = Object.fromEntries(formData.entries());
    if (e.currentTarget.innerHTML === "next") {
      if (
        Object.values({
          ...data,
          ...DateObject,
        }).every((e) => e !== "")
      ) {
        setFileInputDisplayed(true);
      } else {
        const inputsData = { ...data, ...DateObject };
        const emptyKeys = Object.keys(inputsData).filter(
          (key) => inputsData[key] === ""
        );
        emptyKeys.map((key) => {
          document.getElementsByName(key).forEach((element) => {
            element.classList.add("border-red-400");
          });
        });
      }
    } else {
      setDataOfNewProject({
        ...data,
        ...DateObject,
      });
    }
  };
  const cancelAndPreviousButton = (e: FormEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerHTML === "previous") {
      setFileInputDisplayed(false);
    } else {
      setShowNewProjectForm(false);
    }
  };
  return (
    <div className="max-sm:p-4 flex justify-center items-center fixed bg-black/50 size-full left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 z-50 overflow-hidden">
      {!Object.keys(DataOfNewProject).length ? (
        <Card className="w-2/5 max-lg:w-2/4 max-md:w-3/4 max-sm:w-full py-8 flex flex-col items-center justify-center gap-5">
          <CardHeader className="p-0 m-0 w-full">
            <div className="flex items-center justify-center w-2/12 m-auto relative">
              <p className="size-4 border-secondary border-2 rounded-full"></p>
              <span className="flex-1 h-[2px] bg-secondary"></span>
              <p className="size-4 border-secondary border-2 rounded-full"></p>
              <span
                className={cn(
                  "size-4 border-secondary border-4 rounded-full absolute left-0 duration-1000 bg-white",
                  fileInputDisplayed && "left-full -translate-x-full"
                )}
              ></span>
            </div>
            <CardTitle className="text-sm text-center text-secondary">
              Create New Project
            </CardTitle>
          </CardHeader>
          <form ref={FormElement} className="w-full">
            <div
              className={cn(
                "flex justify-center items-center flex-col gap-4 w-full h-56 max-sm:h-72",
                fileInputDisplayed && "hidden"
              )}
            >
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  className="text-[#667085] text-ellipsis cursor-pointer"
                  htmlFor="project-name"
                >
                  Project Name
                </Label>
                <Input
                  name="projectName"
                  id="project-name"
                  type="text"
                  className="focus:border-secondary border bg-input"
                  onClick={(e) =>
                    e.currentTarget.classList.remove("border-red-400")
                  }
                  placeholder="Enter the project name"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  className="text-[#667085] text-ellipsis cursor-pointer"
                  htmlFor="project-description"
                >
                  Description
                </Label>
                <Input
                  name="projectDescription"
                  id="project-description"
                  type="text"
                  className="focus:border-secondary border bg-input"
                  onClick={(e) =>
                    e.currentTarget.classList.remove("border-red-400")
                  }
                  placeholder="Project Description"
                />
              </div>
              <div className="capitalize w-full max-w-sm flex justify-between items-center gap-4 max-sm:flex-col">
                <span className="flex flex-col gap-1.5 w-full">
                  <Label
                    className="text-[#667085] text-ellipsis cursor-pointer"
                    htmlFor="start-date"
                  >
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className={cn(
                          "w-full justify-start text-left font-normal border border-borderColor rounded-md bg-input text-input-foreground hover:text-muted-foreground",
                          !DateObject.startDate && "text-muted-foreground"
                        )}
                        id="start-date"
                        name="startDate"
                      >
                        <CalendarIcon />
                        {DateObject.startDate ? (
                          <p>{DateObject.startDate}</p>
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        onSelect={(date) =>
                          setDate({
                            ...DateObject,
                            startDate: format(date, "d/M/y"),
                          })
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </span>
                <span className="flex flex-col gap-1.5 w-full">
                  <Label
                    className="text-[#667085] cursor-pointer"
                    htmlFor="end-date"
                  >
                    end Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className={cn(
                          "w-full justify-start text-left font-normal border border-borderColor rounded-md bg-input text-input-foreground hover:text-muted-foreground",
                          !DateObject.endDate && "text-muted-foreground"
                        )}
                        id="end-date"
                        name="endDate"
                      >
                        <CalendarIcon />
                        {DateObject.endDate ? (
                          <p>{DateObject.endDate}</p>
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        onSelect={(date) =>
                          setDate({
                            ...DateObject,
                            endDate: format(date, "d/M/y"),
                          })
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </span>
              </div>
            </div>
            <div
              className={cn(
                "hidden justify-center items-center flex-col gap-4 max-w-sm m-auto h-56",
                fileInputDisplayed && "flex"
              )}
            >
              <div className="w-full space-y-2">
                <Label
                  htmlFor="upload"
                  className="cursor-pointer capitalize rounded-sm p-2 flex gap-2 items-center w-full h-10 border border-borderColor bg-input text-[#9299AC]"
                >
                  <Upload
                    size={15}
                    color="#667085"
                    className="relative -top-[1px]"
                  />
                  Drop File Here Or Browse Files
                </Label>
                <p className="text-[#818181] text-[10px] capitalize">
                  Up to 50 MV, Files Should be CSV, XLSX, Xls, QVD
                </p>
                <Input
                  name="upload"
                  id="upload"
                  className="hidden"
                  type="file"
                />
              </div>
              <div className="size-full overflow-y-auto space-y-3">
                <div className="rounded-md border border-borderColor w-full h-10 px-4 flex justify-between items-center">
                  <p className="flex items-center gap-2">
                    <FileCheck2 size={15} />
                    <span>file.txt</span>
                  </p>
                  <X size={15} className="cursor-pointer" />
                </div>
                <div className="rounded-md border border-borderColor w-full h-10 px-4 flex justify-between items-center">
                  <p className="flex items-center gap-2">
                    <FileCheck2 size={15} />
                    <span>file.txt</span>
                  </p>
                  <X size={15} className="cursor-pointer" />
                </div>
                <div className="rounded-md border border-borderColor w-full h-10 px-4 flex justify-between items-center">
                  <p className="flex items-center gap-2">
                    <FileCheck2 size={15} />
                    <span>file.txt</span>
                  </p>
                  <X size={15} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </form>
          <div className="w-full max-w-sm flex justify-between items-center gap-4 max-md:flex-col">
            <Button
              variant={"secondary"}
              onClick={(e) => nextAndContinueButton(e)}
              className="w-full capitalize rounded-sm"
            >
              {fileInputDisplayed ? "continue" : "next"}
            </Button>
            <Button
              onClick={(e) => cancelAndPreviousButton(e)}
              variant={"outline"}
              className="w-full capitalize rounded-sm"
            >
              {fileInputDisplayed ? "previous" : "Cancel"}
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="text-center flex justify-center items-center flex-col gap-2 size-2/4">
          <Check size={120} strokeWidth={4} color="#CFDCED" />
          <CardContent className="space-y-2">
            <CardTitle className="text-4xl">Successful</CardTitle>
            <CardDescription>The Project has been added</CardDescription>
          </CardContent>
          <Button
            variant={"secondary"}
            onClick={cancelAndPreviousButton}
            className="w-2/4 capitalize rounded-sm"
          >
            Continue
          </Button>
        </Card>
      )}
    </div>
  );
};
export default NewProjectForm;
