import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token"); // Check for user cookie

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home",
    "/kanban",
    "/profile",
    "/project",
    "/projects/:path*",
    "/settings",
  ], // Protect all routes under /dashboard
};
