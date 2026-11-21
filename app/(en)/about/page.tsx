"use client";
// Who We Are. Written for a reader who must judge whether DKC can manage the engineering of a power and
// carbon capture plant on the owner's side: facts first, sources on other pages (People, Team Experience, Projects).
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import GlobalFootprint from "@/components/GlobalFootprint";
import { projects } from "@/data/projects";
import { TEAM_PROJECTS } from "@/data/teamProjects";
import { useI18n } from "@/lib/i18n";

const F = "'Lato', 'Noto Sans KR', sans-serif";
const SERIF = "'Libre Baskerville', 'Noto Serif KR', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const WRAP: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" };
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };
const H2: React.CSSProperties = { fontSize: "clamp(24px, 2.6vw, 30px)", lineHeight: 1.3, fontFamily: SERIF, fontWeight: 400, color: NAVY, marginBottom: 20 };
const BODY: React.CSSProperties = { fontSize: 16, lineHeight: "28px", color: "#3d4752", fontFamily: F, marginBottom: 14 };

const MILESTONES: { y: string; t: string }[] = [
  { y: "2016", t: "DK Consultants founded in Korea by David Kim; partnership with Synergy Consulting, an international project finance advisor." },
  { y: "2017–2019", t: "Feasibility and financial advisory work for Korean public financiers, utilities, and EPC contractors begins." },
  { y: "2020–2021", t: "Gas-to-power and LNG-to-power feasibility studies for KEXIM, KIND, and KOGAS in Vietnam, Cameroon, the Philippines, and the Dominican Republic." },
  { y: "2021–2024", t: "Green hydrogen and ammonia feasibility studies in Oman, the UAE, Australia, and Canada; refinery upgrade study at Dumai, Indonesia; district heating modernization in Uzbekistan." },
  { y: "2025", t: "Lead consultant on KIND's feasibility study for blue ammonia with carbon capture in Alberta, Canada." },
  { y: "2026", t: "Power plant and process engineers from KEPCO E&C and POSCO E&C join to form the engineering management group; DKC completes a bankable feasibility study for a coal-fired power plant with carbon capture." },
];

