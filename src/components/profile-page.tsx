import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6">Husam Profile</h1>

      {/* Profile Banner */}
      <div className="relative bg-gray-100 rounded-lg p-6 mb-8">
        <div className="flex items-end gap-4">
          <Avatar className="h-20 w-20 border-4 border-white">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Husam Alzain" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Husam Alzain</h2>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
        <div className="absolute top-6 right-6">
          <img src="/placeholder.svg?height=40&width=40" alt="Saudi emblem" className="h-10 w-10 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Nationality</label>
              <p className="text-gray-900">Saudi Arabia</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Date of birth</label>
              <p className="text-gray-900">1999-10-26</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-gray-900">Alghu@gmail.com</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Mobile number</label>
              <p className="text-gray-900">0837263636</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["PMO", "User Experience", "Graphic Designer", "UI Designer", "Team Work", "Efficacy"].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <img src="/placeholder.svg?height=32&width=32" alt="University logo" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold">University of Hail</h3>
                <p className="text-sm text-gray-600">Sep 2022</p>
                <p className="text-sm text-gray-600">GPA: 4 out of 4</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <img src="/placeholder.svg?height=32&width=32" alt="University logo" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold">King Saud University</h3>
                <p className="text-sm text-gray-600">Software Engineering</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <h3 className="font-semibold">February to August 2022</h3>
                  <p className="text-sm font-medium text-gray-600">Harkh, Development Division</p>
                  <p className="mt-2 text-sm text-gray-600">
                    I worked as intern for 6 months to develop a tracking system for Industrial Competency Test. This
                    system requires a lot of data and linking it to get effective output which effective output with
                    framework ASP.net
                  </p>
                </div>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <h3 className="font-semibold">February to August 2022</h3>
                  <p className="text-sm font-medium text-gray-600">Harkh, Development Division</p>
                  <p className="mt-2 text-sm text-gray-600">
                    I worked as intern for 6 months to develop a tracking system for Industrial Competency Test. This
                    system requires a lot of data and linking it to get effective output which effective output with
                    framework ASP.net
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

