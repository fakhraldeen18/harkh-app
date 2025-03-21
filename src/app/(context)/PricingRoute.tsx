"use client";
import { decodeUser } from "@/lib/utils";
import { jwtDecode } from "jwt-decode";
import { ReactElement } from "react";
// import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

export default function PricingRoute({ children }: { children: ReactElement }) {
   const router = useRouter();
  const token = localStorage.getItem("token") || "";
  if (!token) {
    return router.push("/login");
  }
  const decode = jwtDecode(token);
  const decodedUser = decodeUser(decode);
  return decodedUser.role === "TeamMember"
    ? router.push("/login")
    : children;
}
