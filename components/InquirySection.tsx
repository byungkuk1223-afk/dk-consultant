export default function InquirySection() {
  return (
    <section
      style={{
        background: "#3d4459",
        backgroundImage: `url('/img/world_map.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "75%",
        padding: "110px 40px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(26px, 3vw, 42px)",
          fontWeight: 700,
          fontFamily: "'Libre Baskerville', Georgia, serif",
          marginBottom: 26,
          letterSpacing: 0.3,
          color: "#fff",
        }}
      >
        We look forward to your inquiry
      </h2>
      <div style={{ margin: "0 auto 40px", maxWidth: 800 }}>
        <p style={{
          fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 300,
          lineHeight: 1.5, color: "rgba(255,255,255,0.65)",
          margin: "0 0 8px 0", whiteSpace: "nowrap",
        }}>
          DK Consultants offer global experience and local knowledge to help you succeed in any public or private business environments.
        </p>
        <p style={{
          fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 300,
          lineHeight: 1.5, color: "rgba(255,255,255,0.65)",
          margin: 0, whiteSpace: "nowrap",
        }}>
          We recognize that every client is different – we fulfill every client&apos;s unique needs, providing directions and tactical advices to enable each client to reach goals.
        </p>
      </div>
      <a
        href="/contact"
        style={{
          display: "inline-block",
          padding: "13px 50px",
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
    </section>
  );
}
