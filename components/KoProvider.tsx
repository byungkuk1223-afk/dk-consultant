"use client";
import { LangProvider } from "@/lib/i18n";
import { KO } from "@/i18n/ko";

export default function KoProvider({ children }: { children: React.ReactNode }) {
  return <LangProvider lang="ko" dict={KO}>{children}</LangProvider>;
}
