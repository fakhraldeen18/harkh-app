'use client';

import { Button } from "@/components/ui/button";
import { FolderIcon } from "lucide-react";

export function ProjectActions() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto text-center">
      <div className="mb-6">
        <FolderIcon className="h-24 w-24 text-muted-foreground/50" />
      </div>
      <h2 className="text-2xl font-bold mb-2">No Projects Yet</h2>
      <p className="text-muted-foreground mb-6">
        Create your first project to get started.
      </p>
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700"
        onClick={() => {
          // Handle new project creation
          console.log('Creating new project...');
        }}
      >
        Add New Project
      </Button>
    </div>
  );
}
