import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTaskStore } from "@/store/store";
import { Plus } from "lucide-react";
import React from "react";


export const AddTaskDialog: React.FC = () => {
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData) as Record<string, string>;

    const { title, description } = formEntries;
    if (!title || !description) return;
// tags
    addTask(title, description);
    console.log("Task Title:", title, "Task Description:", description);
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="md" className="flex items-center gap-1">
          <Plus />
          <span>Add Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Provide details for the new task below.</DialogDescription>
        </DialogHeader>
        <form 
        id="todo-form"
        onSubmit={handleSubmit}
        className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-name" className="text-right">
              Task Name
            </Label>
            <Input id="task-name"  name="title" placeholder="Enter task name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-desc" className="text-right">
              Description
            </Label>
            <Input id="task-desc" name="description" placeholder="Enter task description" className="col-span-3" />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" form="todo-form">Save Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}