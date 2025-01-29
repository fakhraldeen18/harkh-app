import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"
import type { Employee } from "@/types/employee"

interface NewEmployeeDialogProps {
  onSubmit: (data: Omit<Employee, "id" | "avatar">) => void
}

export function NewEmployeeDialog({ onSubmit }: NewEmployeeDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<Omit<Employee, "id" | "avatar">>({
    name: "",
    email: "",
    role: "",
    status: "Full time",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setOpen(false)
    setFormData({ name: "", email: "", role: "", status: "Full time" })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
          <Plus className="mr-2 h-4 w-4" />
          New Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
            <DialogDescription>Add a new employee to your organization. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UX/UI Designer">UX/UI Designer</SelectItem>
                  <SelectItem value="UX Consultant">UX Consultant</SelectItem>
                  <SelectItem value="UI Designer">UI Designer</SelectItem>
                  <SelectItem value="UX Researcher">UX Researcher</SelectItem>
                  <SelectItem value="UX Analyst">UX Analyst</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, status: value as "Full time" | "Part time" | "Contract" }))
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full time">Full time</SelectItem>
                  <SelectItem value="Part time">Part time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Employee</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

