import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, FolderIcon, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          <Avatar>
            <AvatarImage src="/avatar-placeholder.jpg" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto text-center">
          <div className="mb-6">
            <FolderIcon className="h-24 w-24 text-muted-foreground/50" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No Projects Yet</h2>
          <p className="text-muted-foreground mb-6">
            Create your first project to get started.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Add New Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
