"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, Bell, HelpCircle, MessageSquareText, Settings2, Shield, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import type React from "react"

const settingsCards = [
  {
    title: "Personal info",
    description: "Provide personal details and how we can reach you",
    icon: MessageSquareText,
    href: "/settings/personal-info",
  },
  {
    title: "Login & security",
    description: "Update your password and secure your account",
    icon: Shield,
    href: "/settings/login-security",
  },
  {
    title: "Notifications",
    description: "Choose notification preferences and how you want to be contacted",
    icon: Bell,
    href: "/settings/notifications",
  },
  {
    title: "Global preferences",
    description: "Set your default language, currency, and timezone",
    icon: Settings2,
    href: "/settings/global-preferences",
  },
  {
    title: "Help Center",
    description: "Set your default language, currency, and timezone",
    icon: HelpCircle,
    href: "/settings/help-center",
  },
  {
    title: "Privacy Policy",
    description: "Set your default language, currency, and timezone",
    icon: ShieldCheck,
    href: "/settings/privacy-policy",
  },
]

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/settings"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-1">Profile Informations</h1>
              <p className="text-muted-foreground">
                Complete your profile to unlock more opportunities and showcase your full potential.
              </p>
            </div>
            <Button className="whitespace-nowrap">Complete your profile</Button>
          </div>
          <div className="flex items-center gap-3">
            <Progress value={45} className="h-2" />
            <span className="text-sm font-medium text-muted-foreground">45%</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isHomePage ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {settingsCards.map((card, index) => (
                <Link href={card.href} key={card.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                   
                  >
                    <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="mt-1">
                            <card.icon className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div>
                            <h2 className="font-semibold mb-2">{card.title}</h2>
                            <p className="text-sm text-muted-foreground">{card.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Button variant="ghost" onClick={() => router.push("/settings")} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Settings
                    </Button>
                  </div>
                  {children}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

