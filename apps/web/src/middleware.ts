// apps/web/src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the URL for modifications
  const url = request.nextUrl.clone();

  // Get the hostname (e.g., 'blog.zdebski.me' or 'blog.localhost:3000')
  const hostname = request.headers.get("host") || "";

  // Handle different environments (development vs production)
  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(`.zdebski.me`, "") // production: remove .zdebski.me
      : hostname.replace(`.localhost:3000`, ""); // development: remove .localhost:3000

  // Route based on subdomain
  if (currentHost === "blog") {
    // Rewrite to /blog path
    url.pathname = `/blog${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (currentHost === "foto") {
    // Rewrite to /foto path
    url.pathname = `/foto${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default case: don't rewrite for main domain
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
