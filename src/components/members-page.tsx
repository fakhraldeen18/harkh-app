"use client"

import { useReducer, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Grid, List, MoreVertical, X } from "lucide-react"
import type { Employee, EmployeeFilters } from "@/types/employee"
import { EmployeeFilter } from "@/components/employee-filter"
import { NewEmployeeDialog } from "@/components/new-employee-dialog"
import { EditEmployeeDialog } from "@/components/edit-employee-dialog"
import { ViewProfileDialog } from "@/components/view-profile-dialog"
import { toast } from "@/components/use-toast"

function truncateId(id: string): string {
  return id.length > 15 ? `${id.slice(0, 12)}...` : id
}

function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Action types
type Action =
  | { type: "ADD_EMPLOYEE"; payload: Omit<Employee, "id"> }
  | { type: "UPDATE_EMPLOYEE"; payload: Employee }
  | { type: "DELETE_EMPLOYEE"; payload: string }
  | { type: "SELECT_EMPLOYEE"; payload: { id: string; selected: boolean } }
  | { type: "SELECT_ALL_EMPLOYEES"; payload: boolean }

// Reducer function
function employeeReducer(state: Employee[], action: Action): Employee[] {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, { ...action.payload, id: generateUniqueId(), avatar: "/placeholder.svg?height=40&width=40" }]
    case "UPDATE_EMPLOYEE":
      return state.map((emp) => (emp.id === action.payload.id ? action.payload : emp))
    case "DELETE_EMPLOYEE":
      return state.filter((emp) => emp.id !== action.payload)
    default:
      return state
  }
}

