"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

const SECTORS = [
  { label: "Power Generation​", img: "/img/img_gall_01_01_new2_a.jpg" },
  { label: "Renewables​", img: "/img/img_gall_01_01_new2_b.jpg" },
  { label: "Green Hydrogen &​ Ammonia", img: "/img/img_gall_01_01_new2_c.jpg" },
  { label: "District Heating and Cooling", img: "/img/img_gall_01_01_new2_d.jpg" },
  { label: "Water", img: "/img/img_gall_01_01_new2_e.jpg" },
  { label: "Oil & Gas​", img: "/img/img_gall_01_01_new2_f.jpg" },
  { label: "Education​​", img: "/img/img_gall_01_01_new2_g.jpg" },
  { label: "Industrial Mining", img: "/img/img_gall_01_01_new2_h.jpg" },
  { label: "Transportation", img: "/img/img_gall_01_01_new2_i.jpg" },
  { label: "Healthcare​", img: "/img/img_gall_01_01_new2_j.jpg" },
];

const HISTORY: { year: string; items: string[]; side: "left" | "right" }[] = [
  { year: "2016", side: "left",  items: ["Establishment of DK Consultants​​", "Appointment of David H. Kim as CEO​​", "Commencement of Business at Yeoksam-dong​", "Partnership Agreement with Synergy Consulting​"] },
  { year: "2017​", side: "right", items: ["Entrance to Feasibility Studies Market for Infrastructure Projects​", "Relocation of Office to Bangbae-dong​"] },
  { year: "2018", side: "left",  items: ["Expansion of Business to Healthcare Consulting Market​​"] },
  { year: "2019", side: "right", items: ["​Incorporation of Representative Office in Indonesia (Synergy Korea)​", "​Diversification of Business into Two Units: ​ PPP (Public Private Partnership) and Healthcare", "Appointment of Sang Choi as the CEO of PPP Unit​​"] },
  { year: "2020", side: "left",  items: ["Financing Closure of Ireland BESS Project, Our First FA project ​​(Synergy Korea)​", "Executed Feasibility Study for Wanasari Port in Indonesia"] },
  { year: "2021", side: "right", items: ["​Secured Engagements from Indonesian Sponsors for Nickel Smelter projects​", "Executed a School PPP Feasibility Study in Qatar​​", "Appointment of Jongsang Lee as the CEO of PPP Unit​"] },
  { year: "2022", side: "left",  items: ["Relocation of Office to Pangyo", "Phou Ngoy Mekong Hydro Power Plant in Laos", "Duqm Green Ammonia Project in Oman"] },
  { year: "2023", side: "right", items: ["Dumai Refinery Project(RDMP RUII) in Indonesia", "Newcastle Green Ammonia Project in Australia", "BC Green Ammonia Project in Canada"] },
  { year: "2024", side: "left",  items: ["Queensland Green Methanol Project in Australia", "Green hydrogen & Ammonia Project in Dubai", "Green hydrogen & Ammonia Project in Western Australia", "Establishment of Representative Office & K-PHARMA LLC in Uzbekistan"] },
];

export default function AboutPage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff", minWidth: 1200 }}>
        <AboutHero active="about" />

        <div className="dk-sub">

          {/* About text */}
          <div className="dk-center">
            <div className="dk-sub-t">About DK Consultants</div>
            We come to the market to bring creative, realistic and cost-efficient solutions for large infrastructure projects, specifically in PPP(Public-Private Partnership) and Healthcare areas.​​<br /><br />
            We work as an integral arm of our clients in developing business opportunities at both strategy and implementation levels. We work with partners from diverse cultural backgrounds, each of whom holds industry-leading capabilities and well-recognized expertise across the globe. We promise to add value to our clients by creating the dynamic synergy between DK Consultants&apos; insight and our partner&apos;s substantial influences over their respective fields.​<br /><br />
            Each of our business unit may be compact, and as such we are comprehensive and ever-responsive to our clients&apos; needs. Also, each of our team is extremely knowledgeable and capable, based on years of hands-on experiences in developing and financing large infrastructure projects.​<br /><br />
            ​Moreover, we encourage collaboration, cultivate innovation, act with integrity and foster a sense of care. We always place these values at the heart of the projects we serve. We will continue to maintain the trust that our clients, communities and our people place in DK Consultants; we believe that an ethical mentality, combined with technical expertise, will ultimately drive any projects to excellency.​
          </div>

          {/* Decorative parallax separator */}
          <div style={{ width: "100%", height: 300, backgroundImage: "url('/img/bg_01_01_a_new2.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }} />

          {/* Corporate Structure Services */}
          <div className="dk-bg-a">
            <div className="dk-center">
              <div className="dk-sub-t">Corporate Structure Services​</div>
              <div style={{ textAlign: "center" }}>
                <img src="/img/img_01_01_a_new2_n2.png" alt="Corporate Structure" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
          </div>

          {/* Overview gallery + Company sections */}
          <div className="dk-center">
            <div className="dk-sub-t">Overview​</div>
            <ul className="dk-gall">
              {SECTORS.map(s => (
                <li key={s.label}>
                  <div className="gi" style={{ backgroundImage: `url('${s.img}')` }} />
                  <div className="gt"><p>{s.label}</p></div>
                </li>
              ))}
            </ul>

            <div className="dk-sec dk-bb">
              <div className="t">Company Overview​</div>
              <div className="c">
                <ul className="list">
                  <li>Founded in 2016, DK Consultants serves as a local leader in financial advisory, feasibility study and training services for infrastructure procurement.​</li>
                  <li>Our successful experiences testify for our capabilities in leading, structuring and closing large and complex transactions across multiple sectors from clients in both private and public sectors.</li>
                  <li>DK Consultants is rapidly growing its market recognition in Korea based on the in-house expertise from the management who has extensive and long-term successful experience in project development, advisory/services covering all kinds of development capabilities of marketing, technical support and financial capabilities in infrastructure and healthcare globally.​</li>
                </ul>
              </div>
            </div>

            <div className="dk-sec dk-bb">
              <div className="t">Our Vision​​</div>
              <div className="c">
                <ul className="list">
                  <li>Fueling the needs of Korean firms in developing and financing infrastructure projects worldwide.​</li>
                </ul>
              </div>
            </div>

            <div className="dk-sec">
              <div className="t">Key Takeaways​</div>
              <div className="c">
                <ul className="list">
                  <li>Leadership with 30+ years of experience​​</li>
                  <li>Clients including government agencies and large construction companies across the globe​</li>
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
