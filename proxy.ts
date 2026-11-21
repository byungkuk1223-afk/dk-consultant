// Language routing. English is served at the usual paths and Korean under /ko.
// English is the default for everyone (decision 2026-11-21: no automatic switch by browser language or country).
// Korean is shown only after the visitor picks KO in the header switch, which saves "lang=ko" in a cookie;
// from then on English URLs redirect to the Korean page until the visitor picks EN again.
// To restore browser-language detection later, treat a missing cookie with an Accept-Language starting "ko" as "ko".
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isKo = pathname === "/ko" || pathname.startsWith("/ko/");
  if (isKo || request.cookies.get("lang")?.value !== "ko") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/ko" : `/ko${pathname}`;
  url.search = search;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Cookie");
  return res;
}

export const config = {
  // Pages only: skip API routes, Next.js assets, and files with an extension (images, icons, robots.txt, ...).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
