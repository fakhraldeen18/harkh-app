'use client';

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function NavActions() {
  return (
    <div className="flex items-center space-x-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative"
        onClick={() => {
          // Handle notifications
          console.log('Opening notifications...');
        }}
      >
        <Bell className="h-5 w-5" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </Button>
      <Avatar>
        <AvatarImage src="/avatar-placeholder.jpg" alt="User avatar" />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
    </div>
  );
}
