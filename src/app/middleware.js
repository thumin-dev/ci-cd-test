import { NextResponse } from "next/server";
import { Auth } from "aws-amplify";
import awsConfig from "./aws-exports";
import { Amplify } from "aws-amplify";

// Initialize Amplify
Amplify.configure(awsConfig);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Public routes that do not require authentication
  const publicRoutes = ["/login"];

  // Allow access to public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  try {
    // Check if the user is authenticated
    await Auth.currentAuthenticatedUser();

    // User is authenticated; allow access
    return NextResponse.next();
  } catch (error) {
    console.error("User is not authenticated:", error);

    // Redirect unauthenticated users to the login page
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/((?!api|_next|static).*)"], // Protect all routes except API and static files
};
