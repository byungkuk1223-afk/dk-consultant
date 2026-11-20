"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

type Person = { name: string; title: string; expertise: string; img?: string };

// Titles follow Attachment B (CV) and the DKC corporate brochure: "DKC title · project role".
const GROUPS: { title: string; intro: string; people: Person[] }[] = [
  {
    title: "Leadership",
    intro: "Executives with backgrounds in IPP development, EPC delivery, and project company management.",
    people: [
      { name: "David Kim", title: "Founder & CEO · Project Director", expertise: "IPP development, contracts & project finance", img: "/img/people_img_c.png" },
      { name: "Dong Woon Kim", title: "Vice Chairman · PP/CCUS Integration Lead", expertise: "Process plants & EPC project management" },
      { name: "Sang Choi", title: "Executive Director · Engineering Coordinator", expertise: "EPC project management & engineering integration" },
      { name: "Jong Sang Lee", title: "Executive Director · Commercial Review & Coordination Lead", expertise: "Environmental infrastructure PPP & project structuring", img: "/img/people_img_new2_a.png" },
    ],
  },
  {
    title: "Power Plant Specialist Group",
    intro: "Discipline leads from KEPCO E&C, with design, commissioning, and contracting experience on large coal-fired units.",
    people: [
      { name: "Young Hoon Ha", title: "Technical Lead, Boiler / CFBC", expertise: "Coal-fired plant mechanical & boiler engineering" },
      { name: "Byeong Cheol Choi", title: "Technical Lead, Project Controls & Cost Estimate", expertise: "Thermal plant cost, schedule & EPC commercial" },
      { name: "Ho Gi Kim", title: "Technical Lead, Electrical", expertise: "Power plant electrical systems & grid interface" },
      { name: "Young Jong Youn", title: "Technical Lead, Civil", expertise: "Power plant civil, structural & site engineering" },
    ],
  },
  {
    title: "CCS Process Lead & Discipline Leads",
    intro: "A process lead for gas processing and CCS, and discipline leads from POSCO E&C's power business.",
    people: [
      { name: "Kyong Jin Mun", title: "Executive Vice President · Technical Lead, CCS", expertise: "Gas processing, petrochemical & CCS process" },
      { name: "Namjin Park", title: "Technical Lead, Instrumentation & Controls", expertise: "Power and CCU plant EPC; instrumentation & controls" },
      { name: "Hyoseok Seo", title: "Technical Lead, Environmental Systems", expertise: "Water, wastewater, desulfurization & environmental systems" },
      { name: "Myong-heon Han", title: "OSBL Integration & Execution Planning Lead", expertise: "Coal- and LNG-fired power plant delivery" },
      { name: "Jong Kyu Han", title: "Constructability & Construction Planning Lead", expertise: "Coal-fired plant construction & commissioning" },
    ],
  },
  {
    title: "Financial & Commercial Advisory Team",
    intro: "The financial team has worked on projects from a 30 MW hydro plant to a 4,500 MW LNG-to-power complex.",
    people: [
      { name: "Joon Woong Kong", title: "Chief Operating Officer · Commercial & Financial PMO Lead", expertise: "Project finance & energy business development", img: "/img/people_img_new2_h.png" },
      { name: "Dae Hyun Jo", title: "Managing Director · Investment Structuring & Financing Strategy", expertise: "IPP development & financial advisory", img: "/img/people_img_new2_d_n.png" },
      { name: "Eunyoung Choi", title: "CFO", expertise: "Project administration & budget control", img: "/img/people_img_new2_c3.png" },
      { name: "Jun Sung Kim", title: "General Manager, Financial Advisory", expertise: "Financial modeling & lender materials" },
      { name: "Minkyung Koh", title: "Director", expertise: "Feasibility studies", img: "/img/people_img_i2.png" },
      { name: "Kihwan Na", title: "Financial Senior Advisor", expertise: "Project finance", img: "/img/people_img_new2_g1.png" },
    ],
  },
  {
    title: "Healthcare Unit",
    intro: "DKC's separate business unit for hospital and pharmaceutical projects.",
    people: [
      { name: "Cheolsoo Kim", title: "CEO / Healthcare", expertise: "Healthcare advisory", img: "/img/people_img_new2_b.png" },
      { name: "Jaesun Kim", title: "Healthcare Senior Advisor", expertise: "Healthcare advisory", img: "/img/people_img_e.png" },
    ],
  },
];

function initials(name: string) {
  return name.split(/[\s-]+/).filter(Boolean).map((w) => w[0].toUpperCase()).join("").slice(0, 3);
}

function Card({ p }: { p: Person }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e5e5", boxShadow: "0 6px 14px rgba(0,0,0,.06)", padding: "26px 20px 24px", textAlign: "center" }}>
      <div style={{ width: 108, height: 108, borderRadius: "50%", margin: "0 auto 18px", overflow: "hidden", border: "1px solid #c8d5eb", background: "#eef2f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {p.img ? (
          <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", background: "#fff" }} />
        ) : (
          <span style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 30, color: "#416ab3" }}>{initials(p.name)}</span>
        )}
      </div>
      <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 19, color: "#000", marginBottom: 8 }}>{p.name}</p>
      <p style={{ fontSize: 13, color: "#416ab3", lineHeight: "19px", fontWeight: 700, marginBottom: 8 }}>{p.title}</p>
      <p style={{ fontSize: 13, color: "#888", lineHeight: "19px" }}>{p.expertise}</p>
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
      <main style={{ minHeight: "100vh", background: "#fff" }}>
        <AboutHero active="people" />

        <div className="dk-sub">
          <div className="dk-center">
            Leaders, discipline engineers, and financial advisors in one team. Power plant and process engineers review the plant,
            the capture facility, and the interfaces between them; the commercial and financial team carries the same baseline into
            the project agreements and the financing.
          </div>

          <div style={{ background: "#fafafa", padding: "10px 0 60px" }}>
            {GROUPS.map((g) => (
              <div key={g.title} style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 24px 0" }}>
                <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 26, color: "#0b2545", marginBottom: 6 }}>{g.title}</p>
                <p style={{ fontSize: 15, color: "#777", marginBottom: 24 }}>{g.intro}</p>
                <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
                  {g.people.map((p) => <Card key={p.name} p={p} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
