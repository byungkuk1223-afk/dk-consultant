"use client";
// Our People. Titles follow Attachment B (CV, Revised_r1): "DKC title · project role". Bios summarize the CVs.
// No photos (not available for everyone; the page is kept uniform).
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import { teamProjectBySlug } from "@/data/teamProjects";

type Person = { name: string; title: string; bio: string; plants?: string[] };

const GROUPS: { title: string; intro: string; people: Person[] }[] = [
  {
    title: "Leadership",
    intro: "Executives with backgrounds in power plant development, EPC project management, and project finance.",
    people: [
      { name: "David Kim", title: "Founder & CEO · Project Director", bio: "Electrical engineer with over 40 years in power plant development and delivery: nuclear contracting at KEPCO and KHIC, private power development at Babcock & Wilcox, and senior roles at AGRA Monenco and Samsung E&A. Founded DKC in 2016." },
      { name: "Dong Woon Kim", title: "Vice Chairman · PP/CCUS Integration Lead", bio: "Chemical engineer with over 40 years in EPC project management and process design; Executive Vice President at Samsung E&A and former CEO of Byucksan Engineering. Korean Professional Engineer (Chemical Equipment)." },
      { name: "Sang Choi", title: "Executive Director · Engineering Coordinator", bio: "Mechanical engineer with over 35 years in EPC project management and energy advisory; 28 years at Samsung E&A, and EPC project manager for district heating in Mongolia." },
      { name: "Joon Woong Kong", title: "Chief Operating Officer · Commercial & Financial PMO Lead", bio: "Electrical engineer with experience in energy sales, project finance, and international feasibility studies; leads DKC's business advisory and development team." },
      { name: "Jong Sang Lee", title: "Executive Director · Commercial Review & Coordination Lead", bio: "Environmental engineer with over 30 years in EPC project management, project finance, and international feasibility studies." },
    ],
  },
  {
    title: "Power Plant Engineering",
    intro: "Discipline leads from KEPCO E&C's thermal power engineering, with design, commissioning, and cost experience on large coal-fired units.",
    people: [
      { name: "Young Hoon Ha", title: "Technical Lead, Boiler / CFBC", bio: "Mechanical engineer with over 30 years at KEPCO E&C; mechanical engineering team leader on the architect-engineer project for Samcheok Green Power. Korean Professional Engineer (Mechanical).", plants: ["samcheok-green-power", "korea-500mw-coal"] },
      { name: "Ho Gi Kim", title: "Technical Lead, Electrical", bio: "Electrical and control specialist with over 40 years in thermal power engineering, EPC execution, commissioning, and O&M consulting.", plants: ["korea-500mw-coal"] },
      { name: "Young Jong Youn", title: "Technical Lead, Civil", bio: "Power plant engineer with over 34 years in thermal and combined cycle plant design, EPC execution, and construction management.", plants: ["korea-500mw-coal"] },
      { name: "Byeong Cheol Choi", title: "Technical Lead, Project Controls & Cost Estimate", bio: "Cost and schedule specialist with over 30 years in thermal power, EPC execution, and IPP development: EPC and O&M cost review, tariff evaluation, and schedule control." },
    ],
  },
  {
    title: "CCS Process and EPC Delivery",
    intro: "A process lead for gas processing and carbon capture, and project leaders from POSCO E&C's power business, who delivered coal-fired plants in Korea and Chile and a commercial CO₂ capture plant.",
    people: [
      { name: "Kyong Jin Mun", title: "Executive Vice President · Technical Lead, CCS", bio: "Chemical engineer with over 30 years at Samsung E&A in petrochemical, refinery, and gas processing EPC, including lead process engineering on gas separation plants.", plants: ["gas-separation"] },
      { name: "Namjin Park", title: "Technical Lead, Instrumentation & Controls", bio: "Electrical and instrumentation engineer with over 30 years in power and chemical plant EPC, as contractor and as developer's representative; project director of a 300 t/d CO₂ capture and liquefaction plant.", plants: ["sgc-gunsan-co2-capture", "samcheok-blue-power"] },
      { name: "Hyoseok Seo", title: "Technical Lead, Environmental Systems", bio: "Chemical engineer with over 36 years in EPC engineering and construction; water and wastewater treatment, desulfurization, and desalination systems.", plants: ["nueva-ventanas", "campiche"] },
      { name: "Myong-heon Han", title: "OSBL Integration & Execution Planning Lead", bio: "Nearly 30 years delivering coal-, LNG-, and oil-fired power plants at POSCO E&C, in Korea, Chile, Peru, Panama, Iraq, Vietnam, and the Philippines; former Head of the Power Business Division.", plants: ["nueva-ventanas"] },
      { name: "Jong Kyu Han", title: "Constructability & Construction Planning Lead", bio: "Mechanical engineer with nearly 35 years in construction and commissioning of coal-fired plants at POSCO E&C; former Head of the Power Business Division.", plants: ["angamos", "cochrane"] },
      { name: "Won Suc Kim", title: "EPC Engagement Lead", bio: "Over 35 years in overseas EPC contracting and power plant development; former Head of POSCO E&C's Overseas Power Business Division.", plants: ["angamos", "cochrane", "nueva-ventanas", "campiche"] },
      { name: "Hyoung Ryul Jeon", title: "Director · EPC Proposal & Contract Support", bio: "Mechanical engineer with about 26 years in plant EPC: business development, bidding, contract negotiation, construction, and commissioning. PMP." },
    ],
  },
  {
    title: "Commercial and Financial Advisory",
    intro: "The team behind DKC's feasibility studies and financial advisory work, from a 30 MW hydro plant to a 4,500 MW LNG-to-power complex.",
    people: [
      { name: "Dae Hyun Jo", title: "Managing Director · Investment Structuring & Financing Strategy", bio: "Mechanical engineer with 22 years in IPP development, EPC sales, and overseas project planning at DL Energy, SK ecoplant, Samsung E&A, and Hyundai Motor." },
      { name: "Eun Young Choi", title: "Managing Director · Project Administration & Budget Control", bio: "About 19 years in project management and business development; at DKC since 2020, managing budgets and supporting feasibility studies." },
    ],
  },
];

