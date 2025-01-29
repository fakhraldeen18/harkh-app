"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenCheck, CircleX, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
const membersInfo = [
  {
    memberId: 0,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Project Owner",
  },
  {
    memberId: 1,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Member",
  },
  {
    memberId: 2,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Member",
  },
  {
    memberId: 3,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Member",
  },
  {
    memberId: 4,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Member",
  },
  {
    memberId: 5,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Member",
  },
  {
    memberId: 6,
    memberImage: "/assets/images/wallpaperflare.com_wallpaper.jpg",
    memberName: "Fahad AlAnazi",
    memberRole: "Member",
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
const ProjectMember = () => {
  const [windowWidth, setWindowWidth] = useState(4);
  const [Open, setOpen] = useState<boolean>(false);
  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth <= 640 ? 4 : 6);
    if (Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [Open]);
  return (
    <div className="w-full capitalize bg-white p-4 rounded-lg h-fit">
      <h2 className="pb-4 font-bold">
        Project Members{" "}
        <span className="text-[#2f80ed]">{membersInfo.length}</span>
      </h2>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 grid-rows-2 gap-4">
        {membersInfo.slice(0, windowWidth).map((member) => (
          <Card
            key={member.memberId}
            className="rounded-xl grid grid-cols-[3rem_auto] items-center p-2 h-16"
          >
            <Image
              src={member.memberImage}
              alt="member image"
              width={100}
              height={100}
              className="rounded-full size-12 object-cover"
            />
            <CardContent className="h-fit p-0 w-full text-center">
              <CardTitle className="text-sm">{member.memberName}</CardTitle>
              <CardDescription className="text-[#828282]">
                {member.memberRole}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
        <button
          onClick={() => setOpen(true)}
          className="grid rounded-xl shadow-sm border grid-cols-[3rem_auto] items-center p-2 h-16"
        >
          <div className="flex justify-center items-center rounded-full size-12 border-dashed border-2 border-[#4F4F4F]">
            <BookOpenCheck strokeWidth={1.2} />
          </div>
          <h2 className="text-base font-normal text-center w-full">
            show all Members
          </h2>
        </button>
        <button className="grid rounded-xl shadow-sm border grid-cols-[3rem_auto] items-center p-2 h-16">
          <div className="flex justify-center items-center rounded-full size-12 border-dashed border-2 border-[#4F4F4F]">
            <UserRoundPlus strokeWidth={1.2} />
          </div>
          <h2 className="text-base font-normal text-center w-full">
            add Member
          </h2>
        </button>
      </div>
      {Open && (
        <motion.div
          variants={membersInfoWindow}
          initial="hidden"
          animate="show"
          className="fixed bg-white shadow-xl size-4/5 left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 z-50 overflow-hidden p-4"
        >
          <div className="w-full flex justify-end">
            <CircleX onClick={() => setOpen(false)} />
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4 overflow-hidden overflow-y-auto h-fit max-h-full w-full">
            {membersInfo.map((member) => (
              <motion.div
                variants={membersInfoWindowChiles}
                className="border bg-card text-card-foreground shadow-sm rounded-xl grid grid-cols-[3rem_auto] items-center p-2 h-16"
                key={member.memberId}
              >
                <Image
                  src={member.memberImage}
                  alt="member image"
                  width={100}
                  height={100}
                  className="rounded-full size-12 object-cover"
                />
                <CardContent className="h-fit p-0 w-full text-center">
                  <CardTitle className="text-sm">{member.memberName}</CardTitle>
                  <CardDescription className="text-[#828282]">
                    {member.memberRole}
                  </CardDescription>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default ProjectMember;
