"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SIDEBAR_LINKS = [
  { label: "About DK Consultants", href: "/about", active: false },
  { label: "PPP Unit", href: "/ppp", active: false },
  { label: "Healthcare Unit", href: "/healthcare", active: true },
  { label: "Our People", href: "/people", active: false },
];

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

            {/* Mission Banner */}
            <div style={{ background: "#f2f3f5", borderLeft: "4px solid #416ab3", padding: "28px 32px", marginBottom: 48 }}>
              <p style={{ fontSize: 17, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                "Create a digitalized and knowledge-based healthcare environment — delivering patient-centered, holistic care that restores harmony and well-being."
              </p>
            </div>

            {/* Overview + Capabilities */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 52 }}>
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

            {/* Healthcare Project Development Diagram */}
            <div style={{ marginBottom: 52, textAlign: "center" }}>
              <img
                src="/img/healthcare_project_diagram.png"
                alt="Healthcare Project Development & Consulting"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            {/* Healthcare Capabilities Diagram */}
            <div style={{ marginBottom: 52, textAlign: "center" }}>
              <img
                src="/img/healthcare_capabilities_diagram.png"
                alt="DK Consultants Healthcare Unit Capabilities"
                style={{ maxWidth: "100%", height: "auto" }}
              />
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
        </div>
      </main>
      <Footer />
    </>
  );
}
