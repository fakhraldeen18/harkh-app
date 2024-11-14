import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("login:", login)
    navigate("/")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin({
      ...login,
      [name]: value
    })
  }

  return (
    <div className=" flex flex-col justify-between">
      <></>
      <form className="mr-8" onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-sm mt-10 lg:mt-32 ml-10 md:ml-auto rounded">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent className="mt-9">
            <div className="grid gap-4 text-left">
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
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  className="rounded "
                />
              </div>
              <Button type="submit" className="w-full hover:bg-blue-gray-300 rounded">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signUp" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
