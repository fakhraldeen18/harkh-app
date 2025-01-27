"use client"; 
import  SignUpForm  from "@/components/signup-form";
import { WaveBackground } from "@/components/wave-background";

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
    <div className="">
      <SignUpForm />
    </div>
  );
}
