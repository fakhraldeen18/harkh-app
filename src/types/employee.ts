export interface Employee {
    id: string
    name: string
    email: string
    role: string
    status: "Full time" | "Part time" | "Contract"
    avatar: string
  }
  
  export interface EmployeeFilters {
    role?: string
    status?: string
    search?: string
  }
  
  