// Sample data with unique IDs
const initialEmployees: Employee[] = [
  {
    id: generateUniqueId(),
    name: "husam alzain",
    email: "husamzain@gmail.com",
    role: "UX/UI Designer",
    status: "Full time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "Jack Jeems",
    email: "jack21@gmail.com",
    role: "UX Consultant",
    status: "Contract",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "Noura AlSadhan",
    email: "Noura_Alsadhan32@gmail.com",
    role: "UI Designer",
    status: "Full time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "Sara AlNasser",
    email: "SaraAhmed@gmail.com",
    role: "UX Researcher",
    status: "Full time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "Salman AlFahad",
    email: "Salman.AlFahad@gmail.com",
    role: "UX/UI designer",
    status: "Part time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    role: "UX Researcher",
    status: "Part time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "Abdulaziz AlRajhi",
    email: "Abdulaziz_Alrajhi@gmail.com",
    role: "UX Analyst",
    status: "Part time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: generateUniqueId(),
    name: "Mohammed AlHarbi",
    email: "Mohammed_Alharbi@gmail.com",
    role: "UX Analyst",
    status: "Full time",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function MembersPage() {
  const [employees, dispatch] = useReducer(employeeReducer, initialEmployees)
  const [selectedView, setSelectedView] = useState<"list" | "grid">("list")
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<EmployeeFilters>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null)
  const [viewingEmployee, setViewingEmployee] = useState<Employee | null>(null)

  const itemsPerPage = 8
  const totalPages = Math.ceil(employees.length / itemsPerPage)

  const handleSelectAll = (checked: boolean) => {
    setSelectedEmployees(checked ? paginatedEmployees.map((e) => e.id) : [])
  }

  const handleSelectEmployee = (employeeId: string, checked: boolean) => {
    setSelectedEmployees((prev) => (checked ? [...prev, employeeId] : prev.filter((id) => id !== employeeId)))
  }

  const handleExport = () => {
    const selectedData = employees.filter((emp) => selectedEmployees.includes(emp.id))
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "\uFEFF" +
      "Name,Email,Role,Status,ID\n" +
      selectedData.map((emp) => `${emp.name},${emp.email},${emp.role},${emp.status},${emp.id}`).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "employees.csv")

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Export Successful",
      description: `Exported ${selectedData.length} employee records`,
    })
  }

  const handleAddEmployee = (data: Omit<Employee, "id" | "avatar">) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: { ...data, avatar: "/placeholder.svg?height=40&width=40" },
    })
    toast({
      title: "Employee Added",
      description: `Successfully added ${data.name} to the system`,
    })
  }

  const handleDeleteEmployee = (employeeId: string) => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: employeeId })
    setSelectedEmployees((prev) => prev.filter((id) => id !== employeeId))
    toast({
      title: "Employee Removed",
      description: "Successfully removed employee from the system",
      variant: "destructive",
    })
  }

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    dispatch({ type: "UPDATE_EMPLOYEE", payload: updatedEmployee })
    setEditingEmployee(null)
    toast({
      title: "Employee Updated",
      description: `Successfully updated ${updatedEmployee.name}'s information`,
    })
  }

  const handleResetFilters = () => {
    setFilters({})
    setSearchQuery("")
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      !searchQuery ||
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole = !filters.role || employee.role === filters.role
    const matchesStatus = !filters.status || employee.status === filters.status

    return matchesSearch && matchesRole && matchesStatus
  })

  const paginatedEmployees = filteredEmployees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Employees</h1>
          <span className="px-2 py-1 text-sm bg-secondary rounded-md">{filteredEmployees.length}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleExport} disabled={selectedEmployees.length === 0}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <NewEmployeeDialog onSubmit={handleAddEmployee} />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-[400px]">
          <Input
            type="search"
            placeholder="Search Employee by name, role, ID or any related keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4"
          />
        </div>
        <div className="flex items-center gap-3">
          <EmployeeFilter
            onFilterChange={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
            onResetFilters={handleResetFilters}
            activeFilters={filters}
          />
          <div className="flex items-center rounded-md border bg-background">
            <Button
              variant={selectedView === "list" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-l-md rounded-r-none"
              onClick={() => setSelectedView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={selectedView === "grid" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-l-none rounded-r-md"
              onClick={() => setSelectedView("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        {selectedView === "list" ? (
          <div>
            <div className="grid grid-cols-[auto_2fr_1fr_1fr_auto] gap-4 p-4 bg-muted/50">
              <div className="flex items-center">
                <Checkbox
                  checked={selectedEmployees.length === paginatedEmployees.length}
                  onCheckedChange={handleSelectAll}
                />
              </div>
              <div className="font-medium">Name</div>
              <div className="font-medium">Employee ID</div>
              <div className="font-medium">Role</div>
              <div className="w-8" />
            </div>
            <div className="divide-y">
              {paginatedEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="grid grid-cols-[auto_2fr_1fr_1fr_auto] gap-4 p-4 items-center hover:bg-muted/50"
                >
                  <div className="flex items-center">
                    <Checkbox
                      checked={selectedEmployees.includes(employee.id)}
                      onCheckedChange={(checked) => handleSelectEmployee(employee.id, checked as boolean)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>{employee.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-sm text-muted-foreground">{employee.email}</div>
                    </div>
                  </div>
                  <div className="text-sm">{truncateId(employee.id)}</div>
                  <div>
                    <div className="font-medium">{employee.role}</div>
                    <div className="text-sm text-muted-foreground">{employee.status}</div>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onSelect={() => setViewingEmployee(employee)}>View Profile</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setEditingEmployee(employee)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                          onSelect={() => handleDeleteEmployee(employee.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedEmployees.map((employee) => (
              <div
                key={employee.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>{employee.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">
                      <span className="font-medium">ID:</span> {employee.id}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Role:</span> {employee.role}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Status:</span> {employee.status}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => setViewingEmployee(employee)}>View Profile</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setEditingEmployee(employee)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onSelect={() => handleDeleteEmployee(employee.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "secondary" : "ghost"}
              size="sm"
              className="w-8"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      {editingEmployee && (
        <EditEmployeeDialog
          employee={editingEmployee}
          onSave={handleUpdateEmployee}
          open={!!editingEmployee}
          onOpenChange={(open) => !open && setEditingEmployee(null)}
        />
      )}
      {viewingEmployee && (
        <ViewProfileDialog
          employee={{ ...viewingEmployee, id: viewingEmployee.id }}
          open={!!viewingEmployee}
          onOpenChange={(open) => !open && setViewingEmployee(null)}
        />
      )}
    </div>
  )
}

