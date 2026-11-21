import type { Metadata } from "next";
import "../globals.css";
import KoProvider from "@/components/KoProvider";

// Root layout for the Korean site (/ko/**). The pages are the English page components; KoProvider supplies the
// Korean dictionary (i18n/ko), so only this layout's bundle carries the translations.
export const metadata: Metadata = {
  title: "DK Consultants | 발전·환경 프로젝트 자문",
  description:
    "DK Consultants는 발주처 편에서 발전·탄소포집 프로젝트의 엔지니어링 관리, 계약 자문, 프로젝트 파이낸스를 한 팀으로 수행하는 한국의 프로젝트 개발 자문사입니다.",
  alternates: { languages: { en: "/", ko: "/ko" } },
};

export default function KoRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+KR:wght@300;400;700&family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <KoProvider>{children}</KoProvider>
      </body>
    </html>
  );
}
