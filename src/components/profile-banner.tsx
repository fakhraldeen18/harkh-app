"use client";
import { GlobalContext } from "@/app/(context)/globalProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";

export default function ProfileBanner() {
  const context = useContext(GlobalContext);
  if (!context) throw Error("Context is missing");
  const { state } = context;
  return (
    <div className="mb-6 overflow-hidden w-[94%] mx-auto mt-8 rounded-xl  shadow col-span-3">
      <div className="relative h-48 bg-gray-100">
        <Image
          src="/assets/images/sa_bg.png"
          alt="Banner"
          className="object-cover z-10"
          fill
        />
      </div>
      <div className="relative -mt-16 flex items-end justify-between px-6 pb-6 bg-white">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/images/pic.png"
            alt="Profile Picture"
            className="rounded-full border border-gray-400  relative z-10"
            width={120}
            height={120}
          />
          <div className=" relative z-20 top-10">
            <h2 className="text-2xl font-bold">{state.user?.emailaddress}</h2>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="border-[#0A0F51] text-[#0A0F51] font-bold"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
