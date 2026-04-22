"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SIDEBAR_LINKS = [
  { label: "About DK Consultants", href: "/about", active: false },
  { label: "PPP Unit", href: "/ppp", active: true },
  { label: "Healthcare Unit", href: "/healthcare", active: false },
  { label: "Our People", href: "/people", active: false },
];

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

        {/* Content Area with Sidebar */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 40px 80px", display: "flex", gap: 48, alignItems: "flex-start" }}>

          {/* Left Sidebar */}
          <aside style={{ width: 210, flexShrink: 0 }}>
            <div style={{ background: "#1a2c4e", padding: "14px 20px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#fff", margin: 0, letterSpacing: 0.5 }}>About Us</p>
            </div>
            <nav style={{ border: "1px solid #e5e7eb", borderTop: "none" }}>
              {SIDEBAR_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontFamily: "'Lato', sans-serif",
                    color: link.active ? "#416ab3" : "#555",
                    fontWeight: link.active ? 700 : 400,
                    textDecoration: "none",
                    padding: "11px 16px",
                    borderBottom: "1px solid #e5e7eb",
                    background: link.active ? "#f0f4fb" : "#fff",
                    borderLeft: link.active ? "3px solid #416ab3" : "3px solid transparent",
                    lineHeight: 1.4,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Intro */}
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 24 }}>PPP Unit</h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
                Consultants at DK Consultants are project finance and infrastructure advisory professionals with an average over 20 years of experience in the field of structuring and financing projects covering all regions. Our PPP Unit delivers comprehensive advisory services across the full project development lifecycle — from initial evaluation through to financial close and operations commencement.
              </p>
            </div>

            {/* Core Competencies Diagram */}
            <div style={{ marginBottom: 52, textAlign: "center" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 28, letterSpacing: 0.5, textTransform: "uppercase" }}>Core Competencies &amp; Capability Statement</h3>
              <img
                src="/img/ppp_risk_diagram.png"
                alt="PPP Unit - Risk Identification and Management"
                style={{ maxWidth: "100%", height: "auto" }}
              />
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
                <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "#e5e7eb" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {STAGES.map((stage, i) => (
                    <div key={i} style={{ display: "flex", gap: 32, paddingLeft: 56, paddingBottom: 36, position: "relative" }}>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
