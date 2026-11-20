"use client";
// Clients: grouped by client type, each client with a short description and the mandates on record.
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { IMG } from "@/data/images";
import { CLIENT_GROUPS, OTHER_CLIENTS, type Client } from "@/data/clients";
import { projects, type Project } from "@/data/projects";
import { profileFor } from "@/data/projectProfiles";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };

const mandatesOf = (c: Client) => projects.filter((p) => c.match?.includes(p.detail?.client ?? ""));
const yearOf = (p: Project) => {
  const t = p.detail?.time ?? "";
  const m = t.match(/^(\d{4})/) ?? t.match(/^(\d{2})\./);
  return m ? (m[1].length === 2 ? `20${m[1]}` : m[1]) : "";
};

function ClientCard({ c }: { c: Client }) {
  const [open, setOpen] = useState(false);
  const ms = mandatesOf(c);
  const shown = open ? ms : ms.slice(0, 4);
  return (
    <div style={{ background: "#fff", border: "1px solid #e3e8ef", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 96, display: "flex", alignItems: "center", padding: "0 22px", borderBottom: "1px solid #eef1f5" }}>
        {c.logo ? (
          <img src={c.logo} alt={c.name} style={{ maxHeight: 64, maxWidth: "70%", objectFit: "contain" }} />
        ) : (
          <p style={{ fontFamily: SERIF, fontSize: 18, color: NAVY, lineHeight: "24px" }}>{c.name.replace(/ \(.*\)$/, "")}</p>
        )}
      </div>
      <div style={{ padding: "18px 22px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        {c.logo && <p style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: "21px", marginBottom: 6 }}>{c.name}</p>}
        <p style={{ fontFamily: F, fontSize: 13.5, lineHeight: "21px", color: "#6b7580", marginBottom: ms.length ? 14 : 0 }}>{c.about}</p>
        {ms.length > 0 && (
          <>
            <p style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.6, fontWeight: 700, color: TEAL, marginBottom: 6 }}>
              {ms.length} {ms.length === 1 ? "MANDATE" : "MANDATES"}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {shown.map((p) => (
                <li key={p.id} style={{ borderTop: "1px solid #eef1f5" }}>
                  <Link href={`/projects/${p.id}`} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "7px 0", fontFamily: F, fontSize: 13.5, lineHeight: "19px", color: "#2c3a4b" }}>
                    <span>{profileFor(p.id)?.headline ?? p.title}</span>
                    <span style={{ color: "#8a94a0", whiteSpace: "nowrap" }}>{yearOf(p)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {ms.length > 4 && (
              <button onClick={() => setOpen(!open)} style={{ alignSelf: "flex-start", marginTop: 8, background: "none", border: 0, padding: 0, cursor: "pointer", color: "#416ab3", fontWeight: 700, fontSize: 13, fontFamily: F }}>
                {open ? "Show fewer" : `Show all ${ms.length} →`}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function ClientsPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const all = [...CLIENT_GROUPS.flatMap((g) => g.clients), ...OTHER_CLIENTS];
  const withMandates = projects.filter((p) => all.some((c) => c.match?.includes(p.detail?.client ?? ""))).length;
  const repeatIds = new Set(all.filter((c) => mandatesOf(c).length > 1).flatMap((c) => mandatesOf(c).map((p) => p.id)));
  const repeatShare = withMandates ? Math.round((repeatIds.size / withMandates) * 100) : 0;

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero title="Clients" subtitle="Public financiers, energy companies, and contractors who rely on DKC for an independent technical, commercial, and financial view." bg={IMG.clients} />

      <section>
        <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 44px", display: "grid", gridTemplateColumns: "minmax(0,1.5fr) repeat(3, minmax(0,1fr))", gap: 28, alignItems: "end" }}>
          <p style={{ fontFamily: SERIF, fontSize: 20, lineHeight: "31px", color: "#2c3a4b" }}>
            Most of our work comes from organizations that return: public financiers that commission one study after another, and
            contractors and utilities that bring us into their next bid or investment.
          </p>
          {[
            { v: all.length, t: "Clients" },
            { v: withMandates, t: "Mandates" },
            { v: `${repeatShare}%`, t: "Of mandates from returning clients" },
          ].map((x) => (
            <div key={x.t} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 16 }}>
              <p style={{ fontFamily: SERIF, fontSize: 36, color: NAVY, lineHeight: 1.1 }}>{x.v}</p>
              <p style={{ fontFamily: F, fontSize: 13.5, color: "#55606d", marginTop: 6, lineHeight: "19px" }}>{x.t}</p>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 8px", display: "flex", gap: "8px 24px", flexWrap: "wrap" }}>
          {CLIENT_GROUPS.map((g) => (
            <a key={g.key} href={`#${g.key}`} style={{ fontFamily: F, fontSize: 13.5, fontWeight: 700, color: "#416ab3" }}>{g.title} ↓</a>
          ))}
        </div>
      </section>

      {CLIENT_GROUPS.map((g, i) => (
        <section key={g.key} id={g.key} style={{ background: i % 2 === 0 ? "#f6f8fb" : "#fff", scrollMarginTop: 70 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: 40, marginBottom: 28 }}>
              <div>
                <p style={EYEBROW}>{String(i + 1).padStart(2, "0")}</p>
                <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 2.4vw, 28px)", lineHeight: 1.3, fontWeight: 400, color: NAVY }}>{g.title}</h2>
              </div>
              <p style={{ fontFamily: F, fontSize: 16, lineHeight: "27px", color: "#3d4752" }}>{g.text}</p>
            </div>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 18, alignItems: "start" }}>
              {g.clients.map((c) => <ClientCard key={c.name} c={c} />)}
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: CLIENT_GROUPS.length % 2 === 0 ? "#f6f8fb" : "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 64px" }}>
          <p style={EYEBROW}>ALSO</p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(22px, 2.4vw, 28px)", lineHeight: 1.3, fontWeight: 400, color: NAVY, marginBottom: 24 }}>Other organizations we have worked with</h2>
          <div className="rg logo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: 14 }}>
            {OTHER_CLIENTS.map((c) => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid #e3e8ef", padding: "16px 14px 14px", textAlign: "center" }}>
                <div style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  {c.logo && <img src={c.logo} alt={c.name} style={{ maxHeight: 54, maxWidth: "90%", objectFit: "contain" }} />}
                </div>
                <p style={{ fontFamily: F, fontSize: 12.5, lineHeight: "17px", color: "#55606d" }}>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
