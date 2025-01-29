import { Shield, Bell, MessageSquare, Settings2, UserCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardDescription } from "@/components/ui/card"

export default function SettingsDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Profile Progress Section */}
      <div className="bg-white rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Profile Informations</h2>
            <p className="text-sm text-muted-foreground">
              Complete your profile to explore opportunities and unleash your full potential
            </p>
          </div>
          <Button>Complete your profile</Button>
        </div>
        <Progress value={45} className="h-2" />
      </div>

      {/* Settings Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SettingsCard
          icon={<UserCircle2 className="h-5 w-5" />}
          title="Personal Info"
          description="Provide personal details and how we can reach you"
        />
        <SettingsCard
          icon={<Shield className="h-5 w-5" />}
          title="Login & security"
          description="Update your password and secure your account"
        />
        <SettingsCard
          icon={<Bell className="h-5 w-5" />}
          title="Notifications"
          description="Choose notification preferences and how you want to be contacted"
        />
        <SettingsCard
          icon={<Settings2 className="h-5 w-5" />}
          title="Global preferences"
          description="Set your default language, currency, and timezone"
        />
        <SettingsCard
          icon={<MessageSquare className="h-5 w-5" />}
          title="Help Center"
          description="Get help with your account and learn more about our features"
        />
        <SettingsCard
          icon={<Shield className="h-5 w-5" />}
          title="Privacy Policy"
          description="Review our terms regarding data use and privacy"
        />
      </div>
    </div>
  )
}

function SettingsCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <div>
            <h3 className="font-medium">{title}</h3>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

