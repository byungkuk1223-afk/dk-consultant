"use client";
// Team experience detail: a plant DKC team members delivered with a previous employer (not a DKC project).
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TEAM_PROJECTS, teamProjectBySlug } from "@/data/teamProjects";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const LABEL: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.2, color: TEAL, fontWeight: 700, fontFamily: F, margin: "30px 0 12px" };
const BODY: React.CSSProperties = { fontSize: 16, lineHeight: "28px", color: "#3d4752", fontFamily: F, marginBottom: 14 };

export default function TeamProjectPage() {
  const { slug } = useParams();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = teamProjectBySlug(String(slug));
  if (!t) {
    return (
      <>
        <Header scrolled={scrolled} />
        <main style={{ padding: "160px 24px", textAlign: "center" }}><Link href="/team-experience">← Team Experience</Link></main>
        <Footer />
      </>
    );
  }
  const others = TEAM_PROJECTS.filter((x) => x.slug !== t.slug).slice(0, 3);
  const facts: [string, string][] = [
    ["Owner", t.owner], ["Location", t.location], ["Capacity", t.capacity],
    ...(t.technology ? [["Technology", t.technology] as [string, string]] : []),
    ["Operation", t.operation], ["Delivered by", t.employer],
  ];

  return (
    <>
      <Header scrolled={scrolled} />
      <section className="page-hero" style={{ position: "relative", minHeight: 380, display: "flex", alignItems: "center", background: NAVY, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${t.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.42)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 1200, margin: "0 auto", padding: "110px 24px 56px", color: "#fff" }}>
          <p style={{ fontSize: 12, letterSpacing: 2, fontFamily: F, fontWeight: 700, marginBottom: 14, opacity: 0.85 }}>
            <Link href="/team-experience" style={{ color: "#fff" }}>TEAM EXPERIENCE</Link> &nbsp;/&nbsp; {t.tag.toUpperCase()}
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.22, fontWeight: 400, maxWidth: 900 }}>{t.title}</h1>
        </div>
      </section>

      <div style={{ background: "#fff8e6", borderBottom: "1px solid #f0e2b8" }}>
        <p style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 24px", fontFamily: F, fontSize: 14, color: "#5b4a1a", lineHeight: "21px" }}>
          This is career experience of DKC team members with a previous employer ({t.employer}), before they joined DKC. It is not a DKC project.
        </p>
      </div>

      <section>
        <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 40px", display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 48, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: SERIF, fontSize: 20, lineHeight: "31px", color: NAVY, marginBottom: 6 }}>{t.short}</p>

            <p style={LABEL}>ABOUT THE PLANT</p>
            {t.about.map((p) => <p key={p} style={BODY}>{p}</p>)}

            <p style={LABEL}>WHAT STANDS OUT</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.highlights.map((h) => (
                <li key={h} style={{ ...BODY, marginBottom: 0, padding: "9px 0 9px 24px", position: "relative", borderTop: "1px solid #eef1f5" }}>
                  <span style={{ position: "absolute", left: 0, top: 9, color: TEAL, fontWeight: 700 }}>—</span>{h}
                </li>
              ))}
            </ul>

            <p style={LABEL}>DKC TEAM MEMBERS ON THIS PLANT</p>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 14 }}>
              {t.people.map((p) => (
                <div key={p.name} style={{ border: "1px solid #e3e8ef", borderTop: `3px solid ${NAVY}`, padding: "16px 18px" }}>
                  <p style={{ fontFamily: SERIF, fontSize: 17, color: NAVY, marginBottom: 4 }}>{p.name}</p>
                  <p style={{ fontFamily: F, fontSize: 12.5, color: TEAL, fontWeight: 700, marginBottom: 10 }}>{p.dkcRole}</p>
                  <p style={{ fontFamily: F, fontSize: 14, lineHeight: "22px", color: "#3d4752" }}>{p.role}</p>
                </div>
              ))}
            </div>
            {t.note && <p style={{ fontFamily: F, fontSize: 14, color: "#6b7580", marginTop: 12 }}>{t.note}</p>}

            {t.refs.length > 0 && (
              <>
                <p style={LABEL}>PUBLIC INFORMATION ON THE PLANT</p>
                {t.refs.map((r) => (
                  <p key={r.url} style={{ fontFamily: F, fontSize: 13.5, lineHeight: "22px", marginBottom: 4 }}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#55606d", textDecoration: "underline" }}>{r.label} ↗</a>
                  </p>
                ))}
              </>
            )}
          </div>

          <aside style={{ border: "1px solid #e3e8ef", borderTop: `3px solid ${NAVY}`, padding: "20px 22px", position: "sticky", top: 90 }}>
            <p style={{ fontSize: 11.5, letterSpacing: 2.2, color: NAVY, fontWeight: 700, fontFamily: F, marginBottom: 12 }}>KEY FACTS</p>
            {facts.map(([k, v]) => (
              <div key={k} style={{ padding: "10px 0", borderTop: "1px solid #eef1f5" }}>
                <p style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, color: "#8a94a0", fontWeight: 700, marginBottom: 3 }}>{k.toUpperCase()}</p>
                <p style={{ fontFamily: F, fontSize: 14, lineHeight: "21px", color: "#2c3a4b" }}>{v}</p>
              </div>
            ))}
            <Link href="/people" style={{ display: "block", marginTop: 14, textAlign: "center", background: NAVY, color: "#fff", padding: "12px", fontSize: 12, letterSpacing: 1.5, fontWeight: 700, fontFamily: F }}>OUR PEOPLE</Link>
          </aside>
        </div>
      </section>

      <section style={{ background: "#f6f8fb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 24px 56px" }}>
          <p style={{ ...LABEL, marginTop: 0 }}>MORE TEAM EXPERIENCE</p>
          <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/team-experience/${o.slug}`} className="card-lift" style={{ display: "block", background: "#fff", border: "1px solid #e3e8ef", borderTop: `3px solid ${NAVY}`, padding: "16px 18px 18px" }}>
                <p style={{ fontSize: 11, letterSpacing: 1.6, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 6 }}>{o.tag.toUpperCase()}</p>
                <p style={{ fontSize: 15, lineHeight: "22px", fontFamily: SERIF, color: NAVY }}>{o.title}</p>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 18 }}><Link href="/team-experience" style={{ color: "#416ab3", fontWeight: 700, fontSize: 14, fontFamily: F }}>All team experience →</Link></p>
        </div>
      </section>
      <Footer />
    </>
  );
}
