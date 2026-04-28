const people = [
    { name: "David Kim", title: "CEO / Founder", img: "/img/david.png", href: "/people" },
  { name: "Cheolsoo Kim", title: "CEO / Healthcare Business Unit", img: "/img/chulsoo.png", href: "/people" },
];

const quickLinks = [
  { label: "About DKC", href: "/about", icon: <ChartIcon /> },
  { label: "PPP Unit", href: "/ppp", icon: <BuildingIcon /> },
  { label: "Healthcare Unit", href: "/healthcare", icon: <HeartIcon /> },
  { label: "Address & Number", href: "/contact", icon: <MapIcon /> },
];

function ChartIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="4" y="8" width="36" height="28" rx="2" stroke="#416ab3" strokeWidth="1.5" fill="none" />
      <rect x="9" y="23" width="7" height="9" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
      <rect x="18.5" y="18" width="7" height="14" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
      <rect x="28" y="12" width="7" height="20" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="6" y="20" width="32" height="18" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
      <path d="M14 20V11a2 2 0 012-2h12a2 2 0 012 2v9" stroke="#416ab3" strokeWidth="1.5" fill="none" />
      <path d="M4 38h36" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="17.5" y="26" width="9" height="12" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
      <path d="M11 24v5M33 24v5" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path
        d="M22 37C22 37 6 26 6 14.5C6 10 9.8 6.5 14.5 6.5C17.8 6.5 20.8 8.5 22 11.5C23.2 8.5 26.2 6.5 29.5 6.5C34.2 6.5 38 10 38 14.5C38 26 22 37 22 37Z"
        stroke="#416ab3" strokeWidth="1.5" fill="none"
      />
      <path d="M22 16.5v9M17.5 21h9" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path
        d="M22 5C16.5 5 12 9.5 12 15C12 23.5 22 39 22 39C22 39 32 23.5 32 15C32 9.5 27.5 5 22 5Z"
        stroke="#416ab3" strokeWidth="1.5" fill="none"
      />
      <circle cx="22" cy="15" r="4.5" stroke="#416ab3" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function PeopleSection() {
  return (
    <section style={{ background: "#f2f3f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "90px 40px 0" }}>

        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <p style={{
            fontSize: 11, letterSpacing: 4, color: "#bbb",
            textTransform: "uppercase",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400, marginBottom: 14,
          }}>
            DK CONSULTANTS
          </p>
          <h2 style={{
            fontSize: "clamp(30px, 3.5vw, 46px)",
            fontWeight: 400,
            fontFamily: "'Libre Baskerville', Georgia, serif",
            color: "#1a1a1a",
            letterSpacing: 0.5,
          }}>
            Senior Management
          </h2>
        </div>

        {/* People Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
          maxWidth: 480,
          margin: "0 auto",
        }}>
          {people.map((p) => (
            <a key={p.name} href={p.href} style={{
              background: "#fff",
              textAlign: "center",
              textDecoration: "none",
              display: "block",
              boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
              padding: "28px 20px 24px",
            }}>
              <div style={{
                width: 110, height: 110, borderRadius: "50%",
                margin: "0 auto 20px",
                overflow: "hidden",
                border: "1px solid #c8d5eb",
                background: "#dce6f5",
              }}>
                <img src={p.img} alt={p.name} style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }} />
              </div>
              <p style={{
                fontSize: 13, fontFamily: "'Lato', sans-serif",
                fontWeight: 300, color: "#416ab3", marginBottom: 6,
              }}>
                {p.title}
              </p>
              <h4 style={{
                fontSize: 19, fontWeight: 700,
                fontFamily: "'Lato', sans-serif",
                color: "#1a1a1a", margin: 0,
              }}>
                {p.name}
              </h4>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links Bar */}
      <div style={{
        maxWidth: 920, margin: "44px auto 0",
        background: "#fff",
        boxShadow: "0 6px 28px rgba(0,0,0,0.09)",
        padding: "44px 0",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}>
          {quickLinks.map((link, i) => (
            <a key={link.label} href={link.href} style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 16,
              textDecoration: "none",
              padding: "10px 10px",
              borderRight: i < 3 ? "1px solid #ebebeb" : "none",
              color: "#555",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#416ab3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              {link.icon}
              <span style={{
                fontSize: 13, color: "inherit",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400, letterSpacing: 0.3,
              }}>
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div style={{ height: 0 }} />
    </section>
  );
}
