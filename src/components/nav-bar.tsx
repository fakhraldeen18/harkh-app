"use client";

import { Bell, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NotificationsBell from "./nitification-bell";
import { motion } from "framer-motion";

export function DashboardNavBar() {
  return (
    <div className="p-3">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 sm:h-20 sm:px-6 rounded-lg"
      >
        <div className="flex-1 flex gap-4 items-center">
          <div className="relative w-full max-w-sm sm:w-[300px] md:w-[400px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 w-full" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <NotificationsBell />
          </Button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-9 w-9 rounded-full overflow-hidden"
          >
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/assets/images/logo.png"
                  width="36"
                  height="36"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           
          </motion.div>
         
        </div>
      </motion.div>
    </div>
  );
}
