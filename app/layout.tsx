import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DK Consultants | Power Plant & Environment Advisory",
  description:
    "DK Consultants is a Korean project development advisor whose Power Plant & Environment practice combines plant engineering, commercial structuring, and project finance in one team, working on the owner's side.",
  keywords:
    "owner's engineer, engineering management, power plant, carbon capture, CCS, waste-to-energy, project finance, feasibility study, DK Consultants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
