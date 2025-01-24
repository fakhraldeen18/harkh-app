"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CircleX, FolderClosed, FolderPlus } from "lucide-react";
import Image from "next/image";
const files = [
  {
    fileId: 0,
    fileImage: "/file.svg",
    fileName: "Data-12348875-structures.xls",
    employeeName: "Courtney Henry",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 1,
    fileImage: "/file.svg",
    fileName: "Team-Photos.jpg",
    employeeName: "Dianne Russell",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 2,
    fileImage: "/file.svg",
    fileName: "Contact-data.csv",
    employeeName: "Marvin McKinney",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 3,
    fileImage: "/file.svg",
    fileName: "User-journey.pdf",
    employeeName: "Paid",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 4,
    fileImage: "/file.svg",
    fileName: "User-journey.pdf",
    employeeName: "Paid",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 5,
    fileImage: "/file.svg",
    fileName: "User-journey.pdf",
    employeeName: "Paid",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 6,
    fileImage: "/file.svg",
    fileName: "User-journey.pdf",
    employeeName: "Paid",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 7,
    fileImage: "/file.svg",
    fileName: "User-journey.pdf",
    employeeName: "Paid",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
  {
    fileId: 8,
    fileImage: "/file.svg",
    fileName: "User-journey.pdf",
    employeeName: "Paid",
    fileSize: "1.4 MB",
    fileSRC: "../",
  },
];
const filesWindow = {
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
const filesWindowChild = {
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
import React, { useLayoutEffect, useState } from "react";
const FileAttachment = () => {
  const [windowWidth, setWindowWidth] = useState(4);
  const [Open, setOpen] = useState<boolean>(false);
  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth <= 640 ? 3 : 4);
    if (Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [Open]);
  return (
    <Card className="h-[420px] w-full capitalize p-6 grid gap-4">
      <CardTitle className="text-lg font-medium">File Attachment</CardTitle>
      <div className="w-full text-sm">
        {files.slice(0, windowWidth).map((file) => (
          <div
            key={file.fileId}
            className="flex items-center justify-between max-sm:flex-col border-b border-borderColor transition-colors hover:bg-muted/50"
          >
            <div className="flex w-2/4 max-sm:w-full">
              <Image
                src={file.fileImage}
                alt="file icon"
                width={100}
                height={100}
                className="w-10"
              />
              <div className="grid p-4">
                <span className="truncate">{file.fileName}</span>
                <span className="text-[#828282]">{file.employeeName}</span>
              </div>
            </div>
            <div className="w-2/4 max-sm:w-full flex justify-between max-sm:mb-1">
              <div className="text-[#4F4F4F] text-center">{file.fileSize}</div>
              <Button className="w-20 h-5 bg-transparent hover:bg-transparent rounded-md capitalize border-none text-[#2F80ED] hover:text-[#2F80ED]">
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Button className="text-[#2F80ED] bg-transparent hover:bg-transparent font-bold capitalize w-fit p-0">
          add new file
          <FolderPlus />
        </Button>
        <Button
          onClick={() => setOpen(true)}
          className="text-[#2F80ED] bg-transparent hover:bg-transparent font-bold capitalize w-fit p-0"
        >
          show more
          <FolderClosed />
        </Button>
      </div>
      {Open && (
        <motion.div
          variants={filesWindow}
          initial="hidden"
          animate="show"
          className="fixed bg-white shadow-xl size-4/5 left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 z-50 overflow-hidden p-4"
        >
          <div className="w-full flex justify-end">
            <CircleX onClick={() => setOpen(false)} />
          </div>
          <div className="w-full text-sm h-full p-6 mt-4 overflow-y-auto">
            {files.map((file) => (
              <motion.div
                variants={filesWindowChild}
                key={file.fileId}
                className="flex items-center justify-between max-sm:flex-col border-b border-borderColor transition-colors hover:bg-muted/50"
              >
                <div className="flex w-2/4 max-sm:w-full">
                  <Image
                    src={file.fileImage}
                    alt="file icon"
                    width={100}
                    height={100}
                    className="w-10"
                  />
                  <div className="grid p-4">
                    <span className="truncate">{file.fileName}</span>
                    <span className="text-[#828282]">{file.employeeName}</span>
                  </div>
                </div>
                <div className="w-2/4 max-sm:w-full flex justify-between max-sm:mb-1">
                  <div className="text-[#4F4F4F] text-center">
                    {file.fileSize}
                  </div>
                  <Button className="w-20 h-5 bg-transparent hover:bg-transparent rounded-md capitalize border-none text-[#2F80ED] hover:text-[#2F80ED]">
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </Card>
  );
};
export default FileAttachment;
// "use client"
// import * as React from "react"
// import { Progress } from "@/components/ui/progress"
// export function ProgressDemo() {
//   const [progress, setProgress] = React.useState(13)
//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])
//   return <Progress value={progress} className="w-[60%]" />
// }
