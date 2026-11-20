"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

export default function HealthcarePage() {
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
        <AboutHero active="healthcare" />

        <div className="dk-sub">

          {/* Two side-by-side sections */}
          <div className="dk-center" style={{ marginBottom: 0 }}>

            {/* Section 1: Mission text (left) + image (right) */}
            <div className="dk-hc-sec">
              <div className="text-right">
                <div className="dk-sub-t" style={{ paddingTop: 5 }}>DK Consultants Healthcare&apos;s Mission​</div>
                To create a digitalized and knowledge-based healthcare environment and bring all the resources to provide a patient first atmosphere for wholistic care which shall result in restoration of harmony and well-being.​
              </div>
              <div
                className="img"
                style={{ backgroundImage: "url('/img/bg_01_03_new2_a1.jpg')" }}
              />
            </div>

            {/* Section 2: image (left) + text (right) */}
            <div className="dk-hc-sec">
              <div
                className="img"
                style={{ backgroundImage: "url('/img/bg_01_03_new2_a2.jpg')" }}
              />
              <div className="text-left">
                DK Consultants is rapidly growing its market recognition in Korea based on the in-house expertise from the management who has extensive and long-term successful experiences in project development, advisory/services covering all kinds of development capabilities of marketing, technical support and financial capabilities in infrastructure and healthcare globally, since founded in 2018.​<br /><br />

                We have identified strengths of Korean healthcare industry and launched a healthcare business. We are specialized in medical planning which expands from feasibility study, medical operating plan, medical equipment planning and training thereof.​
              </div>
            </div>

          </div>

          {/* Objective section */}
          <div className="dk-bg-a">
            <div className="dk-center">
              <div className="dk-sub-t"> Objective of DK Consultants Healthcare​</div>
              DK Consultants Healthcare is aiming to support in the development of healthcare facilities worldwide encompassing facility establishment and O&amp;M planning, medical equipment and Hospital Information System procurement, and medical &amp; operational staff training.​<br /><br /><br />
              <div style={{ textAlign: "center" }}>
                <img src="/img/img_01_03_new2_a_n3.png" alt="Healthcare Objective" style={{ maxWidth: "100%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="dk-center">
            <div className="dk-sub-t"> Key Capabilities in Healthcare ​​</div>
            <ul className="dk-list" style={{ paddingTop: 0, paddingBottom: 80 }}>
              <li>​DK Consultants Healthcare has the required skill set and can undertake the below objectives through in-house capacity​</li>
              <li>​Specialists from key professions have joined DK Consultants Healthcare and can develop the business models, and project opportunities from their previous experiences</li>
            </ul>
            <div style={{ textAlign: "center" }}>
              <img src="/img/img_01_03_new2_b1.png" alt="Healthcare Capabilities" style={{ maxWidth: "100%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            </div>
          </div>

          {/* Healthcare advisory services (moved from the Services page) */}
          <div className="dk-bg-a">
            <div className="dk-center">
              <div className="dk-sub-t">Healthcare Advisory Services</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
                {[
                  { t: "Medical Planning", i: ["Market Study", "Hospital Plan", "Medical Staff Plan"] },
                  { t: "Medical Equipment", i: ["Current Condition Review", "Loading and Installation Plan", "Monitoring and Evaluation", "Management and Training Plan"] },
                  { t: "Operation & Management", i: ["Hospital Management Plan", "Manpower Supply Plan", "Maintenance Plan"] },
                  { t: "Hospital Information System", i: ["Analysis of Current HIS", "HIS Development and Customization", "Monitoring and Evaluation"] },
                  { t: "Education & Training", i: ["Training Program Development", "Program Arrangement"] },
                ].map(c => (
                  <div key={c.t} style={{ background: "#fff", border: "1px solid #e5e5e5", padding: "20px 18px", boxShadow: "0 5px 5px rgba(0,0,0,.06)" }}>
                    <p style={{ color: "#416ab3", fontWeight: 700, fontSize: 16, lineHeight: "22px", marginBottom: 10 }}>{c.t}</p>
                    {c.i.map(x => <p key={x} style={{ fontSize: 14, lineHeight: "23px", color: "#555" }}>· {x}</p>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
