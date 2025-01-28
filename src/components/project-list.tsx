"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import NewProjectForm from "../app/(dashboard)/projects/_components/NewProjectForm";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Fitness App",
    subtitle: "AppDevelopment #1",
    description:
      "App for a better way to work out, effective training program, perfect workout tracking.",
    image: "/placeholder.svg?height=300&width=400",
    users: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    extraUsers: 10,
  },
  {
    id: 2,
    title: "Fitness App",
    subtitle: "AppDevelopment #1",
    description:
      "App for a better way to work out, effective training program, perfect workout tracking.",
    image: "/placeholder.svg?height=300&width=400",
    users: [
      "/assets/images/logo.png",
      "/assets/images/logo.png",
      "/assets/images/logo.png",
    ],
    extraUsers: 0,
  },
];

export function ProjectsList() {

 
  

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Project</h2>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
          See all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden border bg-white"
          >
            <div className="relative h-40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-500">{project.subtitle}</p>
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  View all
                </Button>
                <div className="flex items-center -space-x-2">
                  {project.users.map((user, index) => (
                    <Avatar
                      key={index}
                      className="border-2 border-gray-200 w-7 h-7 rounded-full"
                    >
                      <AvatarImage src={user} alt="User avatar" />
                    </Avatar>
                  ))}
                  {project.extraUsers > 0 && (
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 text-xs flex items-center justify-center border-2 border-white">
                      +{project.extraUsers}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border-2  flex items-center justify-center h-[250px] bg-gray-50"
        >
          <div
           
            className="flex flex-col items-center gap-2 text-blue-600"
          >
          
            <div className="p-2 rounded-full bg-blue-50">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium">Create a new project</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
