import { Separator } from "@/components/ui/separator"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import SearchInput from "../ui/search-input"
import { NavUser } from './Sidebar';
import { Bell, CalendarDays, MessageCircle } from "lucide-react"
const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-20 bg-sidebar items-center justify-between gap-2 transition-[width,height] ease-linear border-b-2 border-gray-100 mb-4 ">
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <SearchInput />
    </div>
    <div className="flex items-center gap-2 px-4">
        <div className="hidden md:flex mr-8 gap-2">
        <CalendarDays className="mr-2  my-1.5 h-4 w-4"/>
        <MessageCircle  className="mr-2 my-1.5 h-4 w-4"/>
        <Bell className="mr-2 mt-1.5 h-4 w-4"/>
        
        </div>
        <NavUser user={{
          name: "Sarah Althowebi",
          email: "Us, Floridia ",
          avatar: ""
        }}/>
      
        {/* <ThemeToggle /> */}
      </div>
  </header>
  )
}

export default Header