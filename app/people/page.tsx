"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SIDEBAR_LINKS = [
  { label: "About DK Consultants", href: "/about", active: false },
  { label: "PPP Unit", href: "/ppp", active: false },
  { label: "Healthcare Unit", href: "/healthcare", active: false },
  { label: "Our People", href: "/people", active: true },
];

const PEOPLE = [
  { name: "David Kim", title: "CEO / Founder", unit: "Leadership" },
  { name: "Cheolsoo Kim", title: "CEO", unit: "Healthcare" },
  { name: "Joonwoong Kong", title: "COO", unit: "Leadership" },
  { name: "Eunyoung Choi", title: "CFO", unit: "Leadership" },
  { name: "Jongsang Lee", title: "Executive Director", unit: "PPP" },
  { name: "Daniel Jo", title: "Managing Director", unit: "PPP" },
  { name: "Minkyung Koh", title: "Director", unit: "PPP" },
  { name: "Jaesun Kim", title: "Senior Advisor", unit: "Healthcare" },
  { name: "Kihwan Na", title: "Senior Advisor", unit: "Financial" },
];

const UNIT_COLORS: Record<string, string> = {
  Leadership: "#1a2c4e",
  PPP: "#416ab3",
  Healthcare: "#2e7d58",
  Financial: "#6b4fa0",
};

function initials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function PeoplePage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>

        {/* Page Header */}
        <div style={{ background: "#1a2c4e", padding: "48px 40px 36px", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "#8ca3c8", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 12 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 12 }}>Our People</h1>
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
            <div style={{ marginBottom: 56 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 20 }}>Our People</h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", maxWidth: 760 }}>
                As an independent financial advisor, DK Consultants is designed to focus on the clients. You will meet a team of professionals who each have a unique skill set and many years of industry experience. We share a common goal, Make Your Vision a Reality.
              </p>
            </div>

            {/* People Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {PEOPLE.map((person, i) => (
                <div key={i} style={{ border: "1px solid #e5e7eb", background: "#fafafa" }}>
                  {/* Avatar */}
                  <div style={{ height: 160, background: "#1a2c4e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: UNIT_COLORS[person.unit] ?? "#416ab3", border: "3px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#fff", fontSize: 22, fontWeight: 700, fontFamily: "'Lato', sans-serif", letterSpacing: 1 }}>{initials(person.name)}</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div style={{ padding: "20px 24px 24px" }}>
                    <div style={{ width: 28, height: 3, background: UNIT_COLORS[person.unit] ?? "#416ab3", marginBottom: 14 }} />
                    <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 6 }}>{person.name}</h3>
                    <p style={{ fontSize: 13, fontFamily: "'Lato', sans-serif", color: "#555", marginBottom: 12 }}>{person.title}</p>
                    <span style={{ display: "inline-block", fontSize: 11, fontFamily: "'Lato', sans-serif", letterSpacing: 1, textTransform: "uppercase", color: UNIT_COLORS[person.unit] ?? "#416ab3", background: "#f0f4ff", padding: "3px 10px", borderRadius: 2 }}>
                      {person.unit}
                    </span>
                  </div>
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
