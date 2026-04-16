"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>

        {/* Page Header */}
        <div style={{ background: "#1a2c4e", padding: "48px 40px 36px", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "#8ca3c8", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 12 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 12 }}>About Us</h1>
          <p style={{ fontSize: 14, color: "#8ca3c8", fontFamily: "'Lato', sans-serif" }}>Professional knowledge meets social needs</p>
        </div>

        {/* Sub Nav */}
        <div style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "flex", gap: 32 }}>
            {[
              { label: "About DK Consultants", href: "/about", active: true },
              { label: "PPP Unit", href: "/ppp", active: false },
              { label: "Healthcare Unit", href: "/healthcare", active: false },
              { label: "Our People", href: "/people", active: false },
            ].map(tab => (
              <a key={tab.label} href={tab.href} style={{ fontSize: 14, fontWeight: tab.active ? 700 : 400, fontFamily: "'Lato', sans-serif", color: tab.active ? "#416ab3" : "#666", textDecoration: "none", paddingBottom: 14, paddingTop: 14, borderBottom: tab.active ? "2px solid #416ab3" : "2px solid transparent", display: "inline-block" }}>
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 40px 80px" }}>

          {/* About Text */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 24 }}>About DK Consultants</h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
              We come to the market to bring creative, realistic and cost-efficient solutions for large infrastructure projects, specifically in PPP (Public-Private Partnership) and Healthcare areas.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
              We work as an integral arm of our clients in developing business opportunities at both strategy and implementation levels. We work with partners from diverse cultural backgrounds, each of whom holds industry-leading capabilities and well-recognized expertise across the globe. We promise to add value to our clients by creating the dynamic synergy between DK Consultants' insight and our partner's substantial influences over their respective fields.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>
              Each of our business unit may be compact, and as such we are comprehensive and ever-responsive to our clients' needs. Also, each of our team is extremely knowledgeable and capable, based on years of hands-on experiences in developing and financing large infrastructure projects.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#444", fontFamily: "'Lato', sans-serif" }}>
              Moreover, we encourage collaboration, cultivate innovation, act with integrity and foster a sense of care. We always place these values at the heart of the projects we serve. We will continue to maintain the trust that our clients, communities and our people place in DK Consultants; we believe that an ethical mentality, combined with technical expertise, will ultimately drive any projects to excellency.
            </p>
          </div>

          {/* Two Column: Services + Overview */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 60 }}>

            {/* Corporate Structure Services */}
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 20, letterSpacing: 0.5, textTransform: "uppercase" }}>Corporate Structure Services</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Power Generation", "Renewables", "Green Hydrogen & Ammonia", "District Heating and Cooling", "Water", "Oil & Gas", "Education", "Industrial Mining", "Transportation", "Healthcare"].map(item => (
                  <li key={item} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "8px 0", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Overview + Vision + Key Takeaways */}
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 20, letterSpacing: 0.5, textTransform: "uppercase" }}>Company Overview</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {[
                  "Founded in 2016, DK Consultants serves as a local leader in financial advisory, feasibility study and training services for infrastructure procurement.",
                  "Our successful experiences testify for our capabilities in leading, structuring and closing large and complex transactions across multiple sectors from clients in both private and public sectors.",
                  "DK Consultants is rapidly growing its market recognition in Korea based on the in-house expertise from the management who has extensive and long-term successful experience in project development, advisory/services covering all kinds of development capabilities of marketing, technical support and financial capabilities in infrastructure and healthcare globally.",
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "8px 0", borderBottom: "1px solid #f0f0f0", lineHeight: 1.7, display: "flex", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0, marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 16, letterSpacing: 0.5, textTransform: "uppercase" }}>Our Vision</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                <li style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "8px 0", lineHeight: 1.7, display: "flex", gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0, marginTop: 7 }} />
                  Fueling the needs of Korean firms in developing and financing infrastructure projects worldwide.
                </li>
              </ul>

              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#1a2c4e", marginBottom: 16, letterSpacing: 0.5, textTransform: "uppercase" }}>Key Takeaways</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Leadership with 30+ years of experience", "Clients including government agencies and large construction companies across the globe"].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#444", padding: "8px 0", borderBottom: "1px solid #f0f0f0", display: "flex", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#416ab3", display: "inline-block", flexShrink: 0, marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* History */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 40 }}>History</h2>
            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#e5e7eb" }} />
              {[
                { year: "2016", items: ["Establishment of DK Consultants", "Appointment of David H. Kim as CEO", "Commencement of Business at Yeoksam-dong", "Partnership Agreement with Synergy Consulting"] },
                { year: "2017", items: ["Entrance to Feasibility Studies Market for Infrastructure Projects", "Relocation of Office to Bangbae-dong"] },
                { year: "2018", items: ["Expansion of Business to Healthcare Consulting Market"] },
                { year: "2019", items: ["Incorporation of Representative Office in Indonesia (Synergy Korea)", "Diversification of Business into Two Units: PPP (Public Private Partnership) and Healthcare", "Appointment of Sang Choi as the CEO of PPP Unit"] },
                { year: "2020", items: ["Financing Closure of Ireland BESS Project, Our First FA project (Synergy Korea)", "Executed Feasibility Study for Wanasari Port in Indonesia"] },
                { year: "2021", items: ["Secured Engagements from Indonesian Sponsors for Nickel Smelter projects", "Executed a School PPP Feasibility Study in Qatar", "Appointment of Jongsang Lee as the CEO of PPP Unit"] },
                { year: "2022", items: ["Relocation of Office to Pangyo", "Phou Ngoy Mekong Hydro Power Plant in Laos", "Duqm Green Ammonia Project in Oman"] },
                { year: "2023", items: ["Dumai Refinery Project (RDMP RUII) in Indonesia", "Newcastle Green Ammonia Project in Australia", "BC Green Ammonia Project in Canada"] },
                { year: "2024", items: ["Queensland Green Methanol Project in Australia", "Green hydrogen & Ammonia Project in Dubai", "Green hydrogen & Ammonia Project in Western Australia", "Establishment of Representative Office & K-PHARMA LLC in Uzbekistan"] },
              ].map(({ year, items }) => (
                <div key={year} style={{ marginBottom: 36, position: "relative" }}>
                  <div style={{ position: "absolute", left: -38, top: 4, width: 12, height: 12, borderRadius: "50%", background: "#416ab3", border: "2px solid #fff", boxShadow: "0 0 0 2px #416ab3" }} />
                  <h4 style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1a2c4e", marginBottom: 12 }}>{year}</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#555", lineHeight: 1.8, display: "flex", gap: 10 }}>
                        <span style={{ color: "#416ab3", flexShrink: 0 }}>·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
