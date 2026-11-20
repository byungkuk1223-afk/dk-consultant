"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMG } from "@/data/images";
import PageHero, { sx } from "@/components/PageHero";

type Item = { tag: string; title: string; facts: string[]; people: string[]; note?: string };

const ITEMS: Item[] = [
  {
    tag: "Carbon capture in operation",
    title: "CO₂ capture and liquefaction at a combined heat and power plant, 300 t/day, Gunsan, Korea",
    facts: [
      "Owner: SGC Energy · completed 2023, in commercial operation",
      "Captures up to 300 t of CO₂ a day, about 100,000 t a year, from the host plant's flue gas",
      "Capture technology licensed from KEPCO (2021); 99.9% pure liquid CO₂ under a 10-year supply contract",
    ],
    people: ["Namjin Park (DKC Technical Lead, Instrumentation & Controls): Project Director, at SGC E&C"],
    note: "Also at SGC E&C: Project Director, SGC Energy 250 MW coal power plant retrofit.",
  },
  {
    tag: "Circulating fluidized bed (CFB)",
    title: "Samcheok Green Power Plant, Korea: four 550 MWe ultra-supercritical CFB boilers",
    facts: ["The world's largest CFB plant at its completion (2016–2017)", "Architect-engineer (AE) project at KEPCO E&C"],
    people: ["Young Hoon Ha (DKC Technical Lead, Boiler / CFBC): Mechanical Engineering Team Leader"],
  },
  {
    tag: "Ultra-supercritical coal",
    title: "POSCO Power Samcheok coal-fired power plant, 2 × 1,050 MW ultra-supercritical, Korea",
    facts: ["EPC delivery at POSCO E&C, with a 345 kV transmission line"],
    people: ["Namjin Park: Project Manager and Project Director"],
  },
  {
    tag: "Coal-fired EPC, delivered together",
    title: "Coal-fired power plants in Chile: Nueva Ventana, Campiche, Angamos, and Cochrane",
    facts: ["EPC delivery at POSCO E&C for AES in Chile", "Four plants delivered by people who now work together at DKC"],
    people: [
      "Won Suc Kim (DKC EPC Engagement Lead): Country Manager, Chile; project lead",
      "Jong Kyu Han (DKC Constructability & Construction Planning Lead): Project Director, Angamos and Cochrane",
      "Myong-heon Han (DKC OSBL Integration & Execution Planning Lead): Project Manager and Mechanical Lead Engineer, Nueva Ventana",
      "Hyoseok Seo (DKC Technical Lead, Environmental Systems): Environmental Lead Engineer and Construction Manager, Campiche and Nueva Ventana",
    ],
  },
  {
    tag: "500 MW coal-fired units",
    title: "Dangjin, Taean, and Hadong coal-fired power plants, Korea (500 MW units)",
    facts: ["Design and commissioning of 500 MW coal-fired units as KEPCO E&C engineers"],
    people: [
      "Young Jong Youn (DKC Technical Lead, Civil): civil design and commissioning, Dangjin 8 × 500 MW, Taean 8 × 500 MW, Hadong 6 × 500 MW",
      "Ho Gi Kim (DKC Technical Lead, Electrical): responsible electrical engineer, Taean; electrical group supervisor, Boryong, Dangjin, West Incheon, and Ulsan",
      "Young Hoon Ha: engineer, Hadong Units 7 & 8 (ministerial commendation, 2009)",
    ],
  },
  {
    tag: "Gas processing",
    title: "Gas separation and gas processing plants",
    facts: ["PTT gas separation and ethane separation plants; Petronas / PTT Songkran gas separation; VOGC gas processing; LNG regasification"],
    people: ["Kyong Jin Mun (DKC Executive Vice President · Technical Lead, CCS): Lead Process Engineer, at Samsung E&A"],
  },
];

export default function TeamExperiencePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero
        title="Team Experience"
        subtitle="Plants our people engineered, built, and commissioned before they joined DKC."
        bg={IMG.teamExperience}
      />

      <section>
        <div style={sx.wrap}>
          <p style={sx.lead}>
            DKC&apos;s discipline leads joined from two groups that delivered coal-fired plants together: KEPCO E&amp;C&apos;s thermal
            power engineering and POSCO E&amp;C&apos;s power business.
          </p>
          <p style={sx.p}>
            The projects on this page are the career experience of DKC team members with their previous employers. They are listed
            separately from{" "}
            <a href="/projects" style={{ color: "#416ab3", fontWeight: 700 }}>DKC&apos;s own projects</a>.
          </p>

          <div className="rg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 30 }}>
            {ITEMS.map((it) => (
              <div key={it.title} style={{ background: "#fff", border: "1px solid #e5e7eb", borderTop: "4px solid #0b2545", padding: "24px 26px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <p style={{ fontSize: 11, letterSpacing: 2, color: "#0e7c86", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 8 }}>
                  {it.tag.toUpperCase()}
                </p>
                <p style={{ fontSize: 18, lineHeight: "26px", fontFamily: "'Libre Baskerville', Georgia, serif", color: "#0b2545", marginBottom: 12 }}>{it.title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px" }}>
                  {it.facts.map((f) => (
                    <li key={f} style={{ fontSize: 14, color: "#555", lineHeight: "22px", padding: "3px 0 3px 16px", position: "relative", fontFamily: "'Lato', sans-serif" }}>
                      <span style={{ position: "absolute", left: 2, top: 11, width: 5, height: 5, borderRadius: "50%", background: "#416ab3" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 11, letterSpacing: 1.5, color: "#888", fontWeight: 700, fontFamily: "'Lato', sans-serif", margin: "10px 0 6px" }}>DKC TEAM MEMBERS</p>
                {it.people.map((p) => (
                  <p key={p} style={{ fontSize: 14, color: "#333", lineHeight: "22px", fontFamily: "'Lato', sans-serif", marginBottom: 4 }}>{p}</p>
                ))}
                {it.note && <p style={{ fontSize: 13, color: "#777", marginTop: 8, fontFamily: "'Lato', sans-serif" }}>{it.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
