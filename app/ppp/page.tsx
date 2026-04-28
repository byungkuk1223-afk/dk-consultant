"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

const ICONS = [
  { img: "/img/icon_01_02_new2_a.png", label: "Government Advisory" },
  { img: "/img/icon_01_02_new2_b.png", label: "Project Finance & Bid Advisory" },
  { img: "/img/icon_01_02_new2_c.png", label: "Financial Due Diligence" },
  { img: "/img/icon_01_02_new2_d.png", label: "Mergers & Acquisitions" },
  { img: "/img/icon_01_02_new2_e.png", label: "Financial Restructuring" },
  { img: "/img/icon_01_02_new2_f.png", label: "Financial Model Review" },
  { img: "/img/icon_01_02_new2_g.png", label: "ECA Advisory & Fund Raising" },
  { img: "/img/icon_01_02_new2_h.png", label: "DIF Advisory & Fund Raising" },
  { img: "/img/icon_01_02_new2_i.png", label: "Training" },
];

const STEPS = [
  { n: "01", text: "Project Milestones​" },
  { n: "02", text: "Project Initial Evaluation" },
  { n: "03", text: "Commercial Proposal and Negotiation​" },
  { n: "04", text: "Financial Close" },
  { n: "05", text: "Start of Operations" },
  { n: "06", text: "End of Project Term" },
];

const LIST_ITEMS = [
  "​DK Consultants' work scope runs the gamut from Project Development to Financial Advisory​",
  "DK Consultants advises clients at every stage of project development including feasibility study, financial structuring, financial modelling, debt raising/syndication, bid management, contract negotiations, and financing document negotiation​",
  "DK Consultants provides conventional and/or innovative solutions to clients across sectors and geographies seeking to restructure their borrowings​",
  "​DK Consultants' key services for project feasibility study include investment advisory, due diligence and risk analysis​",
];

export default function PppPage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff", minWidth: 1200 }}>
        <AboutHero active="ppp" />

        <div className="dk-sub">

          {/* PPP Unit intro + icons */}
          <div className="dk-center">
            <div className="dk-sub-t">PPP Unit​</div>

            Consultants at DK Consultants​ are project finance and infrastructure advisory professionals with an average over 20 years of experience in the field of structuring and financing projects covering all regions.{" "}
            &ldquo;DK Consultants&rdquo; has managed and led projects related to various aspects of financial advisory services including bid advisory, financial due diligence, asset valuation and debt restructuring.​

            <ul className="dk-icons">
              {ICONS.map(icon => (
                <li key={icon.label}>
                  <div className="icon">
                    <img src={icon.img} alt={icon.label} />
                  </div>
                  <div className="text">{icon.label}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Competencies section */}
          <div className="dk-bg-a">
            <div className="dk-center">
              <div className="dk-sub-t">Core Competencies &amp; Capability Statement​</div>
              <div style={{ textAlign: "center" }}>
                <img src="/img/img_01_02_new2_a_n1.png" alt="Core Competencies" style={{ maxWidth: "100%", height: "auto" }} />
              </div>

              <ul className="dk-steps">
                {STEPS.map(s => (
                  <li key={s.n}>
                    <p className="no">STEP<b>{s.n}</b></p>
                    <p className="text">{s.text}</p>
                  </li>
                ))}
              </ul>

              <ul className="dk-list">
                {LIST_ITEMS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
