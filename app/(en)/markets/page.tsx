"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMG } from "@/data/images";
import PageHero, { sx } from "@/components/PageHero";
import { MARKET_PAGES } from "@/data/site";
import { projects, marketOf } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

export default function MarketsPage() {
  const { lnk, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero title="Markets" subtitle="Power generation, carbon capture, and environmental and industrial infrastructure." bg={IMG.markets} />
      <div className="rg" style={{ ...sx.wrap, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
        {MARKET_PAGES.map((m) => (
          <Link key={m.slug} href={lnk(`/markets/${m.slug}`)} style={{ display: "block", border: "1px solid #e5e7eb", background: "#fff" }}>
            <div style={{ height: 180, backgroundImage: `url('${m.img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ padding: "22px 24px 26px" }}>
              <p style={{ fontSize: 21, fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", color: "#0b2545", marginBottom: 8 }}>{tr(m.name)}</p>
              <p style={{ fontSize: 15, lineHeight: "24px", color: "#555", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginBottom: 10 }}>{tr(m.lead)}</p>
              <span style={{ fontSize: 13, color: "#888", fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>{tr("{n} projects", { n: projects.filter((p) => marketOf(p) === m.name).length })}</span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
