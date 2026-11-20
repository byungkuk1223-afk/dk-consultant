"use client";
// Market page in an "insights" format: standfirst and key figures, market outlook (sourced), regional outlook,
// DKC's point of view, implications for owners and lenders, how DKC helps, selected experience, and sources.
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MARKET_PAGES, marketBySlug, serviceBySlug } from "@/data/site";
import { povFor } from "@/data/marketPov";
import { insightFor } from "@/data/marketInsights";
import { projects, marketOf } from "@/data/projects";
import { profileFor } from "@/data/projectProfiles";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const WRAP: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" };
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };
const H2: React.CSSProperties = { fontSize: "clamp(24px, 2.6vw, 30px)", lineHeight: 1.3, fontFamily: SERIF, fontWeight: 400, color: NAVY, marginBottom: 24 };
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
  const ins = insightFor(String(slug));
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
  const cite = (ns?: number[]) =>
    ns && ns.length ? <sup style={{ fontSize: 11, color: TEAL, marginLeft: 3 }}>{ns.map((n) => `[${n}]`).join("")}</sup> : null;

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero title={m.name} subtitle={m.lead} bg={m.img} />
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: "0 30px", flexWrap: "wrap" }}>
          {MARKET_PAGES.map((x) => (
            <Link key={x.slug} href={`/markets/${x.slug}`} style={{ padding: "18px 0", fontSize: 13.5, fontWeight: 700, color: x.slug === m.slug ? NAVY : "#7a8696", borderBottom: x.slug === m.slug ? `2px solid ${NAVY}` : "2px solid transparent", fontFamily: F }}>
              {x.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Standfirst and key figures */}
      <section>
        <div style={WRAP}>
          <p style={EYEBROW}>MARKET INSIGHT</p>
          <h2 style={{ ...H2, fontSize: "clamp(26px, 3vw, 34px)", maxWidth: 980 }}>{pov.headline}</h2>
          <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: "32px", color: "#2c3a4b", maxWidth: 980, marginBottom: 36 }}>{ins?.dek ?? pov.context[0]}</p>
          {ins && (
            <div className="rg" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(ins.keyFigures.length, 3)}, 1fr)`, gap: 16 }}>
              {ins.keyFigures.map((k) => (
                <div key={k.n} style={{ borderTop: `3px solid ${NAVY}`, background: "#f6f8fb", padding: "18px 22px 20px" }}>
                  <p style={{ fontFamily: SERIF, fontSize: 32, color: NAVY, lineHeight: 1.15 }}>{k.v}</p>
                  <p style={{ fontFamily: F, fontSize: 14.5, color: "#3d4752", marginTop: 8, lineHeight: "21px" }}>{k.n}</p>
                  <a href={k.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontFamily: F, fontSize: 12, color: "#7a8696", marginTop: 8, textDecoration: "underline" }}>{k.src}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Market outlook */}
      {ins && (
        <section style={{ background: "#f6f8fb" }}>
          <div style={WRAP}>
            <p style={EYEBROW}>MARKET OUTLOOK</p>
            <h2 style={H2}>What is changing</h2>
            {ins.sections.map((s, i) => (
              <article key={s.h} className="rg" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.6fr)", gap: 36, padding: "28px 0", borderTop: "1px solid #dde3ea" }}>
                <div>
                  <p style={{ fontFamily: SERIF, fontSize: 15, color: TEAL, marginBottom: 8 }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: SERIF, fontSize: 21, lineHeight: "29px", fontWeight: 400, color: NAVY }}>{s.h}</h3>
                </div>
                <div>
                  {s.paras.map((p, j) => (
                    <p key={j} style={BODY}>{p}{j === s.paras.length - 1 ? cite(s.cites) : null}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Regional outlook */}
      {ins && ins.regional.length > 0 && (
        <section>
          <div style={WRAP}>
            <p style={EYEBROW}>REGIONAL OUTLOOK</p>
            <h2 style={H2}>Where the opportunities and constraints sit</h2>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: `repeat(${ins.regional.length === 4 ? 2 : 3}, 1fr)`, gap: 18 }}>
              {ins.regional.map((r) => (
                <div key={r.region} style={{ border: "1px solid #e3e8ef", borderTop: `3px solid ${TEAL}`, padding: "20px 22px" }}>
                  <p style={{ fontFamily: SERIF, fontSize: 18, color: NAVY, marginBottom: 10 }}>{r.region}</p>
                  <p style={{ fontFamily: F, fontSize: 14.5, lineHeight: "23px", color: "#55606d" }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DKC point of view */}
      <section style={{ background: "#f6f8fb" }}>
        <div style={WRAP}>
          <p style={EYEBROW}>OUR POINT OF VIEW</p>
          <h2 style={H2}>What we see in {m.name.toLowerCase()} projects</h2>
          {pov.views.map((v, i) => (
            <div key={v.t} className="rg" style={{ display: "grid", gridTemplateColumns: "80px minmax(0,0.9fr) minmax(0,1.6fr)", gap: 28, padding: "26px 0", borderTop: "1px solid #dde3ea" }}>
              <p style={{ fontFamily: SERIF, fontSize: 30, color: TEAL, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</p>
              <p style={{ fontFamily: SERIF, fontSize: 20, lineHeight: "28px", color: NAVY }}>{v.t}</p>
              <p style={{ ...BODY, marginBottom: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implications */}
      {ins && ins.implications.length > 0 && (
        <section>
          <div style={WRAP}>
            <p style={EYEBROW}>IMPLICATIONS</p>
            <h2 style={H2}>What this means for owners, sponsors, and lenders</h2>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px 40px" }}>
              {ins.implications.map((x) => (
                <div key={x.t} style={{ padding: "18px 0", borderTop: "1px solid #e3e8ef" }}>
                  <p style={{ fontFamily: F, fontSize: 16.5, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{x.t}</p>
                  <p style={{ fontFamily: F, fontSize: 15, lineHeight: "25px", color: "#55606d" }}>{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What lenders test + how DKC helps */}
      <section style={{ background: ins ? "#f6f8fb" : "#fff" }}>
        <div className="rg" style={{ ...WRAP, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 48 }}>
          <div>
            <p style={EYEBROW}>WHAT LENDERS AND INVESTORS TEST</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {pov.tests.map((t) => (
                <li key={t} style={{ ...BODY, marginBottom: 0, padding: "11px 0 11px 26px", position: "relative", borderTop: "1px solid #e1e7ef" }}>
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

      {/* Selected experience */}
      {selected.length > 0 && (
        <section>
          <div style={{ ...WRAP, paddingTop: 52, paddingBottom: 52 }}>
            <div className="rstack" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
              <p style={{ ...EYEBROW, marginBottom: 0 }}>SELECTED EXPERIENCE</p>
              <Link href={`/projects?market=${encodeURIComponent(m.name)}`} style={{ color: "#416ab3", fontWeight: 700, fontSize: 14, fontFamily: F }}>
                All {inMarket.length} {m.name} projects →
              </Link>
            </div>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
              {selected.map((p) => {
                const pf = profileFor(p.id)!;
                return (
                  <Link key={p.id} href={`/projects/${p.id}`} className="card-lift" style={{ display: "block", border: "1px solid #e3e8ef", borderTop: `3px solid ${NAVY}`, padding: "16px 18px 18px" }}>
                    <p style={{ fontSize: 11, letterSpacing: 1.6, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 6 }}>{pf.tag.toUpperCase()}</p>
                    <p style={{ fontSize: 15, lineHeight: "22px", fontFamily: SERIF, color: NAVY }}>{pf.headline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sources */}
      {ins && (
        <section style={{ borderTop: "1px solid #e8ecf1" }}>
          <div style={{ ...WRAP, paddingTop: 40, paddingBottom: 56 }}>
            <p style={EYEBROW}>SOURCES</p>
            <ol style={{ margin: "0 0 0 20px", fontFamily: F, fontSize: 13.5, lineHeight: "24px", color: "#55606d" }}>
              {ins.sources.map((s) => (
                <li key={s.url}>
                  {s.publisher}, <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>{s.label}</a> ({s.year})
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
