"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MARKET_PAGES, marketBySlug, serviceBySlug } from "@/data/site";
import { povFor } from "@/data/marketPov";
import { projects, marketOf } from "@/data/projects";
import { profileFor } from "@/data/projectProfiles";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const WRAP: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" };
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };
const BODY: React.CSSProperties = { fontSize: 16, lineHeight: "28px", color: "#3d4752", fontFamily: F, marginBottom: 14 };

export default function MarketPage() {
  const { slug } = useParams();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const m = marketBySlug(String(slug));
  const pov = povFor(String(slug));
  if (!m || !pov) {
    return (
      <>
        <Header scrolled={scrolled} />
        <main style={{ padding: "160px 24px", textAlign: "center" }}><Link href="/markets">← Markets</Link></main>
        <Footer />
      </>
    );
  }
  const inMarket = projects.filter((p) => marketOf(p) === m.name);
  const selected = inMarket.filter((p) => profileFor(p.id)).slice(0, 3);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero title={m.name} subtitle={m.lead} bg={m.img} />
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 30, flexWrap: "wrap" }}>
          {MARKET_PAGES.map((x) => (
            <Link key={x.slug} href={`/markets/${x.slug}`} style={{ padding: "18px 0", fontSize: 13.5, fontWeight: 700, color: x.slug === m.slug ? NAVY : "#7a8696", borderBottom: x.slug === m.slug ? `2px solid ${NAVY}` : "2px solid transparent", fontFamily: F }}>
              {x.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Market context */}
      <section>
        <div style={{ ...WRAP, display: "grid", gridTemplateColumns: pov.stats.length ? "minmax(0,1.6fr) minmax(0,1fr)" : "1fr", gap: 56 }}>
          <div>
            <p style={EYEBROW}>MARKET CONTEXT</p>
            <h2 style={{ fontSize: 30, lineHeight: "40px", fontFamily: SERIF, fontWeight: 400, color: NAVY, marginBottom: 22 }}>{pov.headline}</h2>
            {pov.context.map((t) => <p key={t} style={BODY}>{t}</p>)}
          </div>
          {pov.stats.length > 0 && (
            <div style={{ alignSelf: "start", display: "grid", gap: 14 }}>
              {pov.stats.map((s) => (
                <div key={s.n} style={{ borderTop: `3px solid ${NAVY}`, background: "#f6f8fb", padding: "18px 22px" }}>
                  <p style={{ fontFamily: SERIF, fontSize: 36, color: NAVY, lineHeight: 1.1 }}>{s.v}</p>
                  <p style={{ fontFamily: F, fontSize: 14.5, color: "#3d4752", marginTop: 8, lineHeight: "21px" }}>{s.n}</p>
                  <p style={{ fontFamily: F, fontSize: 12, color: "#8a94a0", marginTop: 6 }}>Source: {s.src}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Point of view */}
      <section style={{ background: "#f6f8fb" }}>
        <div style={WRAP}>
          <p style={EYEBROW}>OUR POINT OF VIEW</p>
          <h2 style={{ fontSize: 30, lineHeight: "38px", fontFamily: SERIF, fontWeight: 400, color: NAVY, marginBottom: 28 }}>What we see in {m.name.toLowerCase()} projects</h2>
          {pov.views.map((v, i) => (
            <div key={v.t} style={{ display: "grid", gridTemplateColumns: "80px minmax(0,0.9fr) minmax(0,1.6fr)", gap: 28, padding: "26px 0", borderTop: "1px solid #dde3ea" }}>
              <p style={{ fontFamily: SERIF, fontSize: 30, color: TEAL, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</p>
              <p style={{ fontFamily: SERIF, fontSize: 20, lineHeight: "28px", color: NAVY }}>{v.t}</p>
              <p style={{ ...BODY, marginBottom: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What lenders test + how DKC helps */}
      <section>
        <div style={{ ...WRAP, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 48 }}>
          <div>
            <p style={EYEBROW}>WHAT LENDERS AND INVESTORS TEST</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {pov.tests.map((t) => (
                <li key={t} style={{ ...BODY, marginBottom: 0, padding: "11px 0 11px 26px", position: "relative", borderTop: "1px solid #e8ecf1" }}>
                  <span style={{ position: "absolute", left: 0, top: 11, color: TEAL, fontWeight: 700 }}>—</span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: NAVY, color: "#fff", padding: "28px 30px" }}>
            <p style={{ ...EYEBROW, color: "#8fd0d4" }}>HOW DKC HELPS</p>
            <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: "29px", marginBottom: 20 }}>{pov.help}</p>
            {m.services.map((s) => (
              <p key={s} style={{ borderTop: "1px solid rgba(255,255,255,.18)", padding: "11px 0" }}>
                <Link href={`/services/${s}`} style={{ color: "#fff", fontFamily: F, fontSize: 15, fontWeight: 700 }}>{serviceBySlug(s)?.title} →</Link>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Selected experience (compact) */}
      {selected.length > 0 && (
        <section style={{ borderTop: "1px solid #e8ecf1" }}>
          <div style={{ ...WRAP, paddingTop: 44, paddingBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ ...EYEBROW, marginBottom: 0 }}>SELECTED EXPERIENCE</p>
              <Link href={`/projects?market=${encodeURIComponent(m.name)}`} style={{ color: "#416ab3", fontWeight: 700, fontSize: 14, fontFamily: F }}>
                All {inMarket.length} {m.name} projects →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
              {selected.map((p) => {
                const pf = profileFor(p.id)!;
                return (
                  <Link key={p.id} href={`/projects/${p.id}`} style={{ display: "block", border: "1px solid #e3e8ef", borderTop: `3px solid ${NAVY}`, padding: "16px 18px 18px" }}>
                    <p style={{ fontSize: 11, letterSpacing: 1.6, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 6 }}>{pf.tag.toUpperCase()}</p>
                    <p style={{ fontSize: 15, lineHeight: "22px", fontFamily: SERIF, color: NAVY }}>{pf.headline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
