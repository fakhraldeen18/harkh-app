"use client"

import { useState } from "react"
import { Link, Link2, MoreHorizontal, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ListPage() {
  const [filter, setFilter] = useState("All Tasks")
  const [dateRange, setDateRange] = useState("Today")
  const [tasks, setTasks] = useState([
    { id: 1, title: "Headline for the Task", completed: false },
    { id: 2, title: "Headline for the Task", completed: false },
  ])

  // Sample team members data
  const teamMembers = [
    { src: "/placeholder.svg?height=32&width=32&text=1", fallback: "U1" },
    { src: "/placeholder.svg?height=32&width=32&text=2", fallback: "U2" },
    { src: "/placeholder.svg?height=32&width=32&text=3", fallback: "U3" },
    { src: "/placeholder.svg?height=32&width=32&text=4", fallback: "U4" },
  ]

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">Mobile App</h1>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                <Link2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                <Link className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-9 text-sm font-normal">
            <Users className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {teamMembers.map((member, i) => (
              <Avatar key={i} className="border-2 border-background h-8 w-8">
                <AvatarImage src={member.src} />
                <AvatarFallback>{member.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-9 px-3 text-sm font-normal">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                Filter
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuItem>All Tasks</DropdownMenuItem>
              <DropdownMenuItem>Active Tasks</DropdownMenuItem>
              <DropdownMenuItem>Completed Tasks</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-9 px-3 text-sm font-normal">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Today
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>This Week</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Milestone */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-medium">Headline for the mileston</h3>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24&text=1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24&text=2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5">
            <div className="bg-primary h-full rounded-full" style={{ width: "70%" }} />
          </div>
        </div>

        {/* Tasks - Add ml-8 class for left margin */}
        <div className="ml-8 space-y-3">
          {tasks.map((task, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox className="h-5 w-5 rounded-md" />
                  <span className="text-base">{task.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((num) => (
                      <Avatar key={num} className="border-2 border-background h-6 w-6">
                        <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${num}`} />
                        <AvatarFallback>U{num}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="text-sm text-gray-500">6 Nov 2024</span>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    Low
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