function Card({ p }: { p: Person }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e3e8ef", borderTop: "3px solid #0b2545", padding: "20px 20px 18px", display: "flex", flexDirection: "column" }}>
      <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 18, color: "#0b2545", marginBottom: 6 }}>{p.name}</p>
      <p style={{ fontSize: 12.5, color: "#0e7c86", lineHeight: "18px", fontWeight: 700, marginBottom: 10, fontFamily: "'Lato', sans-serif" }}>{p.title}</p>
      <p style={{ fontSize: 13.5, color: "#55606d", lineHeight: "21px", fontFamily: "'Lato', sans-serif", flex: 1 }}>{p.bio}</p>
      {p.plants && p.plants.length > 0 && (
        <div style={{ borderTop: "1px solid #eef1f5", marginTop: 12, paddingTop: 8 }}>
          {p.plants.map((s) => {
            const t = teamProjectBySlug(s);
            return t ? (
              <Link key={s} href={`/team-experience/${s}`} style={{ display: "block", fontSize: 12.5, lineHeight: "20px", color: "#416ab3", fontWeight: 700, fontFamily: "'Lato', sans-serif" }}>
                {t.title.replace(/, (Korea|Chile|Mejillones, Chile|Ventanas, Chile)$/, "")} →
              </Link>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}

export default function PeoplePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ background: "#fff" }}>
        <AboutHero active="people" />
        <section>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 8px" }}>
            <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 20, lineHeight: "31px", color: "#2c3a4b", maxWidth: 940 }}>
              Power plant and process engineers review the plant, the capture facility, and the interfaces between them; the commercial
              and financial team carries the same baseline into the project agreements and the financing. Links under each name lead to
              plants that person delivered before joining DKC.
            </p>
          </div>
        </section>
        {GROUPS.map((g, i) => (
          <section key={g.title} style={{ background: i % 2 === 0 ? "#f6f8fb" : "#fff", marginTop: i === 0 ? 40 : 0 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 24px 56px" }}>
              <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 26, color: "#0b2545", marginBottom: 6 }}>{g.title}</p>
              <p style={{ fontSize: 15, color: "#6b7580", marginBottom: 24, fontFamily: "'Lato', sans-serif" }}>{g.intro}</p>
              <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 18, alignItems: "stretch" }}>
                {g.people.map((p) => <Card key={p.name} p={p} />)}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
