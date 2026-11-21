// Language routing. English is served at the usual paths and Korean under /ko.
// A visitor without a saved choice whose browser's first language is Korean is sent to the Korean page once;
// the EN | KO switch in the header saves the choice in the "lang" cookie, which then takes precedence.
// Language is taken from the browser setting, not the visitor's country, so English-language reviewers abroad
// or in Korea always see English.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isKo = pathname === "/ko" || pathname.startsWith("/ko/");
  if (isKo) return NextResponse.next();

  const saved = request.cookies.get("lang")?.value;
  const firstLang = (request.headers.get("accept-language") ?? "").split(",")[0].trim().toLowerCase();
  const wantKo = saved ? saved === "ko" : firstLang.startsWith("ko");
  if (!wantKo) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/ko" : `/ko${pathname}`;
  url.search = search;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Accept-Language, Cookie");
  return res;
}

export const config = {
  // Pages only: skip API routes, Next.js assets, and files with an extension (images, icons, robots.txt, ...).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
