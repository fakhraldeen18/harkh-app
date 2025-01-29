// 'use client'
// import { useState, type ChangeEvent, type FormEvent } from 'react'
// import Link from 'next/link'
// import { Eye, EyeOff, ArrowRight } from 'lucide-react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { loginSchema, type LoginInput } from '@/lib/validations/auth'
// import { Button } from '@/components/ui/button'
// import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import Image from 'next/image'
// export function LoginForm() {
//   const form = useForm<LoginInput>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   })
//   const [showPassword, setShowPassword] = useState(false)
//   const handleSubmit = form.handleSubmit((data: LoginInput) => {
//     console.log('login:', data)
//   })
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     form.setValue(name, value)
//   }
//   return (
//     <div className="flex min-h-screen">
//       {/* Left side: Form */}
//       <div className="flex w-full flex-col justify-center px-8 py-12 md:w-1/2 md:px-16 bg-white">
//         {/* You can optionally add your logo here */}
//         {/* <div className="mb-8 flex justify-center">
//           <img
//             src="/assets/images/logo.png"
//             alt="HRAKH Logo"
//             className="h-14"
//           />
//         </div> */}
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Sign in</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <Label htmlFor="email" className="text-sm font-medium text-gray-700">
//               Email
//             </Label>
//             <Input
//               {...form.register('email')}
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//               onChange={handleChange}
//               className="mt-1 w-full"
//             />
//           </div>
//           <div>
//             <Label htmlFor="password" className="text-sm font-medium text-gray-700">
//               Password
//             </Label>
//             <div className="relative mt-1">
//               <Input
//                 {...form.register('password')}
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter your password"
//                 required
//                 onChange={handleChange}
//                 className="w-full pr-10"
//               />
//               <Button
//                 type="button"
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-transparent"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 <span className="sr-only">
//                   {showPassword ? 'Hide password' : 'Show password'}
//                 </span>
//               </Button>
//             </div>
//           </div>
//           {/* "Keep me logged in" checkbox (optional) */}
//           <div className="flex items-center">
//             <Input
//               id="remember"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300"
//             />
//             <Label
//               htmlFor="remember"
//               className="ml-2 text-sm text-gray-700 cursor-pointer"
//             >
//               Keep me logged in
//             </Label>
//           </div>
//           {/* Sign in button */}
//           <Button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
//           >
//             Sign in
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//           {/* Sign up link */}
//           <p className="text-center text-sm text-gray-600">
//             Don’t have an account?{' '}
//             <Link href="/signup" className="font-medium text-blue-600 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//       {/* Right side: Image */}
//       <div className="hidden md:block md:w-1/2">
//         {/* If you have a local image, you might do something like: */}
//         <Image
//              src="/assets/images/laptop.png"
//              alt="Laptop on desk with coffee"
//           //  fill
//           width={400}
//           height={400}
//              className=""
//            />
//            {/* or a plain <img> tag if you prefer: */}
//         {/* <Image
//           src="/assets/images/laptop.png"
//           alt="Laptop on desk with coffee"
//           // className="object-cover"
//           fill
//         /> */}
//       </div>
//     </div>
//   )
// }
"use client";
import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
export default function LoginForm() {
  // Framer Motion variants
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
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Local state for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Handle form submission
  const handleSubmit = form.handleSubmit((data: LoginInput) => {
    console.log("login:", data);
    // You can make an API call or do any post-submit logic here
  });
  // Handle input changes (optional)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name, value);
  };
  return (
    <div className="flex min-h-screen  ">
      {/* Left side: Animated Form */}
      <motion.div
        className="w-full max-w-md mx-auto p-8 space-y-8 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-bold text-center text-blue-600"
          variants={itemVariants}
        >
          Sign in
        </motion.h1>
        <motion.form
          className="space-y-6"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...form.register("email")}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-gray-600">
              Keep me logged in
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            Sign in
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Don&apos;t have an account?
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            asChild
          >
            <Link href="/signup">Sign up</Link>
          </Button>
        </motion.form>
      </motion.div>
      {/* Right side: Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/assets/images/laptop.png"
          alt="Laptop on desk with coffee"
          fill
          // objectFit='contain'
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover "
        />
      </div>
    </div>
  );
}
