const historyItems = [
  { year: "2022", desc: "Relocation of Office to Pangyo" },
  { year: "2021", desc: "Executed school PPP feasibility study for Qatar" },
  { year: "2020", desc: "Achieved Financial Close for 200MW BESS project in Ireland" },
];

function DKCircleIcon() {
  return (
    <div style={{
      width: 90, height: 90, borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "rgba(65,106,179,0.6)",
      margin: "0 auto",
      gap: 3,
    }}>
      <span style={{
        fontSize: 20, fontWeight: 900, color: "#fff",
        fontFamily: "'Lato', sans-serif",
        letterSpacing: 1, lineHeight: 1,
      }}>DK</span>
      <span style={{
        fontSize: 7, fontWeight: 300,
        color: "rgba(255,255,255,0.8)",
        fontFamily: "'Lato', sans-serif",
        letterSpacing: 1.5, lineHeight: 1,
      }}>CONSULTANTS</span>
    </div>
  );
}

export default function HistorySection() {
  return (
    <section style={{
      background: "#2e3549",
      backgroundImage: `url('/img/history_bg.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "multiply",
      padding: "90px 40px 110px",
      color: "#fff",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <p style={{
            fontSize: 11, letterSpacing: 4,
            color: "rgba(255,255,255,0.38)",
            textTransform: "uppercase",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400, marginBottom: 14,
          }}>
            DK CONSULTANTS
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 3vw, 36px)",
            fontWeight: 400,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            color: "#fff",
            letterSpacing: 0.5,
          }}>
            History
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Line */}
          <div style={{
            position: "absolute",
            top: 45,
            left: "16.5%",
            right: "16.5%",
            height: 1,
            background: "rgba(255,255,255,0.15)",
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            textAlign: "center",
          }}>
            {historyItems.map((item) => (
              <div key={item.year} style={{ padding: "0 30px" }}>
                <DKCircleIcon />
                <h4 style={{
                  fontSize: 22, fontWeight: 700,
                  fontFamily: "'Lato', sans-serif",
                  color: "#fff",
                  margin: "24px 0 12px",
                  letterSpacing: 0.5,
                }}>
                  {item.year}
                </h4>
                <p style={{
                  fontSize: 13,
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.85,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
