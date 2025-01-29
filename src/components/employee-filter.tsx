import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter, X } from "lucide-react"

interface EmployeeFilterProps {
  onFilterChange: (filters: { role?: string; status?: string }) => void
  onResetFilters: () => void
  activeFilters: { role?: string; status?: string }
}

export function EmployeeFilter({ onFilterChange, onResetFilters, activeFilters }: EmployeeFilterProps) {
  const roles = ["UX/UI Designer", "UX Consultant", "UI Designer", "UX Researcher", "UX Analyst"]
  const statuses = ["Full time", "Part time", "Contract"]

  const hasActiveFilters = activeFilters.role || activeFilters.status

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            {hasActiveFilters && <span className="ml-1 rounded-full bg-primary w-2 h-2" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Role</DropdownMenuLabel>
          {roles.map((role) => (
            <DropdownMenuCheckboxItem
              key={role}
              checked={activeFilters.role === role}
              onCheckedChange={() => onFilterChange({ role })}
            >
              {role}
            </DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          {statuses.map((status) => (
            <DropdownMenuCheckboxItem
              key={status}
              checked={activeFilters.status === status}
              onCheckedChange={() => onFilterChange({ status })}
            >
              {status}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={onResetFilters}>
          <X className="mr-2 h-4 w-4" />
          Reset
        </Button>
      )}
    </div>
  )
}

