import { Link, useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function Login() {
  type SignUpSchemaType = z.infer<typeof SignUpSchema>
  type LoginType = {
    email: string
    password: string
  }
  const navigate = useNavigate()

  const SignUpSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })
  console.log(errors.email?.message)

  //we should here call like API or something...
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data: LoginType) => {
    console.log(data)
    navigate("/login")
  }

  return (
    <div className=" flex flex-col justify-between">
      <></>
      <form className="mr-8" onSubmit={handleSubmit(onSubmit)}>
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
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="m@example.com"
                  className="rounded "
                />
                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="rounded "
                />
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
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
