"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import React from 'react'

export default function Settings() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Profile Completion</p>
          <Progress value={progress} className="w-full" />
        </div>
        
        <div className="flex gap-4">
          <Button variant="primary">Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
