const projects = [
  {
    id: 63,
    title: "Blue Ammonia with Carbon Capture, Alberta, Canada",
    category: "Feasibility Study · Lead Consultant",
    img: "https://dk-consultant.com/data/file/04_01_new/1794350696_pFLMX7Jv_93b8c3350ac4cfd9def1ad57513f408c2c281bec.jpg",
    href: "/projects/63",
  },
  {
    id: 64,
    title: "Solar PV & BESS Development, Texas, USA",
    category: "Feasibility Study",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    href: "/projects/64",
  },
  {
    id: 23,
    title: "Hai Lang 4,500 MW LNG-to-Power, Vietnam",
    category: "Feasibility Study · Financing Structure",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    href: "/projects/23",
  },
];

export default function ProjectsSection() {
  return (
    <section style={{ background: "#f2f3f5", padding: "60px 40px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: 3.5,
              color: "#aaa",
              textTransform: "uppercase",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              marginBottom: 14,
            }}
          >
            DK CONSULTANTS
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              fontFamily: "'Libre Baskerville', Georgia, serif",
              color: "#1a1a1a",
              letterSpacing: 0.5,
            }}
          >
            Latest Projects
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => (window.location.href = p.href)}
              style={{
                background: "#fff",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s, transform 0.3s",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
              }}
            >
              <div
                style={{
                  height: 200,
                  background: `url('${p.img}') center/cover no-repeat`,
                  backgroundColor: "#dde0e6",
                }}
              />
              <div style={{ padding: "24px 26px 30px" }}>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "'Lato', sans-serif",
                    color: "#1a1a1a",
                    marginBottom: 8,
                    lineHeight: 1.5,
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontSize: 12,
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 300,
                    color: "#bbb",
                    marginBottom: 22,
                  }}
                >
                  {p.category}
                </p>
                <span
                  style={{
                    fontSize: 13,
                    color: "#416ab3",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Read More &nbsp;→
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ textAlign: "center", marginTop: 52, display: "flex", justifyContent: "center", gap: 16 }}>
          <a
            href="/projects"
            style={{
              display: "inline-block",
              padding: "14px 56px",
              background: "#416ab3",
              color: "#fff",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 2,
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.background = "#2d4f8e")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.background = "#416ab3")
            }
          >
            READ MORE
          </a>
          <a
            href="/clients"
            style={{
              display: "inline-block",
              padding: "14px 48px",
              background: "transparent",
              color: "#416ab3",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 2,
              border: "1px solid #416ab3",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.background = "#416ab3";
              (e.target as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.background = "transparent";
              (e.target as HTMLAnchorElement).style.color = "#416ab3";
            }}
          >
            CLIENTS
          </a>
        </div>
      </div>
    </section>
  );
}
