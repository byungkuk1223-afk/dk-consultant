"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { IMG } from "@/data/images";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };

const ROLES = [
  {
    t: "Process and CCS engineers",
    d: "Review capture technology, host-plant integration, CO₂ compression and conditioning, and heat and mass balances; check licensor and contractor deliverables against the owner's requirements.",
    q: "Chemical or process engineering; experience in gas processing, carbon capture, or chemical plant design or commissioning.",
  },
  {
    t: "Power plant discipline engineers",
    d: "Mechanical, electrical, instrumentation and controls, and civil engineers who review design, follow construction, and witness commissioning and performance tests on the owner's side.",
    q: "Design, EPC, or commissioning experience on thermal or combined cycle power plants.",
  },
  {
    t: "Project controls and cost",
    d: "Cost estimates from feasibility to EPC award, schedule control, change management, and progress reporting to owners and lenders.",
    q: "Cost estimating or planning on power, process, or infrastructure projects.",
  },
  {
    t: "Commercial and financial advisory",
    d: "Financial models, feasibility studies, contract and risk allocation reviews, and lender materials, in Korean and English.",
    q: "Project finance, transaction advisory, or development experience; MBA, CPA, or CFA welcome.",
  },
];

export default function CareerPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <PageHero title="Careers" subtitle="Engineers and advisors who want to see power and carbon capture projects through, on the owner's side." bg={IMG.careers} />

        <section>
          <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: 56 }}>
            <div>
              <p style={EYEBROW}>WORKING AT DKC</p>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(24px, 2.6vw, 30px)", lineHeight: 1.3, fontWeight: 400, color: NAVY }}>
                Engineering, contracts, and finance in one team
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: F, fontSize: 16, lineHeight: "28px", color: "#3d4752", marginBottom: 14 }}>
                At DKC, engineers work beside contract and finance specialists on the same projects. A design decision is tested for its
                effect on cost, the contracts, and the financing before it is made, and the people who make it see the project through
                procurement, construction, and commissioning.
              </p>
              <p style={{ fontFamily: F, fontSize: 16, lineHeight: "28px", color: "#3d4752" }}>
                Our senior engineers have built and commissioned power plants and a commercial CO₂ capture plant. Experienced engineers
                joining us work with them directly, on projects in North America, Asia, the Middle East, and Australia.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#f6f8fb" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 64px" }}>
            <p style={EYEBROW}>WHO WE ARE LOOKING FOR</p>
            <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 18 }}>
              {ROLES.map((r) => (
                <div key={r.t} style={{ background: "#fff", border: "1px solid #e3e8ef", borderTop: `3px solid ${NAVY}`, padding: "22px 24px" }}>
                  <p style={{ fontFamily: SERIF, fontSize: 19, color: NAVY, marginBottom: 10 }}>{r.t}</p>
                  <p style={{ fontFamily: F, fontSize: 14.5, lineHeight: "23px", color: "#3d4752", marginBottom: 12 }}>{r.d}</p>
                  <p style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, fontWeight: 700, color: "#8a94a0", marginBottom: 4 }}>BACKGROUND</p>
                  <p style={{ fontFamily: F, fontSize: 14, lineHeight: "22px", color: "#55606d" }}>{r.q}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: F, fontSize: 14.5, color: "#55606d", marginTop: 18, lineHeight: "23px" }}>
              All roles require professional English and Korean; site visits and international travel are part of the work.
            </p>
          </div>
        </section>

        <section>
          <div className="rstack" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div>
              <p style={EYEBROW}>APPLY</p>
              <p style={{ fontFamily: SERIF, fontSize: 21, color: NAVY, lineHeight: "30px" }}>Send your CV and a short note on the projects you have worked on.</p>
            </div>
            <div style={{ fontFamily: F, fontSize: 15, lineHeight: "26px", color: "#3d4752" }}>
              <p><b>Ms. Eun Young Choi</b>, Managing Director</p>
              <p><a href="mailto:ey.choi@dk-consultant.com" style={{ color: "#416ab3", fontWeight: 700 }}>ey.choi@dk-consultant.com</a> · +82 31 603 4845</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
