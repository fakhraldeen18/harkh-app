"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

import { Button } from './ui/button';
import React from 'react'
import { motion } from 'framer-motion';

export default function UserDropdown() {
  return (
    
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
  );
}