export default function AboutPage() {
  const { lnk, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const feasibility = projects.filter((p) => /feasib|bankab/i.test(p.category)).length;

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <AboutHero active="about" />

        {/* About */}
        <section>
          <div className="rg" style={{ ...WRAP, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: 56 }}>
            <div>
              <p style={EYEBROW}>{tr("ABOUT DK CONSULTANTS")}</p>
              <h2 style={H2}>{tr("Owner-side engineering management and advisory for power and carbon capture projects.")}</h2>
            </div>
            <div>
              <p style={BODY}>
                {tr("DK Consultants (DKC) is a Korean firm that works for project owners. Our Power Plant & Environment practice manages the engineering of power and carbon capture projects on the owner's side, from the design basis through procurement, construction, and commissioning, and carries the same technical baseline into the project agreements and the financing.")}</p>
              <p style={BODY}>
                {tr("The engineering is led by power plant and process engineers who have designed, built, and commissioned plants of the kind our clients develop: ultra-supercritical and circulating fluidized bed coal-fired units, a commercial CO₂ capture and liquefaction plant, and large gas processing facilities.")}{" "}
                {tr("The commercial and financial team has delivered {n} feasibility studies since 2016, most of them for Korea's public financiers.", { n: feasibility })}
              </p>
            </div>
          </div>
        </section>

        {/* Engineering capability */}
        <section style={{ background: "#f6f8fb" }}>
          <div style={WRAP}>
            <p style={EYEBROW}>{tr("ENGINEERING CAPABILITY")}</p>
            <h2 style={H2}>{tr("People who have built and commissioned the plants they now review")}</h2>
            <p style={{ ...BODY, maxWidth: 900 }}>
              {tr("Managing the engineering of a carbon capture plant on the owner's side means checking a contractor's design, interfaces, construction, and commissioning against the owner's requirements. DKC's engineering group has done that work from the other side, as architect-engineers, EPC project directors, and commissioning leads.")}</p>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, margin: "26px 0 30px" }}>
              {[
                { v: "13", t: "Engineers and EPC managers, each with 26 to over 40 years in plant engineering and EPC delivery" },
                { v: String(TEAM_PROJECTS.length), t: "Plants and plant series delivered by team members before joining DKC, with public references" },
                { v: "300 t/d", t: "CO₂ capture and liquefaction plant delivered by a DKC technical lead as project director" },
                { v: "4 × 550 MWe", t: "Ultra-supercritical CFB boilers at Samcheok, where a DKC technical lead led the AE mechanical engineering team" },
              ].map((x) => (
                <div key={x.t} style={{ background: "#fff", borderTop: `3px solid ${NAVY}`, padding: "18px 20px" }}>
                  <p style={{ fontFamily: SERIF, fontSize: 28, color: NAVY, lineHeight: 1.15 }}>{tr(x.v)}</p>
                  <p style={{ fontFamily: F, fontSize: 14, lineHeight: "21px", color: "#55606d", marginTop: 8 }}>{tr(x.t)}</p>
                </div>
              ))}
            </div>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
              {[
                { t: "Disciplines covered in-house", d: "Boiler and CFBC, CCS process, electrical, instrumentation and controls, civil, environmental systems, OSBL integration, construction planning, project controls and cost." },
                { t: "How the work scales", d: "DKC's discipline leads set requirements and review deliverables. Detailed design is produced by the EPC contractor or by specialist design firms engaged for the project, under DKC's coordination." },
                { t: "Independent check", d: "An independent engineer appointed by the lenders reviews the project separately; DKC does not review its own work." },
              ].map((x) => (
                <div key={x.t} style={{ background: "#fff", border: "1px solid #e3e8ef", padding: "20px 22px" }}>
                  <p style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{tr(x.t)}</p>
                  <p style={{ fontFamily: F, fontSize: 14.5, lineHeight: "23px", color: "#55606d" }}>{tr(x.d)}</p>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: 22, marginBottom: 0 }}>
              <Link href={lnk("/team-experience")} style={{ color: "#416ab3", fontWeight: 700 }}>{tr("Plants our people delivered →")}</Link>{tr("   ")}<Link href={lnk("/people")} style={{ color: "#416ab3", fontWeight: 700 }}>{tr("Our people →")}</Link>{tr("   ")}<Link href={lnk("/services/engineering")} style={{ color: "#416ab3", fontWeight: 700 }}>{tr("Engineering management →")}</Link>
            </p>
          </div>
        </section>

        {/* Organization */}
        <section>
          <div style={WRAP}>
            <p style={EYEBROW}>{tr("ORGANIZATION")}</p>
            <h2 style={H2}>{tr("One project director, three workstreams")}</h2>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { t: "Technical & Engineering Management", i: ["Design basis and specifications", "Design firm and EPC deliverable review", "Interface and change control", "Construction monitoring and commissioning", "Cost estimate and schedule"] },
                { t: "Commercial & Contract Advisory", i: ["Contract strategy and risk allocation", "EPC and major supply agreements", "Offtake, fuel, and CO₂ transport and storage agreements", "O&M arrangements", "Alignment of the project agreements"] },
                { t: "Financial Advisory & Capital Raising", i: ["Bankable feasibility studies", "Financial model", "Financing strategy", "Lender and ECA engagement", "Due diligence and close"] },
              ].map((c) => (
                <div key={c.t} style={{ background: "#f6f8fb", borderTop: `3px solid ${TEAL}`, padding: "18px 20px" }}>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: 15.5, fontFamily: F, marginBottom: 10 }}>{tr(c.t)}</p>
                  {c.i.map((x) => <p key={x} style={{ fontSize: 14, lineHeight: "23px", color: "#444", fontFamily: F }}>· {tr(x)}</p>)}
                </div>
              ))}
            </div>
            <p style={{ fontFamily: F, fontSize: 13.5, color: "#6b7580", marginTop: 14, lineHeight: "21px" }}>
              {tr("DKC also has a separate Healthcare Unit for hospital and pharmaceutical projects.")}</p>
          </div>
        </section>

        {/* Milestones */}
        <section style={{ background: "#f6f8fb" }}>
          <div style={WRAP}>
            <p style={EYEBROW}>{tr("MILESTONES")}</p>
            <h2 style={H2}>{tr("From feasibility advisor to owner-side engineering manager")}</h2>
            {MILESTONES.map((m) => (
              <div key={m.y} className="rg" style={{ display: "grid", gridTemplateColumns: "160px minmax(0,1fr)", gap: 24, padding: "16px 0", borderTop: "1px solid #dde3ea" }}>
                <p style={{ fontFamily: SERIF, fontSize: 20, color: TEAL }}>{tr(m.y)}</p>
                <p style={{ ...BODY, marginBottom: 0 }}>{tr(m.t)}</p>
              </div>
            ))}
          </div>
        </section>

        <GlobalFootprint />
      </main>
      <Footer />
    </>
  );
}
