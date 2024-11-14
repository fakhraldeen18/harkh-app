import { Link } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    phone: ""
  })
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("user:", user)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <div className=" flex flex-col justify-between">
      <></>
      <form className="mr-8" onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-sm mt-10 lg:mt-20 ml-10 md:ml-auto rounded ">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent className="mt-9">
            <div className="grid gap-4 text-left">
              <div className="grid gap-2">
                <Label htmlFor="name">name</Label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Max Robinson"
                  required
                  onChange={handleChange}
                  className="rounded "
                />
              </div>
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={handleChange}
                    className="rounded "
                  />
                </div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  name="phone"
                  id="phone"
                  type="number"
                  placeholder="966501234567"
                  required
                  onChange={handleChange}
                  className="rounded "
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  required
                  onChange={handleChange}
                  className="rounded "
                />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
