"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const TABS = [
  { label: "About DK Consultants", href: "/about" },
  { label: "PPP Unit", href: "/ppp" },
  { label: "Healthcare Unit", href: "/healthcare" },
  { label: "Our People", href: "/people" },
];

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

        {/* Sub Nav */}
        <div style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "flex", gap: 32 }}>
            {TABS.map(tab => {
              const active = tab.href === "/people";
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
          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 20 }}>Our People</h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", maxWidth: 760 }}>
              We are an independent financial advisor with a client-first focus. Our team of professionals each bring a unique skill set and many years of industry experience — united by a shared commitment to make your vision a reality.
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
      </main>
      <Footer />
    </>
  );
}
