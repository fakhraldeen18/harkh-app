import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Employee } from "@/types/employee"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ViewProfileDialogProps {
  employee: Employee | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ViewProfileDialog({ employee, open, onOpenChange }: ViewProfileDialogProps) {
  if (!employee) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Employee Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={employee.avatar} alt={employee.name} />
              <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{employee.name}</h2>
              <p className="text-sm text-muted-foreground">{employee.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Role</p>
              <p className="text-sm">{employee.role}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Status</p>
              <p className="text-sm">{employee.status}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Employee ID</p>
              <p className="text-sm">{employee.id}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

