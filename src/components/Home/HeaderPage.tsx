import React from "react"
import dashboardImage from "@/assets/images/dashboard-preview.png"
import { Button } from "@/components/ui/button"

const HeaderPage = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-[72px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>
      </div>
      
      <div className="relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-20 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Simplify Your Projects with{" "}
              <span className="relative inline-flex">
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                  Smarter Management
                </span>
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Track tasks, improve collaboration, and deliver projects faster with AI-driven insights. Experience the future of project management today.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Get started
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    style={{
                      backgroundColor: `hsl(${i * 60}, 70%, 95%)`,
                    }}
                  />
                ))}
              </div>
              <div className="text-gray-600">
                <span className="font-semibold text-gray-900">500+</span> teams already onboard
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-4">
            <div className="relative">
              <img
                src={dashboardImage}
                alt="Dashboard Preview"
                className="w-full rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -left-4 -top-4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage
