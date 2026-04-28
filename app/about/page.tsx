"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TAB_LINKS = [
  { label: "About DK Consultants", href: "/about" },
  { label: "PPP Unit", href: "/ppp" },
  { label: "Healthcare Unit", href: "/healthcare" },
  { label: "Our People", href: "/people" },
];

const HISTORY = [
  { year: "2016", items: ["Establishment of DK Consultants", "Appointment of David H. Kim as CEO", "Commencement of Business at Yeoksam-dong", "Partnership Agreement with Synergy Consulting"] },
  { year: "2017", items: ["Entrance to Feasibility Studies Market for Infrastructure Projects", "Relocation of Office to Bangbae-dong"] },
  { year: "2018", items: ["Expansion of Business to Healthcare Consulting Market"] },
  { year: "2019", items: ["Incorporation of Representative Office in Indonesia (Synergy Korea)", "Diversification of Business into Two Units: PPP (Public Private Partnership) and Healthcare", "Appointment of Sang Choi as the CEO of PPP Unit"] },
  { year: "2020", items: ["Financing Closure of Ireland BESS Project, Our First FA project (Synergy Korea)", "Executed Feasibility Study for Wanasari Port in Indonesia"] },
  { year: "2021", items: ["Secured Engagements from Indonesian Sponsors for Nickel Smelter projects", "Executed a School PPP Feasibility Study in Qatar", "Appointment of Jongsang Lee as the CEO of PPP Unit"] },
  { year: "2022", items: ["Relocation of Office to Pangyo", "Phou Ngoy Mekong Hydro Power Plant in Laos", "Duqm Green Ammonia Project in Oman"] },
  { year: "2023", items: ["Dumai Refinery Project (RDMP RUII) in Indonesia", "Newcastle Green Ammonia Project in Australia", "BC Green Ammonia Project in Canada"] },
  { year: "2024", items: ["Queensland Green Methanol Project in Australia", "Green hydrogen & Ammonia Project in Dubai", "Green hydrogen & Ammonia Project in Western Australia", "Establishment of Representative Office & K-PHARMA LLC in Uzbekistan"] },
];

