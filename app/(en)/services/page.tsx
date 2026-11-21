"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMG } from "@/data/images";
import PageHero, { sx } from "@/components/PageHero";
import { SERVICES, MARKET_PAGES } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function ServicesPage() {
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
      <PageHero title="Services" subtitle="One team, three workstreams: technical, commercial, and financial, on one project baseline." bg={IMG.services} />

      <div style={{ ...sx.wrap, paddingBottom: 30 }}>
        <p style={sx.lead}>
          {tr("Large power projects reach financial close only when the technical scope, the project agreements, and the financing plan agree. Run separately, the gaps between them surface late, in lender due diligence.")}</p>
        <p style={sx.p}>
          {tr("DK Consultants works on the owner's side and holds all three workstreams in one team, with one baseline, one issue register, and one decision schedule. A revised design basis changes CAPEX; CAPEX changes the tariff and the debt the project can carry; and the agreements must then be realigned. DKC traces each change across the technical scope, the project agreements, and the financial model before it reaches lenders. Clients engage DKC for one workstream or for all three.")}</p>
      </div>

      <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 60px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
        {SERVICES.map((s) => (
          <Link key={s.slug} href={lnk(`/services/${s.slug}`)} style={{ display: "block", border: "1px solid #e5e7eb", background: "#fff" }}>
            <div style={{ height: 170, backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ padding: "22px 24px 26px" }}>
              <p style={{ fontSize: 21, fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", color: "#0b2545", marginBottom: 10 }}>{tr(s.title)}</p>
              <p style={{ fontSize: 15, lineHeight: "24px", color: "#555", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginBottom: 12 }}>{tr(s.short)}</p>
              <span style={{ color: "#416ab3", fontWeight: 700, fontSize: 13.5, fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>{tr("Learn more →")}</span>
            </div>
          </Link>
        ))}
      </div>

      <section style={{ background: "#f6f8fb" }}>
        <div style={sx.wrap}>
          <p style={sx.label}>{tr("MARKETS WE SERVE")}</p>
          <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {MARKET_PAGES.map((m) => (
              <Link key={m.slug} href={lnk(`/markets/${m.slug}`)} style={{ display: "block", background: "#fff", border: "1px solid #e5e7eb", padding: "18px 18px 20px" }}>
                <p style={{ fontSize: 16.5, fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", color: "#0b2545", marginBottom: 8 }}>{tr(m.name)}</p>
                <p style={{ fontSize: 13.5, lineHeight: "21px", color: "#666", fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>{tr(m.lead)}</p>
              </Link>
            ))}
          </div>
          <p style={{ ...sx.note, marginTop: 20 }}>
            {tr("Healthcare advisory is provided by DKC's separate")}{" "}<Link href={lnk("/healthcare")} style={{ color: "#416ab3" }}>{tr("Healthcare Unit")}</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
