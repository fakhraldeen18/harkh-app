import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Dot,
  Frame,
  GalleryVerticalEnd,
  LayoutGrid,
  ListTodo,
  Map,
  MessageCircle,
  PieChart,
  Settings2,
  SquareCheck,
  SquareTerminal,
  Users,
} from "lucide-react"

import { NavMain, NavProjects,NavUser } from './Sidebar';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarOptInForm } from "./Sidebar/sidebar-opt-in-form";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: LayoutGrid,
      items: [],
    },
    {
      title: "Profile",
      url: "/profile",
      icon: Users,
      items: [],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: SquareCheck,
      items: [],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Frame,
      items: [],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [],
    },
  ],
  projects: [
    {
      name: "Mobile App",
      url: "#",
     
    },
    {
      name: "Website ReDesign",
      url: "#",
     
    },
    {
      name: "Design System",
      url: "#",
      
    },
    {
      name: "Wireframes",
      url: "#",
      
    },
  ],
}
export const company = {
  name: 'harkh Inc',
  logo: GalleryVerticalEnd,
  plan: 'Enterprise'
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      
      <SidebarHeader>
      <div className="flex gap-2 py-2 text-sidebar-accent-foreground mt-1.5 ">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <company.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{company.name}</span>
            <span className="truncate text-xs">{company.plan}</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      
  
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
  
      <SidebarRail />
    </Sidebar>
  )
}
