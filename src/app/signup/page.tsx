import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// import { ChangeEvent, FormEvent, useState } from "react";


// import { z } from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { Link, useNavigate } from "react-router-dom";
// import { SubmitHandler, useForm } from "react-hook-form";

export default function Signup() {
  // type SignUpSchemaType = z.infer<typeof SignUpSchema>;

  // const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   name: "",
  //   password: "",
  //   email: "",
  //   phone: "",
  // });
  // const handleSubmitOld = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("user:", user);
  //   navigate("/login");
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const SignUpSchema = z
  //   .object({
  //     name: z.string().min(3).max(30),
  //     email: z.string().email(),
  //     phone: z
  //       .string({
  //         required_error: "required field",
  //         invalid_type_error: "Phone is required",
  //       })
  //       .min(10),
  //     password: z
  //       .string()
  //       .min(8, { message: "Password is too short" })
  //       .max(20, { message: "Password is too long" }),
  //     confirmPassword: z.string(),
  //   })
  //   .refine((data) => data.password === data.confirmPassword, {
  //     message: "Passwords do not match",
  //     path: ["confirmPassword"], // path of error
  //   });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  // console.log(errors.email?.message);

  //we should here call like API or something...
  // const onSubmit: SubmitHandler<SignUpSchemaType> = (data: any) => {
  //   console.log(data);
  // };

  return (
    <div className=" flex flex-col justify-between">
      <></>
      <form className="mr-8"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Card className="mx-auto max-w-sm mt-10 lg:mt-20 ml-10 md:ml-auto rounded ">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-9">
            <div className="grid gap-4 text-left">
              <div className="grid gap-2">
                <Label htmlFor="name">name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Max Robinson"
                  // {...register("name")}
                  className="rounded "
                />
                {/* {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )} */}
              </div>
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    // {...register("email")}
                    className="rounded "
                  />
                  {/* {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )} */}
                </div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="number"
                  placeholder="966501234567"
                  // {...register("phone")}
                  className="rounded "
                />
                {/* {errors.phone && (
                  <span className="text-red-600">{errors.phone.message}</span>
                )} */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  // {...register("password")}
                  className="rounded "
                />
                {/* {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )} */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">confirmPassword</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  // {...register("confirmPassword")}
                  className="rounded "
                />
                {/* {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )} */}
              </div>
              <Button
                type="submit"
                className="w-full hover:bg-blue-gray-300 rounded "
              >
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
