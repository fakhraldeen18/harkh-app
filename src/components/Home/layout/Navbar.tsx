import React, { useState, useEffect } from "react"
// import Logo from "@/assets/images/Harkh.png"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-md py-1" : "bg-transparent py-2"}`}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <a href="/" title="Harkh Home" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              {/* <img className="w-[100px] h-auto" src={Logo} alt="Harkh Logo" /> */}
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
              <Button variant="outline" size="sm">Sign In</Button>
              <Button variant="default" size="sm">Create Account</Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setExpanded(!expanded)}
            >
              <span className="sr-only">Open main menu</span>
              {expanded ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {expanded && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2 bg-background">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-full px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setExpanded(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4 px-3">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button variant="default" size="sm">Create Account</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
