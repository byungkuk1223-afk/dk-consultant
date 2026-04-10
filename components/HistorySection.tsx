const historyItems = [
  { year: "2022", desc: "Relocation of Office to Pangyo" },
  { year: "2021", desc: "Executed school PPP feasibility study for Qatar" },
  { year: "2020", desc: "Achieved Financial Close for 200MW BESS project in Ireland" },
];

function HourglassCircleIcon() {
  return (
    <div style={{
      width: 30, height: 30, borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(65,106,179,0.6)",
      margin: "0 auto",
    }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 2h14"/>
        <path d="M5 22h14"/>
        <path d="M5 2c0 6 7 8 7 10S5 16 5 22"/>
        <path d="M19 2c0 6-7 8-7 10s7 6 7 10"/>
      </svg>
    </div>
  );
}

export default function HistorySection() {
  return (
    <section style={{
      background: "#2e3549",
      backgroundImage: `linear-gradient(rgba(46,53,73,0.95), rgba(46,53,73,0.95)), url('/img/history_bg.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
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
            fontFamily: "Georgia, serif",
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
                <HourglassCircleIcon />
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
