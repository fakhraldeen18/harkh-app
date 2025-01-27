"use client";
import React, { useState, useEffect } from "react"
import Logo from "@/assets/images/Harkh.png"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Login from "../../app/(auth)/login/page"
import Register from "../../app/(auth)/signup/page"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ]

  const handleAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthDialog(true)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-md py-1" : "bg-transparent py-2"}`}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <a href="/" title="Harkh Home" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <img className="w-[100px] h-auto" src={Logo.src} alt="Harkh Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-3">
              <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  {authMode === 'login' ? (
                    <div>
                      <Login />
                      <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <button
                          onClick={() => setAuthMode('register')}
                          className="text-primary hover:underline"
                        >
                          Register
                        </button>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Register />
                      <p className="text-center mt-4">
                        Already have an account?{" "}
                        <button
                          onClick={() => setAuthMode('login')}
                          className="text-primary hover:underline"
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setExpanded(!expanded)}
            >
              <span className="sr-only">Open main menu</span>
              {expanded ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {expanded && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <User className="h-5 w-5 mr-2" />
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  {authMode === 'login' ? (
                    <div>
                      <Login />
                      <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <button
                          onClick={() => setAuthMode('register')}
                          className="text-primary hover:underline"
                        >
                          Register
                        </button>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Register />
                      <p className="text-center mt-4">
                        Already have an account?{" "}
                        <button
                          onClick={() => setAuthMode('login')}
                          className="text-primary hover:underline"
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar