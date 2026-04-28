const historyItems = [
  { year: "2022", desc: "Relocation of Office to Pangyo", filled: true },
  { year: "2021", desc: "Executed school PPP feasibility study for Qatar", filled: false },
  { year: "2020", desc: "Achieved Financial Close for 200MW BESS project in Ireland", filled: false },
];

function HourglassCircleIcon({ filled }: { filled: boolean }) {
  return (
    <div style={{
      width: 30, height: 30, borderRadius: "50%",
      border: filled ? "1px solid rgba(65,106,179,0.8)" : "1px solid rgba(255,255,255,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: filled ? "rgba(65,106,179,0.85)" : "transparent",
      flexShrink: 0,
    }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
        stroke={filled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)"}
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontStyle: "italic",
            color: "#fff",
            letterSpacing: 0.5,
          }}>
            History
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", textAlign: "center" }}>

          {/* Circle row with line */}
          {historyItems.map((item, i) => (
            <div key={item.year + "-circle"} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              {/* Left connector line */}
              {i > 0 && (
                <div style={{
                  position: "absolute",
                  top: "50%", left: 0, right: "50%",
                  height: 1,
                  background: "rgba(255,255,255,0.15)",
                  transform: "translateY(-50%)",
                }} />
              )}
              {/* Right connector line */}
              {i < historyItems.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: "50%", left: "50%", right: 0,
                  height: 1,
                  background: "rgba(255,255,255,0.15)",
                  transform: "translateY(-50%)",
                }} />
              )}
              <div style={{ position: "relative", zIndex: 1 }}>
                <HourglassCircleIcon filled={item.filled} />
              </div>
            </div>
          ))}

          {/* Text row */}
          {historyItems.map((item) => (
            <div key={item.year + "-text"} style={{ padding: "24px 30px 0" }}>
              <h4 style={{
                fontSize: 22, fontWeight: 700,
                fontFamily: "'Lato', sans-serif",
                color: "#fff",
                margin: "0 0 12px",
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
    </section>
  );
}
