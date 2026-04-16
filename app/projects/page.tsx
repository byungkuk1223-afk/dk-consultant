"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ALL_PROJECTS = [
  { title: "Blue Ammonia Project in Canada", category: "Feasibility Study", region: "Northern America" },
  { title: "SAF Development Project in Indonesia", category: "Feasibility Study", region: "Asia" },
  { title: "Pharmaceutical Manufacturing Facility in Kyrgyzstan", category: "Business Development", region: "Asia" },
  { title: "Pharmaceutical Manufacturing Facility in Uzbekistan", category: "Business Development (BOO)", region: "Asia" },
  { title: "Green Hydrogen Development Project in Australia", category: "Feasibility Study", region: "Oceania" },
  { title: "Solar Power Generation and Carbon Credit Acquisition Project", category: "Feasibility Study", region: "Asia" },
  { title: "Green Hydrogen Ammonia Project in Dubai", category: "Feasibility Study", region: "Middle East·Africa" },
  { title: "Green Hydrogen Ammonia Project in Western Australia", category: "Feasibility Study", region: "Oceania" },
  { title: "Tashkent Medical Waste-to-Energy Project in Uzbekistan", category: "Feasibility Study", region: "Asia" },
  { title: "Queensland Green Methanol Project in Australia", category: "Feasibility Study", region: "Oceania" },
  { title: "BC Green Ammonia Project in Canada", category: "Feasibility Study", region: "Northern America" },
  { title: "Newcastle Green Ammonia Project in Australia", category: "Feasibility Study", region: "Oceania" },
  { title: "Uljin Nuclear Hydrogen Basic Plan in Korea", category: "Feasibility Study", region: "Asia" },
  { title: "Dumai Refinery Project in Indonesia", category: "Feasibility Study", region: "Asia" },
  { title: "BESS Construction Project in Ireland", category: "Feasibility Study", region: "Europe" },
  { title: "Hai Lang FS Report Review in Vietnam", category: "Feasibility Study", region: "Asia" },
  { title: "Financial Advisory Service in Korea", category: "Financial Advisory", region: "Asia" },
  { title: "BESS Implementation Project in Ireland", category: "Feasibility Study", region: "Europe" },
  { title: "Renewable Energy Complex Development Project in Australia", category: "Feasibility Study", region: "Oceania" },
  { title: "Customs Container Inspection Facility Project in Sri Lanka", category: "Feasibility Study", region: "Asia" },
  { title: "School PPP PKG III in Qatar", category: "Pre-feasibility Study", region: "Middle East·Africa" },
  { title: "Sulawesi 30MW Small Hydropower Project in Indonesia", category: "Financial Advisory Services", region: "Asia" },
  { title: "Alfonso el Sabio Solar PV in Spain", category: "Feasibility Study", region: "Europe" },
  { title: "Battambang II Hydro Power Project in Cambodia", category: "Feasibility Study", region: "Asia" },
  { title: "Duqm Green Ammonia Project in Oman", category: "Feasibility Study", region: "Middle East·Africa" },
  { title: "Western Australia Green Ammonia Project in Australia", category: "Feasibility Study", region: "Oceania" },
  { title: "Phou Ngoy Mekong Hydro Power Plant in Laos", category: "Feasibility Study", region: "Asia" },
  { title: "School PPP PKG III in Qatar (Synergy Korea)", category: "Pre-feasibility Study", region: "Middle East·Africa" },
  { title: "Texas Supercritical CO2 Power Plant in USA (Synergy Korea)", category: "Transaction Advisory Services", region: "Northern America" },
  { title: "Gas To Power Project in Dominican Republic", category: "Feasibility Study", region: "Latin America" },
  { title: "Gas To Power Project in Dominican Republic (Synergy Korea)", category: "Financial and Bid Advisory Service", region: "Latin America" },
  { title: "Tashkent Landfill Gas to Energy and CDM Project in Uzbekistan", category: "Financial Advisory Services", region: "Asia" },
  { title: "Anuradhapura Solar PV in Sri Lanka", category: "Feasibility Study", region: "Asia" },
  { title: "Mubarek CHP Modernization in Uzbekistan (Synergy Korea)", category: "Financial and Transaction Advisory Services", region: "Asia" },
  { title: "BESS Project in Ireland (Synergy Korea)", category: "Financial Advisory Services", region: "Europe" },
  { title: "BESS Project in Ireland (Synergy Korea) - Commercial Operations Modeling", category: "Commercial Operations Modeling", region: "Europe" },
  { title: "Nickel and Cobalt Smelter for PT BES in Indonesia (Synergy Korea)", category: "Bankable Feasibility Study, Financial Advisory Services", region: "Asia" },
  { title: "CCGT in Limbe in Cameroon", category: "Feasibility Study", region: "Middle East·Africa" },
  { title: "Long An Gas to Power in Vietnam", category: "Feasibility Study", region: "Asia" },
  { title: "BOT-based Gas Supply Project in Indonesia", category: "Feasibility Study and Financial Advisory Services", region: "Asia" },
  { title: "Hai Lang LNG to Power in Vietnam", category: "Feasibility Study", region: "Asia" },
  { title: "District Cooling Project for South Saad Al Abdullah Smart City", category: "Feasibility Study", region: "Middle East·Africa" },
  { title: "Development of Jurassic Production Facility 4&5 at North Kuwait", category: "Financial Advisory Services", region: "Middle East·Africa" },
  { title: "Hydro Power Development in Upper Karnali River in Nepal", category: "Feasibility Study", region: "Asia" },
  { title: "Development of Wanasari Port in Indonesia", category: "Establishment of Basic Plan and Feasibility Study", region: "Asia" },
  { title: "Rajasthan Bio-Medical Cluster PPP in India", category: "Advisory Services, Research and Analysis for Business Development", region: "Asia" },
  { title: "Bali Ngurah Rai Int'l Airport City-Air Terminal and LRT Development", category: "Financial Analysis", region: "Asia" },
  { title: "IWP in UAE", category: "Bid strategy and simulation for UAE IWP", region: "Middle East·Africa" },
  { title: "Annual Financial Advisory", category: "Financial Advisory", region: "Etc." },
  { title: "Philippines Batangas Gas-to-Power", category: "Feasibility Study", region: "Asia" },
  { title: "Philippines Ministry of Defense Solar Power", category: "Philippine Power Market Review, Financial Advisory Services", region: "Asia" },
  { title: "Karbala Solar PV Farm", category: "Financial Feasibility and Bankability Studies", region: "Middle East·Africa" },
  { title: "Bidding Strategy for Hospital PPP Project", category: "Bidding Strategy including Bankable Project Structuring", region: "Etc." },
  { title: "Modernization of District Heating Systems in Uzbekistan", category: "Feasibility Study, Financial Advisory", region: "Asia" },
  { title: "Mymensingh Solar Park", category: "M&A Valuation and Due Diligence Support", region: "Asia" },
  { title: "Dhaka West IPP Diesel Power Plant", category: "Financial Advisory Services", region: "Asia" },
  { title: "Kyrgyzstan State Medical Academy Hospital Project in Bishkek", category: "Feasibility Study Covering Hospital Planning, Revenue Model, HIS and Financing Structure", region: "Asia" },
  { title: "Tarija National Cardiac Center", category: "Social / Economic Cost Benefit Analysis", region: "Latin America" },
  { title: "Strategy for Construction-based Healthcare package in Overseas", category: "Strategy for Overseas Healthcare Business and Development of Opportunities & Target countries", region: "Etc." },
  { title: "KSP for Public Infrastructure in Thailand", category: "Prioritization Guideline for Public Infrastructure Projects", region: "Asia" },
  { title: "Dharmais National Cancer Center", category: "Feasibility Study including Hospital Planning and Payment structure", region: "Asia" },
  { title: "Iran Saveh and Zahedan CCGT", category: "Bankability Study & Non Traditional Financing Advisory", region: "Middle East·Africa" },
  { title: "PCPC Aramco Cogeneration Projects", category: "Arbitration Advisory Services", region: "Middle East·Africa" },
];

