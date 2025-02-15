"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema, type LogInUpSchemaType } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { jwtDecode } from "jwt-decode";
import { Checkbox } from "./ui/checkbox";
import api from "@/api";
import { decodeUser } from "@/lib/utils";
export default function LoginForm() {
  const router = useRouter();
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

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  const handleLogIn = async () => {
    try {
      const res = await api.post("/users/login", login);
      return res.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return Promise.reject(setLoginError("email or password is invalid"));
    }
  };

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInUpSchemaType>({ resolver: zodResolver(LogInSchema) });

  // Local state for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const onSubmit: SubmitHandler<LogInUpSchemaType> = async () => {
    const token = await handleLogIn();
    if (token) {
      localStorage.setItem("token", token);
      const decode = jwtDecode(token);
      const decodedUserToken = decodeUser(decode);
      localStorage.setItem(
        "decodedUserToken",
        JSON.stringify(decodedUserToken)
      );
      console.log(decodedUserToken);
      setLoginError("");
      router.push("/kanban");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                {...register("password")}
                name="password"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
              />{" "}
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
              <span className="text-red-600">{errors.password.message}</span>
            )}
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
          {loginError && (
            <span className="text-red-600 text-center">{loginError}</span>
          )}
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
