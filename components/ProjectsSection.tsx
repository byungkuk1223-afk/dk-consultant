const projects = [
  {
    id: 51,
    title: "Modernization of District Heating Systems in …",
    category: "Feasibility Study, Financial Advisory",
    img: "https://www.dk-consultant.com:443/data/file/04_01_new/1926205786_IlMYe7KT_ff290bc1067d0d95d6f4e76e261ddf224a868725.jpeg",
    href: "#",
  },
  {
    id: 50,
    title: "Battambang II Hydro Power Project in Cambodia",
    category: "Feasibility Study",
    img: "https://www.dk-consultant.com:443/data/file/04_01_new/1926205786_D7crajh6_d44acbc730dd88f04cd4edc7a1de65109a13cc3a.jpeg",
    href: "#",
  },
  {
    id: 48,
    title: "Western Australia Green Ammonia Project in Au…",
    category: "Feasibility Study",
    img: "https://www.dk-consultant.com:443/data/file/04_01_new/1926205786_cRul7v0d_df8b37ea73df1feb37df4d5ee17b8c437a87874e.jpg",
    href: "#",
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
              fontFamily: "'Playfair Display', Georgia, serif",
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

        {/* Read More Button */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
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
        </div>
      </div>
    </section>
  );
}