const REGIONS = ["All", "Asia", "Middle East·Africa", "Europe", "Oceania", "Latin America", "Northern America", "Etc."];
const PER_PAGE = 15;

export default function ProjectsPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = activeRegion === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.region === activeRegion);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleRegion = (r: string) => { setActiveRegion(r); setPage(1); };

  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>
        {/* Page Header */}
        <div style={{ background: "#1a2c4e", padding: "48px 40px 36px", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "#8ca3c8", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 12 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 12 }}>Projects</h1>
          <p style={{ fontSize: 14, color: "#8ca3c8", fontFamily: "'Lato', sans-serif" }}>List of finished projects we helped establish</p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px 80px" }}>
          {/* Sub Nav */}
          <div style={{ display: "flex", gap: 24, marginBottom: 32, borderBottom: "1px solid #e5e7eb", paddingBottom: 0 }}>
            {["Projects", "Clients"].map(tab => (
              <a key={tab} href={tab === "Clients" ? "/clients" : "/projects"}
                style={{ fontSize: 14, fontWeight: tab === "Projects" ? 700 : 400, fontFamily: "'Lato', sans-serif", color: tab === "Projects" ? "#416ab3" : "#666", textDecoration: "none", paddingBottom: 12, borderBottom: tab === "Projects" ? "2px solid #416ab3" : "2px solid transparent" }}>
                {tab}
              </a>
            ))}
          </div>

          {/* Region Filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {REGIONS.map(r => (
              <button key={r} onClick={() => handleRegion(r)}
                style={{ padding: "7px 18px", fontSize: 12, fontFamily: "'Lato', sans-serif", fontWeight: 500, border: "1px solid", borderColor: activeRegion === r ? "#416ab3" : "#ddd", background: activeRegion === r ? "#416ab3" : "#fff", color: activeRegion === r ? "#fff" : "#555", cursor: "pointer", borderRadius: 2, transition: "all 0.2s" }}>
                {r}
              </button>
            ))}
          </div>

          {/* Total Count */}
          <p style={{ fontSize: 13, color: "#999", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>Total {filtered.length} projects</p>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {paginated.map((p, i) => (
                <tr key={i} style={{ borderTop: "1px solid #e5e7eb", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f8f9fc")}
                  onMouseLeave={e => (e.currentTarget.style.background = "")}>
                  <td style={{ padding: "18px 16px" }}>
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'Lato', sans-serif", color: "#1a1a1a", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "#999", fontFamily: "'Lato', sans-serif" }}>{p.category}</div>
                  </td>
                  <td style={{ padding: "18px 16px", textAlign: "right", color: "#416ab3", fontSize: 18 }}>›</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 40 }}>
            <button onClick={() => setPage(1)} disabled={page === 1} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === 1 ? "default" : "pointer", color: page === 1 ? "#ccc" : "#555" }}>«</button>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === 1 ? "default" : "pointer", color: page === 1 ? "#ccc" : "#555" }}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => setPage(n)} style={{ padding: "6px 12px", fontSize: 13, border: "1px solid", borderColor: page === n ? "#416ab3" : "#ddd", background: page === n ? "#416ab3" : "#fff", color: page === n ? "#fff" : "#555", cursor: "pointer" }}>{n}</button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === totalPages ? "default" : "pointer", color: page === totalPages ? "#ccc" : "#555" }}>›</button>
            <button onClick={() => setPage(totalPages)} disabled={page === totalPages} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === totalPages ? "default" : "pointer", color: page === totalPages ? "#ccc" : "#555" }}>»</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
