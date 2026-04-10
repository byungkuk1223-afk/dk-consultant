export default function Footer() {
  return (
    <footer>
      <div style={{ background: "#1a1a1a", padding: "50px 48px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", gap: 40,
        }}>

          {/* Logo & Contact Info */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: 20 }}>
              <a href="/" style={{ textDecoration: "none" }}>
                <img
                  src="/logo.png"
                  alt="DK Consultants"
                  style={{ height: 55, width: "auto", filter: "brightness(0) invert(1)" }}
                />
              </a>
            </div>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
              <span style={{ fontSize: 12, color: "#aaa", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>
                Address. #303, Gana Plaza, 10-7, Hwangsaeul-ro 258 beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea
              </span>
              <span style={{ fontSize: 12, color: "#aaa", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                Tel. +82.31.603.4845 &nbsp;/&nbsp; Fax. +82.31.603.0079
              </span>
              <span style={{ fontSize: 12, color: "#aaa", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                E-mail. dkc_info@dk-consultant.com
              </span>
            </div>
          </div>

          {/* Privacy Button */}
          <div style={{ paddingTop: 4, flexShrink: 0 }}>
            <a href="/privacy" style={{
              display: "inline-block",
              padding: "11px 26px",
              border: "1px solid #666",
              color: "#aaa",
              textDecoration: "none",
              fontSize: 11,
              letterSpacing: 1.8,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              textTransform: "uppercase",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#aaa";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#666";
              (e.currentTarget as HTMLAnchorElement).style.color = "#aaa";
            }}>
              Privacy Statement
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{
        background: "#111",
        textAlign: "center",
        padding: "15px",
        fontSize: 11,
        color: "#888",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300,
        letterSpacing: 1,
      }}>
        COPYRIGHT (C) DK CONSULTANTS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
