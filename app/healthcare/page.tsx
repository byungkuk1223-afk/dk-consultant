"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CAPABILITIES = [
  "Medical facility planning and feasibility studies",
  "Operating plan development",
  "Healthcare equipment procurement",
  "Hospital Information System (HIS) implementation",
  "Staff training programs",
  "Business model development",
];

const SERVICES = [
  { title: "Facility Establishment", desc: "Planning and advisory for new healthcare facility development from concept through construction and commissioning." },
  { title: "Operations & Maintenance", desc: "Operational framework design and ongoing maintenance planning to ensure sustainable, high-quality healthcare delivery." },
  { title: "Medical Equipment Procurement", desc: "End-to-end procurement services for medical equipment tailored to facility needs and international standards." },
  { title: "HIS Implementation", desc: "Hospital Information System selection, integration, and deployment to digitalize clinical and administrative workflows." },
  { title: "Staff Training", desc: "Comprehensive training programs for clinical and administrative staff to build local capacity and ensure operational readiness." },
];

const TABS = [
  { label: "About DK Consultants", href: "/about" },
  { label: "PPP Unit", href: "/ppp" },
  { label: "Healthcare Unit", href: "/healthcare" },
  { label: "Our People", href: "/people" },
];

export default function HealthcarePage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>

        {/* Page Header */}
        <div style={{ background: "#1a2c4e", padding: "48px 40px 36px", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "#8ca3c8", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 12 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 12 }}>Healthcare Unit</h1>
          <p style={{ fontSize: 14, color: "#8ca3c8", fontFamily: "'Lato', sans-serif" }}>Professional knowledge meets social needs</p>
        </div>

        {/* Sub Nav */}
        <div style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "flex", gap: 32 }}>
            {TABS.map(tab => {
              const active = tab.href === "/healthcare";
              return (
                <a key={tab.label} href={tab.href} style={{ fontSize: 14, fontWeight: active ? 700 : 400, fontFamily: "'Lato', sans-serif", color: active ? "#416ab3" : "#666", textDecoration: "none", paddingBottom: 14, paddingTop: 14, borderBottom: active ? "2px solid #416ab3" : "2px solid transparent", display: "inline-block" }}>
                  {tab.label}
                </a>
              );
            })}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 40px 80px" }}>

          {/* Mission Banner */}
          <div style={{ background: "#f2f3f5", borderLeft: "4px solid #416ab3", padding: "28px 32px", marginBottom: 56 }}>
            <p style={{ fontSize: 17, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              "Create a digitalized and knowledge-based healthcare environment — delivering patient-centered, holistic care that restores harmony and well-being."
            </p>
          </div>

          {/* Overview + Capabilities */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 64 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 24 }}>Healthcare Unit</h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
                Established in 2018, DK Consultants' Healthcare Unit is a rapidly growing management consulting practice with expertise in infrastructure and healthcare development across global markets.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
                DK Consultants Healthcare supports worldwide healthcare facility development through facility establishment, operations &amp; maintenance planning, medical equipment and Hospital Information System procurement, and staff training.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif" }}>
                Specialists from various healthcare professions contribute business model development and project opportunities based on deep professional experience, enabling us to deliver practical, patient-centered solutions.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 20, letterSpacing: 0.5, textTransform: "uppercase" }}>Key Capabilities</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {CAPABILITIES.map((item, i) => (
                  <li key={i} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "10px 0", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Cards */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 28, letterSpacing: 0.5, textTransform: "uppercase" }}>Our Services</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{ border: "1px solid #e5e7eb", padding: "28px 24px" }}>
                  <div style={{ width: 36, height: 3, background: "#416ab3", marginBottom: 16 }} />
                  <h4 style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 12 }}>{s.title}</h4>
                  <p style={{ fontSize: 13, fontFamily: "'Lato', sans-serif", color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
