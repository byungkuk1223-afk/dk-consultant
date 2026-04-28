"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TAB_LINKS = [
  { label: "About DK Consultants​", href: "/about", active: true },
  { label: "PPP Unit", href: "/ppp", active: false },
  { label: "Healthcare Unit", href: "/healthcare", active: false },
  { label: "Our People", href: "/people", active: false },
];

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
      <style>{`
        /* Sub tab */
        #about-sub-tab li { cursor:pointer; float:left; width:25%; height:90px; line-height:90px; padding:0 30px; font-size:18px; font-family:'Raleway',sans-serif; box-sizing:border-box; background:url('/img/sub_tab_arrow_on.png') right 30px top 40px no-repeat; color:#333; }
        #about-sub-tab li:hover { background:#416ab3 url('/img/sub_tab_arrow.png') right 30px top 40px no-repeat; color:#fff; }
        #about-sub-tab li.on { background:#416ab3 url('/img/sub_tab_arrow.png') right 30px top 40px no-repeat; color:#fff; }

        /* Sub content */
        #about-sub .center-area { width:1200px; margin:80px auto; padding-top:50px; font-family:'Lato',sans-serif; font-size:17px; font-weight:500; line-height:30px; color:#777; }
        .about-sub-t { color:#000; font-size:40px; line-height:55px; font-family:'Libre Baskerville',Georgia,serif; margin-bottom:45px; padding-bottom:20px; font-weight:normal; background:url('/img/title_bg_n.jpg') left bottom no-repeat; }
        .about-sub-t-c { text-align:center; color:#000; font-size:40px; font-family:'Libre Baskerville',Georgia,serif; height:70px; margin-bottom:50px; font-weight:normal; background:url('/img/title_bg_n.jpg') center bottom no-repeat; }

        /* Sector gallery */
        .about-gall { width:100%; overflow:hidden; margin-bottom:50px; padding:0; list-style:none; }
        .about-gall li { float:left; width:18.4%; height:220px; margin-right:2%; margin-bottom:2%; border:1px solid #ddd; border-radius:10px; background-color:#fff; box-shadow:0 5px 5px rgba(0,0,0,.1); }
        .about-gall li:nth-child(5n) { margin-right:0; }
        .about-gall .gall-img { width:100%; height:120px; background-color:#fafafa; border-top-left-radius:10px; border-top-right-radius:10px; background-size:cover; background-position:center; }
        .about-gall .gall-text { width:100%; height:100px; text-align:center; display:table; }
        .about-gall .gall-text p { display:table-cell; vertical-align:middle; text-align:center; color:#111; padding:0 20px; line-height:25px; font-size:17px; font-weight:500; }

        /* Overview sections */
        .about-sec { width:100%; overflow:hidden; }
        .about-sec .t { float:left; width:250px; margin-right:50px; color:#416ab3; font-size:30px; line-height:40px; font-weight:900; font-family:'Libre Baskerville',Georgia,serif; }
        .about-sec .c { float:left; width:calc(100% - 300px); }
        .about-sec .list { list-style:none; padding:0; margin:0; }
        .about-sec .list li { width:100%; overflow:hidden; background:url('/img/title_bg_n.jpg') left top 11px no-repeat; background-size:5px 5px; padding-bottom:15px; line-height:27px; padding-left:18px; }
        .about-b-bottom { width:100%; overflow:hidden; border-bottom:1px dotted #ddd; padding-bottom:50px; margin-bottom:50px; }

        /* History */
        .about-history-wrap { width:100%; overflow:hidden; background:url('/img/bg_line_history_new3.png') center repeat; }
        .about-hist-entry { width:100%; overflow:hidden; }
        .about-hist-entry .blank { width:calc(50% - 9px); }
        .about-hist-entry .con { width:calc(50% + 9px); padding-bottom:50px; }
        .about-hist-entry.left .blank { float:left; }
        .about-hist-entry.left .con { float:left; background:url('/img/dot_history_new2.png') left top no-repeat; padding-left:50px; box-sizing:border-box; }
        .about-hist-entry.left .con h4 { float:left; color:#416ab3; width:100px; font-family:'Libre Baskerville',Georgia,serif; font-size:25px; }
        .about-hist-entry.left .con ul { float:left; width:calc(100% - 100px); list-style:none; padding:0; margin:0; }
        .about-hist-entry.left .con li { width:100%; overflow:hidden; background:url('/img/title_bg_n.jpg') left top 11px no-repeat; background-size:5px 5px; padding-bottom:15px; line-height:27px; padding-left:18px; color:#333; }
        .about-hist-entry.right .blank { float:right; }
        .about-hist-entry.right .con { float:right; background:url('/img/dot_history_new2.png') right top no-repeat; padding-right:50px; box-sizing:border-box; }
        .about-hist-entry.right .con h4 { float:right; color:#416ab3; width:100px; font-family:'Libre Baskerville',Georgia,serif; font-size:25px; text-align:right; }
        .about-hist-entry.right .con ul { float:right; width:calc(100% - 100px); list-style:none; padding:0; margin:0; }
        .about-hist-entry.right .con li { width:100%; overflow:hidden; background:url('/img/title_bg_n.jpg') right top 11px no-repeat; background-size:5px 5px; padding-bottom:15px; line-height:27px; padding-right:18px; color:#333; text-align:right; }
      `}</style>

      <Header scrolled={true} />

      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff", minWidth: 1200 }}>

        {/* Hero + Tab wrapper */}
        <div style={{ position: "relative" }}>

          {/* Hero banner */}
          <div
            id="sf-new"
            style={{
              width: "100%",
              minWidth: 1200,
              height: 600,
              color: "#fff",
              backgroundImage: "url('/img/sf_01_bg_n.jpg')",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div style={{ width: 1200, margin: "0 auto", fontFamily: "'Lato', sans-serif", fontSize: 18 }}>
              <h2 style={{ fontSize: 55, fontWeight: "normal", fontFamily: "'Libre Baskerville', Georgia, serif", paddingTop: 220 }}>
                About Us
              </h2>
              Professional knowledge meets social needs
            </div>
          </div>

          {/* Sub tab navigation */}
          <div
            id="about-sub-tab"
            style={{
              width: "100%",
              height: 90,
              position: "absolute",
              left: 0,
              top: 550,
              zIndex: 10,
            }}
          >
            <div style={{ width: 1200, height: 90, backgroundColor: "#fff", margin: "0 auto", boxShadow: "5px 5px 5px rgba(0,0,0,.1)", borderRadius: 3, overflow: "hidden" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, overflow: "hidden" }}>
                {TAB_LINKS.map(tab => (
                  <li
                    key={tab.label}
                    className={tab.active ? "on" : ""}
                    onClick={() => { window.location.href = tab.href; }}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div
          id="about-sub"
          style={{ width: "100%", overflow: "hidden", fontFamily: "'Lato', sans-serif", fontSize: 17, fontWeight: 500, lineHeight: "30px", color: "#777" }}
        >

          {/* About text */}
          <div className="center-area">
            <div className="about-sub-t">About DK Consultants</div>
            We come to the market to bring creative, realistic and cost-efficient solutions for large infrastructure projects, specifically in PPP(Public-Private Partnership) and Healthcare areas.​​<br /><br />

            We work as an integral arm of our clients in developing business opportunities at both strategy and implementation levels. We work with partners from diverse cultural backgrounds, each of whom holds industry-leading capabilities and well-recognized expertise across the globe. We promise to add value to our clients by creating the dynamic synergy between DK Consultants&apos; insight and our partner&apos;s substantial influences over their respective fields.​<br /><br />

            Each of our business unit may be compact, and as such we are comprehensive and ever-responsive to our clients&apos; needs. Also, each of our team is extremely knowledgeable and capable, based on years of hands-on experiences in developing and financing large infrastructure projects.​<br /><br />

            ​Moreover, we encourage collaboration, cultivate innovation, act with integrity and foster a sense of care. We always place these values at the heart of the projects we serve. We will continue to maintain the trust that our clients, communities and our people place in DK Consultants; we believe that an ethical mentality, combined with technical expertise, will ultimately drive any projects to excellency.​
          </div>

          {/* Decorative parallax separator */}
          <div
            style={{
              width: "100%",
              height: 300,
              backgroundImage: "url('/img/bg_01_01_a_new2.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          />

          {/* Corporate Structure Services */}
          <div style={{ width: "100%", backgroundColor: "#fafafa", overflow: "hidden" }}>
            <div className="center-area">
              <div className="about-sub-t">Corporate Structure Services​</div>
              <div style={{ textAlign: "center" }}>
                <img src="/img/img_01_01_a_new2_n2.png" alt="Corporate Structure" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
          </div>

          {/* Overview + Company sections */}
          <div className="center-area">

            <div className="about-sub-t">Overview​</div>
            <ul className="about-gall">
              {SECTORS.map((sector) => (
                <li key={sector.label}>
                  <div
                    className="gall-img"
                    style={{ backgroundImage: `url('${sector.img}')` }}
                  />
                  <div className="gall-text">
                    <p>{sector.label}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Company Overview */}
            <div className="about-sec about-b-bottom">
              <div className="t">Company Overview​</div>
              <div className="c">
                <ul className="list">
                  <li>Founded in 2016, DK Consultants serves as a local leader in financial advisory, feasibility study and training services for infrastructure procurement.​</li>
                  <li>Our successful experiences testify for our capabilities in leading, structuring and closing large and complex transactions across multiple sectors from clients in both private and public sectors.</li>
                  <li>DK Consultants is rapidly growing its market recognition in Korea based on the in-house expertise from the management who has extensive and long-term successful experience in project development, advisory/services covering all kinds of development capabilities of marketing, technical support and financial capabilities in infrastructure and healthcare globally.​</li>
                </ul>
              </div>
            </div>

            {/* Our Vision */}
            <div className="about-sec about-b-bottom">
              <div className="t">Our Vision​​</div>
              <div className="c">
                <ul className="list">
                  <li>Fueling the needs of Korean firms in developing and financing infrastructure projects worldwide.​</li>
                </ul>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="about-sec">
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
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              backgroundImage: "url('/img/bg_01_01_history_n.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div style={{ width: "100%", overflow: "hidden", backgroundColor: "rgba(251,251,251,.9)" }}>
              <div className="center-area">
                <div className="about-sub-t-c">History</div>
                <div className="about-history-wrap">

                  {HISTORY.map(({ year, items, side }) => (
                    <div key={year} className={`about-hist-entry ${side}`}>
                      <div className="blank">&nbsp;</div>
                      <div className="con">
                        <h4 className="year">{year}</h4>
                        <ul>
                          {items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
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
