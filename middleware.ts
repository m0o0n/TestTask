import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    console.log("Middleware triggered for path:", request.nextUrl.pathname);
    console.log("Request cookies:", request.cookies.get("token"));
    if (!request.cookies.get("token")) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.next();
  }
}
