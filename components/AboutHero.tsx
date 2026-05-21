"use client";

const TABS = [
  { label: "About DK Consultants​", href: "/about", key: "about" },
  { label: "PPP Unit", href: "/ppp", key: "ppp" },
  { label: "Healthcare Unit", href: "/healthcare", key: "healthcare" },
  { label: "Our People", href: "/people", key: "people" },
];

export default function AboutHero({ active }: { active: "about" | "ppp" | "healthcare" | "people" }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Hero banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minWidth: 1200,
          height: 380,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background image with brightness overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/img/sf_01_bg_n.jpg')",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(0.45)",
          }}
        />
        {/* Overlay text */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: "28%",
            color: "#fff",
            fontFamily: "'Lato', sans-serif",
          }}
        >
          <h2
            style={{
              fontSize: 50,
              fontWeight: 400,
              fontFamily: "'Libre Baskerville', Georgia, serif",
              margin: "0 0 14px 0",
              letterSpacing: 1,
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 300,
              margin: 0,
              letterSpacing: 0.2,
              lineHeight: 1.6,
            }}
          >
            Professional knowledge meets social needs
          </p>
        </div>
      </div>

      {/* Sub tab navigation */}
      <div
        id="dk-sub-tab"
        style={{ width: "100%", height: 90, position: "absolute", left: 0, top: 330, zIndex: 10 }}
      >
        <div style={{ width: 1200, height: 90, backgroundColor: "#fff", margin: "0 auto", boxShadow: "5px 5px 5px rgba(0,0,0,.1)", borderRadius: 3, overflow: "hidden" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, overflow: "hidden" }}>
            {TABS.map(tab => (
              <li
                key={tab.key}
                className={tab.key === active ? "on" : ""}
                onClick={() => { window.location.href = tab.href; }}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
