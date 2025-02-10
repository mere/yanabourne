import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

console.log("middleware!");
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname)) return;

  // Check if the pathname starts with a valid locale

  const pathnameHasLocale = ["/ru", "/en"].some((locale) =>
    pathname.startsWith(locale)
  );

  if (!pathnameHasLocale) {
    // Get the preferred language from the Accept-Language header
    const acceptLanguage = request.headers.get("accept-language");
    const preferredLanguage =
      acceptLanguage?.split(",")[0].split("-")[0] || "en";

    return NextResponse.redirect(
      new URL(`/${preferredLanguage}${pathname}`, request.url)
    );
  }
  console.log("pathname", pathname, { pathnameHasLocale });
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/',
    '/portfolio/:path*',
  ],
};
