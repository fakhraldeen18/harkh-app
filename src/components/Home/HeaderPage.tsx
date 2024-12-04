import React from "react"
import { Button } from "@/components/ui/button"

const HeaderPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-[calc(100vh-72px)] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Simplify Project Management with{" "}
            <span className="text-primary">AI-Powered Tools</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plan, collaborate, and deliver smarter with tools designed to enhance productivity and reduce complexity.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg"
              className="px-8"
              aria-label="Get started with project management SaaS"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage