"use client";
import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { signupSchema, type SignupInput } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function SignupForm() {
  // Framer Motion variants (optional; customize delay/duration)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.5 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      // name: "",
      email: "",
      // phone: "",
      password: "",
      confirmPassword: "",
    },
  });
  // Local states for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Handle input changes (optional)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name as keyof SignupInput, value);
  };
  // Handle form submission
  const onSubmit = handleSubmit((data: SignupInput) => {
    console.log("signup:", data);
    // Make an API call or any post-submit logic here
  });
  return (
    <div className="flex min-h-screen">
      {/* Left side: Form */}
      <div className="w-full max-w-md mx-auto p-8 space-y-8 flex flex-col justify-center">
        {/* Parent motion container */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* (Optional) Logo / Title */}
          {/* <div className="mb-6 flex justify-center">
            <img src="/assets/images/logo.png" alt="Logo" className="h-14" />
          </div> */}
          {/* Animated heading */}
          <motion.h2
            className="text-center text-5xl font-bold text-blue-700"
            variants={itemVariants}
          >
            Sign Up
          </motion.h2>
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Name */}
            {/* <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </Label>
              <Input
                {...register("name")}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-sm text-red-400">{errors.name.message}</p>
              )}
            </div> */}
            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                {...register("email")}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="m@example.com"
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>
            {/* Phone */}
            {/* <div>
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </Label>
              <Input
                {...register("phone")}
                onChange={handleChange}
                id="phone"
                type="tel"
                placeholder="966501234567"
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div> */}
            {/* Password */}
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative mt-1">
                <Input
                  {...register("password")}
                  onChange={handleChange}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Confirm Password */}
            <div>
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <div className="relative mt-1">
                <Input
                  {...register("confirmPassword")}
                  onChange={handleChange}
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="w-full rounded-lg border px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showConfirmPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700"
            >
              Sign Up
            </Button>
            {/* Sign in link */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/login">Sign in</Link>
            </Button>
          </motion.form>
        </motion.div>
      </div>
      {/* Right side: Image */}
      <div className="relative hidden md:block md:w-1/2">
        <Image
          src="/assets/images/laptop.png"
          alt="Laptop on desk with coffee"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
