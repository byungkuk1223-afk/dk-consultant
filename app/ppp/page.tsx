"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SERVICES = [
  "Government Advisory",
  "Project Finance & Bid Advisory",
  "Financial Due Diligence",
  "Mergers & Acquisitions",
  "Financial Restructuring",
  "Financial Model Review",
  "ECA Advisory & Fund Raising",
  "DIF Advisory & Fund Raising",
  "Training",
];

const STAGES = [
  { step: "01", title: "Initial Evaluation", desc: "Assessment of project viability and preliminary feasibility analysis" },
  { step: "02", title: "Commercial Proposal & Negotiation", desc: "Structuring commercial terms and negotiating key agreements with stakeholders" },
  { step: "03", title: "Feasibility Study & Financial Modeling", desc: "In-depth feasibility studies and financial model development" },
  { step: "04", title: "Financial Structuring", desc: "Optimal capital structure design and debt/equity arrangement" },
  { step: "05", title: "Debt Syndication & Financial Close", desc: "Coordinating lenders and achieving financial close" },
  { step: "06", title: "Operations & Project Conclusion", desc: "Ongoing advisory support through operations commencement and project conclusion" },
];

const TABS = [
  { label: "About DK Consultants", href: "/about" },
  { label: "PPP Unit", href: "/ppp" },
  { label: "Healthcare Unit", href: "/healthcare" },
  { label: "Our People", href: "/people" },
];

export default function PppPage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>

        {/* Page Header */}
        <div style={{ background: "#1a2c4e", padding: "48px 40px 36px", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "#8ca3c8", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 12 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 12 }}>PPP Unit</h1>
          <p style={{ fontSize: 14, color: "#8ca3c8", fontFamily: "'Lato', sans-serif" }}>Professional knowledge meets social needs</p>
        </div>

        {/* Sub Nav */}
        <div style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "flex", gap: 32 }}>
            {TABS.map(tab => {
              const active = tab.href === "/ppp";
              return (
                <a key={tab.label} href={tab.href} style={{ fontSize: 14, fontWeight: active ? 700 : 400, fontFamily: "'Lato', sans-serif", color: active ? "#416ab3" : "#666", textDecoration: "none", paddingBottom: 14, paddingTop: 14, borderBottom: active ? "2px solid #416ab3" : "2px solid transparent", display: "inline-block" }}>
                  {tab.label}
                </a>
              );
            })}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 40px 80px" }}>

          {/* Intro */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 24 }}>PPP Unit</h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", maxWidth: 820 }}>
              Consultants at DK Consultants are project finance and infrastructure advisory professionals with an average over 20 years of experience in the field of structuring and financing projects covering all regions. Our PPP Unit delivers comprehensive advisory services across the full project development lifecycle — from initial evaluation through to financial close and operations commencement.
            </p>
          </div>

          {/* Service Areas */}
          <div style={{ marginBottom: 72 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 28, letterSpacing: 0.5, textTransform: "uppercase" }}>Core Service Areas</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{ background: "#f2f3f5", padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#416ab3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff", display: "block" }} />
                  </span>
                  <span style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#333", fontWeight: 500, lineHeight: 1.4 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Development Stages */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 32, letterSpacing: 0.5, textTransform: "uppercase" }}>Project Development Framework</h3>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "#e5e7eb" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {STAGES.map((stage, i) => (
                  <div key={i} style={{ display: "flex", gap: 32, paddingLeft: 56, paddingBottom: 36, position: "relative" }}>
                    {/* Step circle */}
                    <div style={{ position: "absolute", left: 0, top: 4, width: 40, height: 40, borderRadius: "50%", background: "#416ab3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "'Lato', sans-serif" }}>{stage.step}</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 6 }}>{stage.title}</h4>
                      <p style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#666", lineHeight: 1.7, margin: 0 }}>{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
