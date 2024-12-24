"use client";

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
import { LoginForm } from "@/components/login-form";
import { WaveBackground } from "@/components/wave-background";

// import { ChangeEvent, FormEvent, useState } from "react";


export default function Login() {

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <WaveBackground />
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 -z-10" />
        <LoginForm />
      </div>
    </div>
  );
}