export default function AboutPage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>

        {/* Hero Banner */}
        <div style={{
          backgroundImage: "url('/img/hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 40px 70px",
          textAlign: "center",
          position: "relative",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(15, 30, 60, 0.72)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 11, letterSpacing: 4, color: "#8ca3c8", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 14 }}>DK CONSULTANTS</p>
            <h1 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 14 }}>About Us</h1>
            <p style={{ fontSize: 15, color: "#afc3de", fontFamily: "'Lato', sans-serif" }}>Professional knowledge meets social needs</p>
          </div>
        </div>

        {/* Horizontal Tab Navigation */}
        <div style={{ background: "#fff", borderBottom: "2px solid #e5e7eb", position: "sticky", top: 80, zIndex: 100 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", overflowX: "auto" }}>
            {TAB_LINKS.map(tab => {
              const active = tab.href === "/about";
              return (
                <a
                  key={tab.label}
                  href={tab.href}
                  style={{
                    padding: "17px 30px",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 13,
                    fontWeight: active ? 700 : 400,
                    color: active ? "#416ab3" : "#666",
                    textDecoration: "none",
                    borderBottom: active ? "3px solid #416ab3" : "3px solid transparent",
                    marginBottom: -2,
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                    letterSpacing: 0.3,
                  }}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Main Content – centered, no sidebar */}
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "64px 40px 72px" }}>

          {/* About Text */}
          <div style={{ marginBottom: 52 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 28 }}>About DK Consultants</h2>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
              We come to the market to bring creative, realistic and cost-efficient solutions for large infrastructure projects, specifically in PPP (Public-Private Partnership) and Healthcare areas.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
              We work as an integral arm of our clients in developing business opportunities at both strategy and implementation levels. We work with partners from diverse cultural backgrounds, each of whom holds industry-leading capabilities and well-recognized expertise across the globe. We promise to add value to our clients by creating the dynamic synergy between DK Consultants' insight and our partner's substantial influences over their respective fields.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
              Each of our business unit may be compact, and as such we are comprehensive and ever-responsive to our clients' needs. Also, each of our team is extremely knowledgeable and capable, based on years of hands-on experiences in developing and financing large infrastructure projects.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: "#444", fontFamily: "'Lato', sans-serif" }}>
              Moreover, we encourage collaboration, cultivate innovation, act with integrity and foster a sense of care. We always place these values at the heart of the projects we serve. We will continue to maintain the trust that our clients, communities and our people place in DK Consultants; we believe that an ethical mentality, combined with technical expertise, will ultimately drive any projects to excellency.
            </p>
          </div>

          {/* Corporate Structure Diagram */}
          <div style={{ marginBottom: 60, textAlign: "center" }}>
            <img
              src="/img/img_01_01_a_new2_n2.png"
              alt="DK Consultants Corporate Structure"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Two Column: Services + Overview / Vision / Key Takeaways */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52 }}>

            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 20, letterSpacing: 0.8, textTransform: "uppercase" }}>Corporate Structure Services</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Power Generation", "Renewables", "Green Hydrogen & Ammonia", "District Heating and Cooling", "Water", "Oil & Gas", "Education", "Industrial Mining", "Transportation", "Healthcare"].map(item => (
                  <li key={item} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "9px 0", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 20, letterSpacing: 0.8, textTransform: "uppercase" }}>Company Overview</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {[
                  "Founded in 2016, DK Consultants serves as a local leader in financial advisory, feasibility study and training services for infrastructure procurement.",
                  "Our successful experiences testify for our capabilities in leading, structuring and closing large and complex transactions across multiple sectors from clients in both private and public sectors.",
                  "DK Consultants is rapidly growing its market recognition in Korea based on the in-house expertise from the management who has extensive and long-term successful experience in project development, advisory/services covering all kinds of development capabilities of marketing, technical support and financial capabilities in infrastructure and healthcare globally.",
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "9px 0", borderBottom: "1px solid #f0f0f0", lineHeight: 1.75, display: "flex", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0, marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 16, letterSpacing: 0.8, textTransform: "uppercase" }}>Our Vision</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                <li style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "9px 0", lineHeight: 1.75, display: "flex", gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0, marginTop: 7 }} />
                  Fueling the needs of Korean firms in developing and financing infrastructure projects worldwide.
                </li>
              </ul>

              <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 16, letterSpacing: 0.8, textTransform: "uppercase" }}>Key Takeaways</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Leadership with 30+ years of experience", "Clients including government agencies and large construction companies across the globe"].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "9px 0", borderBottom: "1px solid #f0f0f0", display: "flex", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0, marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* History Section – dark navy background, alternating layout */}
        <div style={{ background: "#0d1d35", padding: "80px 40px 100px" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 64, textAlign: "center", letterSpacing: 0.5 }}>History</h2>

            <div style={{ position: "relative" }}>
              {/* Center vertical line */}
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "rgba(130,160,210,0.2)", transform: "translateX(-50%)" }} />

              {HISTORY.map(({ year, items }) => {
                const isEven = parseInt(year) % 2 === 0;
                return (
                  <div
                    key={year}
                    style={{
                      display: "flex",
                      justifyContent: isEven ? "flex-end" : "flex-start",
                      marginBottom: 44,
                      position: "relative",
                    }}
                  >
                    {/* Year dot on center line */}
                    <div style={{
                      position: "absolute",
                      left: "50%",
                      top: 10,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "#416ab3",
                      border: "2px solid #0d1d35",
                      boxShadow: "0 0 0 2px #416ab3",
                      transform: "translateX(-50%)",
                      zIndex: 1,
                    }} />

                    {/* Year label on opposite side of content */}
                    <div style={{
                      position: "absolute",
                      left: isEven ? undefined : "52%",
                      right: isEven ? "52%" : undefined,
                      top: 6,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#5a82c0",
                    }}>
                      {year}
                    </div>

                    {/* Content card */}
                    <div style={{
                      width: "46%",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(130,160,210,0.15)",
                      borderRadius: 4,
                      padding: "20px 24px",
                    }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {items.map((item, i) => (
                          <li key={i} style={{ fontSize: 13, fontFamily: "'Lato', sans-serif", color: "#b8cde6", lineHeight: 1.85, display: "flex", gap: 8, marginBottom: i < items.length - 1 ? 6 : 0 }}>
                            <span style={{ color: "#5a82c0", flexShrink: 0, marginTop: 1 }}>·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
