"use client";
// English / Korean. English pages live at the usual paths; Korean pages are the same components served under /ko
// (app/ko/**), wrapped in a provider that supplies the Korean dictionary.
// Translations are keyed by the English text, so data and logic stay in English and only the displayed text changes.
// A string with no Korean entry falls back to the English text.
import { createContext, useContext } from "react";

export type Lang = "en" | "ko";
type Dict = Record<string, string>;
type Vars = Record<string, string | number>;

const Ctx = createContext<{ lang: Lang; dict: Dict }>({ lang: "en", dict: {} });

export function LangProvider({ lang, dict, children }: { lang: Lang; dict: Dict; children: React.ReactNode }) {
  return <Ctx.Provider value={{ lang, dict }}>{children}</Ctx.Provider>;
}

export const LANG_COOKIE = "lang";

/** Path of the same page in the other language. */
export function switchPath(path: string, to: Lang) {
  const bare = path === "/ko" ? "/" : path.startsWith("/ko/") ? path.slice(3) : path;
  return to === "ko" ? (bare === "/" ? "/ko" : `/ko${bare}`) : bare;
}

export function useI18n() {
  const { lang, dict } = useContext(Ctx);
  /** Translate a display string; {name} placeholders are filled from vars. */
  const t = ((s: string | undefined, vars?: Vars) => {
    if (s === undefined) return s;
    let r = lang === "en" ? s : (dict[s] ?? s);
    if (vars) for (const [k, v] of Object.entries(vars)) r = r.split(`{${k}}`).join(String(v));
    return r;
  }) as { (s: string, vars?: Vars): string; (s: string | undefined, vars?: Vars): string | undefined };
  /** Internal link in the current language. */
  const h = (href: string) => (lang === "ko" && href.startsWith("/") && !href.startsWith("//") ? switchPath(href, "ko") : href);
  return { lang, tr: t, lnk: h };
}
