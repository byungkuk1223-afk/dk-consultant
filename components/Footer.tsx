// Site footer: address, link columns, and a bottom row with copyright and the privacy policy link.
const F = "'Lato', sans-serif";
const COLS = [
  { t: "Markets", l: [["Power Generation", "/markets/power-generation"], ["Carbon Capture & Low-Carbon Fuels", "/markets/carbon-capture"], ["Environmental Infrastructure", "/markets/environmental-infrastructure"], ["Industrial & Infrastructure", "/markets/industrial-infrastructure"]] },
  { t: "Services", l: [["Engineering Management", "/services/engineering"], ["Commercial & Contract Advisory", "/services/commercial"], ["Financial Advisory", "/services/financial"], ["Feasibility & Development", "/services/development"]] },
  { t: "Company", l: [["Who We Are", "/about"], ["How We Deliver", "/delivery"], ["Our People", "/people"], ["Projects", "/projects"], ["Clients", "/clients"], ["Careers", "/career"], ["Contact", "/contact"]] },
];

export default function Footer() {
  return (
    <footer style={{ background: "#14171c", color: "#aab1bb", fontFamily: F }}>
      <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 40px", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) repeat(3, minmax(0,1fr))", gap: 36 }}>
        <div>
          <a href="/"><img src="/logo-wordmark.png" alt="DK Consultants" style={{ height: 26, width: "auto", filter: "brightness(0) invert(1)", marginBottom: 20 }} /></a>
          <p style={{ fontSize: 13, lineHeight: 1.8, fontWeight: 300 }}>
            #303, Gana Plaza, 10-7, Hwangsaeul-ro 258 beon-gil,<br />Bundang-gu, Seongnam-si, Gyeonggi-do, Korea
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.8, fontWeight: 300, marginTop: 8 }}>
            Tel. +82 31 603 4845 · Fax. +82 31 603 0079<br />dkc_info@dk-consultant.com
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.t}>
            <p style={{ color: "#fff", fontSize: 12, letterSpacing: 1.8, fontWeight: 700, marginBottom: 14 }}>{c.t.toUpperCase()}</p>
            {c.l.map(([label, href]) => (
              <a key={href} href={href} className="ft-link" style={{ display: "block", fontSize: 13.5, lineHeight: "26px" }}>{label}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #262b33" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 24px", display: "flex", flexWrap: "wrap", gap: 18, fontSize: 12, color: "#7d8591" }}>
          <span>© {new Date().getFullYear()} DK Consultants Co., Ltd. All rights reserved.</span>
          <a href="/privacy" className="ft-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
