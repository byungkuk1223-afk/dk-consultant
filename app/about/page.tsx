"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

const SECTORS = [
  { label: "Power Generation", img: "/img/img_gall_01_01_new2_a.jpg" },
  { label: "Renewables & Storage", img: "/img/img_gall_01_01_new2_b.jpg" },
  { label: "Carbon Capture, Hydrogen & Ammonia", img: "/img/img_gall_01_01_new2_c.jpg" },
  { label: "District Heating and Cooling", img: "/img/img_gall_01_01_new2_d.jpg" },
  { label: "Water", img: "/img/img_gall_01_01_new2_e.jpg" },
  { label: "Oil & Gas", img: "/img/img_gall_01_01_new2_f.jpg" },
  { label: "Education", img: "/img/img_gall_01_01_new2_g.jpg" },
  { label: "Industrial Mining", img: "/img/img_gall_01_01_new2_h.jpg" },
  { label: "Transportation", img: "/img/img_gall_01_01_new2_i.jpg" },
  { label: "Healthcare", img: "/img/img_gall_01_01_new2_j.jpg" },
];

const HISTORY: { year: string; items: string[]; side: "left" | "right" }[] = [
  { year: "2016", side: "left",  items: ["Establishment of DK Consultants", "Appointment of David H. Kim as CEO", "Commencement of Business at Yeoksam-dong", "Partnership Agreement with Synergy Consulting"] },
  { year: "2017", side: "right", items: ["Entrance to Feasibility Studies Market for Infrastructure Projects", "Relocation of Office to Bangbae-dong"] },
  { year: "2018", side: "left",  items: ["Expansion of Business to Healthcare Consulting Market"] },
  { year: "2019", side: "right", items: ["Incorporation of Representative Office in Indonesia (Synergy Korea)", "Diversification of Business into Two Units:  PPP (Public Private Partnership) and Healthcare", "Appointment of Sang Choi as the CEO of PPP Unit"] },
  { year: "2020", side: "left",  items: ["Financing Closure of Ireland BESS Project, Our First FA project (Synergy Korea)", "Executed Feasibility Study for Wanasari Port in Indonesia"] },
  { year: "2021", side: "right", items: ["Secured Engagements from Indonesian Sponsors for Nickel Smelter projects", "Executed a School PPP Feasibility Study in Qatar", "Appointment of Jongsang Lee as the CEO of PPP Unit"] },
  { year: "2022", side: "left",  items: ["Relocation of Office to Pangyo", "Phou Ngoy Mekong Hydro Power Plant in Laos", "Duqm Green Ammonia Project in Oman"] },
  { year: "2023", side: "right", items: ["Dumai Refinery Project(RDMP RUII) in Indonesia", "Newcastle Green Ammonia Project in Australia", "BC Green Ammonia Project in Canada"] },
  { year: "2024", side: "left",  items: ["Queensland Green Methanol Project in Australia", "Green hydrogen & Ammonia Project in Dubai", "Green hydrogen & Ammonia Project in Western Australia", "Establishment of Representative Office & K-PHARMA LLC in Uzbekistan"] },
  { year: "2025", side: "right", items: ["Alberta blue ammonia and carbon capture feasibility study led by DKC", "Texas solar PV and battery storage feasibility study, USA"] },
  { year: "2026", side: "left", items: ["Engineering management and owner-side review added to the service line", "Senior power plant and process engineers from KEPCO E&C and POSCO E&C join the Power Plant & Environment practice"] },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ minHeight: "100vh", background: "#fff", minWidth: 1200 }}>
        <AboutHero active="about" />

        <div className="dk-sub">

          {/* About text */}
          <div className="dk-center">
            <div className="dk-sub-t">About DK Consultants</div>
            DK Consultants (DKC) is a Korean project development advisor, founded in 2016, whose Power Plant &amp; Environment practice combines plant engineering, commercial structuring, and project finance in one team, working on the owner&apos;s side. DKC helps government and private clients take power and environmental projects from feasibility to investment decision, financial close, and execution.<br /><br />
            Large power projects reach financial close only when the technical scope, the project agreements, and the financing plan agree. DKC holds the technical, commercial, and financial workstreams in one team, with one baseline, one issue register, and one decision schedule. With a team of senior power plant and process engineers, DKC offers engineering management and owner-side review alongside feasibility, contract, and financing work.<br /><br />
            We work as an integral arm of our clients in developing business opportunities at both strategy and implementation levels. We work with partners from diverse cultural backgrounds, each of whom holds industry-leading capabilities and well-recognized expertise across the globe. We promise to add value to our clients by creating the dynamic synergy between DK Consultants&apos; insight and our partner&apos;s substantial influences over their respective fields.<br /><br />
            Each of our business unit may be compact, and as such we are comprehensive and ever-responsive to our clients&apos; needs. Also, each of our team is extremely knowledgeable and capable, based on years of hands-on experiences in developing and financing large infrastructure projects.<br /><br />
            Moreover, we encourage collaboration, cultivate innovation, act with integrity and foster a sense of care. We always place these values at the heart of the projects we serve. We will continue to maintain the trust that our clients, communities and our people place in DK Consultants; we believe that an ethical mentality, combined with technical expertise, will ultimately drive any projects to excellency.
          </div>

          {/* Decorative parallax separator */}
          <div style={{ width: "100%", height: 300, backgroundImage: "url('/img/bg_01_01_a_new2.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }} />

          {/* Corporate Structure Services */}
          <div className="dk-bg-a">
            <div className="dk-center">
              <div className="dk-sub-t">Corporate Structure</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ background: "#0b2545", color: "#fff", padding: "18px 40px", fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 22 }}>DK Consultants</div>
                <div style={{ width: 1, height: 30, background: "#9aa9bd" }} />
                <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 30, width: "100%" }}>
                  <div style={{ border: "1px solid #c8d5eb", background: "#fff", padding: 24 }}>
                    <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 20, color: "#0b2545", marginBottom: 6 }}>Power Plant &amp; Environment Practice</p>
                    <p style={{ fontSize: 15, color: "#777", lineHeight: "24px", marginBottom: 18 }}>Owner-side integrated advisory toward the investment decision, financial close, and execution readiness</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                      {[
                        { t: "Technical & Engineering Management", i: ["Feasibility integration", "Engineering coordination", "Technology and equipment evaluation", "EPC procurement support", "Scope, interface, and cost control"] },
                        { t: "Commercial & Contract Advisory", i: ["Project structuring and risk allocation", "PPA / offtake strategy", "EPC and major supply agreements", "O&M arrangements", "Alignment of project agreements"] },
                        { t: "Financial Advisory & Capital Raising", i: ["Financial modeling", "Financing strategy", "Equity and debt sourcing", "ECA / IFI engagement", "Due diligence and close support"] },
                      ].map(c => (
                        <div key={c.t} style={{ background: "#f4f7fb", borderTop: "3px solid #416ab3", padding: "16px 16px 10px" }}>
                          <p style={{ color: "#416ab3", fontWeight: 700, fontSize: 15, lineHeight: "21px", marginBottom: 10 }}>{c.t}</p>
                          {c.i.map(x => <p key={x} style={{ fontSize: 14, lineHeight: "22px", color: "#444" }}>· {x}</p>)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ border: "1px solid #e5e5e5", background: "#fff", padding: 24 }}>
                    <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 20, color: "#0b2545", marginBottom: 6 }}>Healthcare Unit</p>
                    <p style={{ fontSize: 15, color: "#777", lineHeight: "24px" }}>A separate business unit, formed in 2019, for hospital and pharmaceutical projects.</p>
                    <p style={{ marginTop: 12 }}><a href="/healthcare" style={{ color: "#416ab3", fontWeight: 700, fontSize: 14 }}>Healthcare Unit &rarr;</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview gallery + Company sections */}
          <div className="dk-center">
            <div className="dk-sub-t">Overview</div>
            <ul className="dk-gall">
              {SECTORS.map(s => (
                <li key={s.label}>
                  <div className="gi" style={{ backgroundImage: `url('${s.img}')` }} />
                  <div className="gt"><p>{s.label}</p></div>
                </li>
              ))}
            </ul>

            <div className="dk-sec dk-bb">
              <div className="t">Company Overview</div>
              <div className="c">
                <ul className="list">
                  <li>Founded in 2016 and based in Seongnam, Korea, DK Consultants advises on power and environmental projects across Asia, the Middle East, Africa, Europe, and the Americas.</li>
                  <li>Clients include KIND, KEXIM, KEITI, KOGAS, KEPCO E&amp;C, Samsung E&amp;A, and Dohwa Engineering.</li>
                  <li>Services cover engineering management and owner-side technical review, commercial and contract advisory, financial advisory and capital raising, and feasibility studies.</li>
                  <li>DK Consultants is rapidly growing its market recognition in Korea based on the in-house expertise from the management who has extensive and long-term successful experience in project development, advisory/services covering all kinds of development capabilities of marketing, technical support and financial capabilities in infrastructure and healthcare globally.</li>
                </ul>
              </div>
            </div>

            <div className="dk-sec dk-bb">
              <div className="t">Our Vision</div>
              <div className="c">
                <ul className="list">
                  <li>Bringing engineering, commercial judgment, and financing together to turn promising projects into viable investments.</li>
                </ul>
              </div>
            </div>

            <div className="dk-sec">
              <div className="t">Key Takeaways</div>
              <div className="c">
                <ul className="list">
                  <li>Leadership with backgrounds in IPP development, EPC delivery, and project company management</li>
                  <li>Discipline leads from KEPCO E&amp;C and POSCO E&amp;C with design, construction, and commissioning experience on large coal-fired units</li>
                  <li>Synergy Consulting partnership since 2016, with joint mandates as Synergy Korea</li>
                </ul>
              </div>
            </div>
          </div>

          {/* History */}
          <div style={{ width: "100%", overflow: "hidden", backgroundImage: "url('/img/bg_01_01_history_n.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            <div style={{ width: "100%", overflow: "hidden", backgroundColor: "rgba(251,251,251,.9)" }}>
              <div className="dk-center">
                <div className="dk-sub-t-c">History</div>
                <div className="dk-hist-wrap">
                  {HISTORY.map(({ year, items, side }) => (
                    <div key={year} className={`dk-hist-entry ${side}`}>
                      <div className="blank">&nbsp;</div>
                      <div className="con">
                        <h4>{year}</h4>
                        <ul>
                          {items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
