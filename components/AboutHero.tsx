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
          width: "100%",
          minWidth: 1200,
          height: 600,
          color: "#fff",
          backgroundImage: "url('/img/sf_01_bg_n.jpg')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ width: 1200, margin: "0 auto", fontFamily: "'Lato', sans-serif", fontSize: 18 }}>
          <h2 style={{ fontSize: 55, fontWeight: "normal", fontFamily: "'Libre Baskerville', Georgia, serif", paddingTop: 220 }}>
            About Us
          </h2>
          Professional knowledge meets social needs
        </div>
      </div>

      {/* Sub tab navigation */}
      <div
        id="dk-sub-tab"
        style={{ width: "100%", height: 90, position: "absolute", left: 0, top: 550, zIndex: 10 }}
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
