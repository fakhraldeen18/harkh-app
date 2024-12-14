import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, FolderIcon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavActions } from "../../components/nav-actions";
import { ProjectActions } from "../../components/project-actions";
import { SearchBar } from "../../components/search-bar";

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex-1 max-w-xl mx-auto">
          <SearchBar />
        </div>
        <NavActions />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <ProjectActions />
      </div>
    </div>
  );
}
