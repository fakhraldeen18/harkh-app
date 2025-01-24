"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import NotificationsBell from "./NotificationBell";
import UserDropdown from "./user-dropdown";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export function DashboardNavBar() {
  const pageName = usePathname().split("/")[1];
  return (
    <div className="p-3">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b-2 border-borderColor bg-body px-4 sm:h-16 sm:px-6 rounded-t-lg">
          <div className="flex-1 flex gap-4 items-center">
            <div className="relative w-full max-w-sm sm:w-[300px] md:w-[400px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 w-full border-borderColor"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NotificationsBell />
            <UserDropdown />
          </div>
        </div>

        <div className="bg-body rounded-b-lg max-sm:h-10 h-12 max-sm:px-4 px-6 flex items-center capitalize">
          {pageName}
        </div>
      </motion.div>
    </div>
  );
}
