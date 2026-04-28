// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Get the session
  // const session = request.cookies.get("session")?.value;
  const session = request.cookies.get("session");

  // Define the path the user is trying to access
  const { pathname } = request.nextUrl;

  // 3. If no session exists and the user navigates to the dashboard
  // redirect them back to the login page
  if (!session && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
}

// Use a matcher to limit where the middleware runs
export const config = {
  matcher: ["/dashboard"],
};
