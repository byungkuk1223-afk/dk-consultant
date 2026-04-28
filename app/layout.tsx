import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DK Consultants",
  description: "DK Consultant는 기업 경영 컨설팅, 사업 전략 수립, 기업 성장 전략을 제공하는 전문 컨설팅 회사입니다.",
  keywords: "기업컨설팅,경영컨설팅,사업전략컨설팅,기업성장전략,비즈니스컨설팅",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
