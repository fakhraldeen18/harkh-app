"use client";
import * as React from "react";
import {
  FolderGit2,
  Home,
  KanbanSquare,
  List,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const recentProjects = [
  { name: "Mobile App", color: "bg-green-500" },
  { name: "Website Redesign", color: "bg-orange-500" },
  { name: "Design System", color: "bg-yellow-500" },
];
export function DashboardSideBar() {
  const pathname = usePathname();
  const navItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: KanbanSquare, label: "Kanban", href: "/kanban" },
    { icon: List, label: "List", href: "/list" },
    { icon: FolderGit2, label: "Projects", href: "/projects" },
    { icon: User, label: "Members", href: "/members" },
    { icon: Settings, label: "Setting", href: "/settings" },
  ].map((item) => ({
    ...item,
    isActive: pathname === item.href,
  }));
  return (
    <SidebarProvider className="w-fit">
      <Sidebar
        variant="floating"
        className="fixed inset-y-0 left-0 z-10 flex h-full w-14 flex-col  bg-background sm:w-64"
        collapsible="icon"
      >
        <SidebarHeader className="flex h-16 shrink-0 items-center border-b px-4 sm:px-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">H</span>
            </div>
            <span className="hidden font-bold text-lg text-blue-900 sm:block">
              HRAKH
            </span>
          </motion.div>
        </SidebarHeader>
        <SidebarContent className="flex flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
          <SidebarMenu>
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={cn(
                      "flex items-center gap-4 rounded-md px-3 py-7 text-muted-foreground transition-colors hover:bg-blue-50 hover:text-accent-foreground",
                      item.isActive &&
                        "data-[active=true]:bg-[#D6E4F0] data-[active=true]:text-blue-800 data-[active=true]:font-bold"
                    )}
                  >
                    <Link href={item.href} className="flex items-center gap-4">
                      <item.icon className="h-5 w-5" />
                      <span className="hidden text-sm font-medium sm:block">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </motion.div>
            ))}
          </SidebarMenu>
          <div className="mt-8">
            <SidebarGroupLabel className="hidden px-3 text-xs font-medium text-muted-foreground mb-4 sm:block">
              RECENT PROJECTS
            </SidebarGroupLabel>
            <SidebarMenu>
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navItems.length + index) * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center gap-4 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <Link href="#" className="flex items-center gap-4">
                        <div
                          className={cn("h-2 w-2 rounded-full", project.color)}
                        />
                        <span className="hidden text-sm font-medium sm:block">
                          {project.name}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </div>
        </SidebarContent>
        <SidebarFooter className="px-4 py-4 sm:px-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <SidebarMenuButton className="flex w-full items-center gap-4 rounded-md bg-blue-900 px-3 py-2 text-white hover:bg-blue-800">
                  <LogOut className="h-5 w-5" />
                  <span className="hidden text-sm font-medium sm:block">
                    Logout
                  </span>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
