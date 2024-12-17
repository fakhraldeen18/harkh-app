import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import workspaceImage from "@/assets/images/workspace.jpg"

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [login, setLogin] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("login:", login)
    navigate("/")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back! Please enter your details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  value={login.email}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    value={login.password}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={login.rememberMe}
                    onCheckedChange={(checked) => 
                      setLogin(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Keep me logged in
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-primary hover:text-primary/90"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button type="submit" className="w-full">
                Sign in
              </Button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={workspaceImage}
          alt="Workspace with laptop and coffee"
          loading="lazy"
        />
      </div>
    </div>
  )
}
