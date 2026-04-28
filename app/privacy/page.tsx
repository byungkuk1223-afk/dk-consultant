"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionTitle: React.CSSProperties = {
    fontFamily: "'Lato', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: "#222",
    margin: "0 0 10px 0",
  };

  const body: React.CSSProperties = {
    fontFamily: "'Lato', sans-serif",
    fontSize: 12,
    color: "#555",
    lineHeight: 1.85,
    margin: "0 0 10px 0",
  };

  return (
    <>
      <Header scrolled={scrolled} />
      <main>

        {/* Hero */}
        <section style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
            backgroundSize: "cover", backgroundPosition: "center 60%",
            filter: "brightness(0.38)",
          }} />
          <div style={{ position: "relative", zIndex: 1, paddingLeft: "38%", color: "#fff" }}>
            <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 44, fontWeight: 400, margin: "0 0 14px 0", letterSpacing: 0.5 }}>
              Privacy
            </h1>
            <p style={{ fontSize: 13, fontWeight: 300, margin: 0, fontFamily: "'Lato', sans-serif" }}>
              Details of our guided approach
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: "70px 10%", maxWidth: 1400, margin: "0 auto", boxSizing: "border-box" }}>
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 28, fontWeight: 400, color: "#111", margin: "0 0 14px 0" }}>
              Privacy Statement
            </h2>
            <div style={{ width: 36, height: 2, backgroundColor: "#3a5585", marginBottom: 36 }} />

            <p style={{ ...sectionTitle }}>Purpose of Personal Information Processing</p>
            <p style={body}>We, DK Consultants Co., Ltd. (www.dk-consultant.com; hereinafter referred to as the 'Company'), use our best efforts to protect your privacy and personal information. The Company processes personal information for the following purpose and does not use it for any other purposes; identifying and verifying clients in provision of services pertinent to clients' needs and interest.</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Personal Information Processing and Retention Period</p>
            <p style={body}>① The Company processes and retains personal information within the personal information retention period according to relevant laws or within the personal information retention period to which individuals consented when collecting their personal information.</p>
            <p style={body}>② The retention period of the personal information processed by the Company is 5 years.</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Provision of Personal Information to a Third Party</p>
            <p style={body}>The Company may provide the personal information to a third party only when it falls under the provisions specified in Article 17 and 18 of the Personal Information Act, such as when the subject of the information provides consent and where special rules exist in any relevant law.</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Outsourcing the Handling of Personal Information</p>
            <p style={body}>① The Company may outsource the handling of personal information for efficient provision of services.</p>
            <p style={body}>② When the Company provides personal data to a third party, the Company shall create and maintain a record of the provision in accordance with the provisions of Article 25 of the Act on the Protection of Personal Information. When concluding an outsourcing contract, the Company specifies in writing the matters concerning the technical and administrative protection measures, limitations on re-outsourcing, and liability for damages. Personal information is protected by all means and is under the strict supervision of the Company.</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Rights and Duties of a Subject Information</p>
            <p style={body}>A subject of any personally identifiable information managed by the Company is entitled to the following rights regarding the protection of his/her personal information:</p>
            <p style={body}>1) The right to request for the inspection of the personal information<br />
            2) The right to request for the correction of the personal information<br />
            3) The right to delete the personal information<br />
            4) The right to request for the suspension of the handling of the personal information</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Destruction of Personal Information</p>
            <p style={body}>When DK Consultants Co., Ltd. has no further need to retain any personal information, such as when it fulfills the purpose of keeping such data or the retention period has passed, the Company will destroy the personal information without delay. The procedures for and the timing of destroying personal information are as follows:</p>
            <p style={body}>- Procedures of Destruction<br />
            After or as soon as we achieve the purpose of having personal information, we will immediately destroy such information; or move and store it in a separate database (in papers in case of physical documents) for some time specified by the internal policies and other laws and regulations before destruction. We will not use the personal information transferred to the separate database for other purposes except as allowed by the applicable law.</p>
            <p style={body}>- Deadline for Destruction<br />
            We destroy the personal information within five days upon reaching the end date of the retention period, or within five days from the date when the retention of the personal information is deemed unnecessary, such as when the management purpose is achieved, the relevant service is abolished, or the relevant business has been terminated.</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Use of Cookies</p>
            <p style={body}>We do not use cookies for storing and tracking any personally identifiable information.</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Privacy Officer</p>
            <p style={body}>DK Consultants Co., Ltd. designates the following chief personal information manager to be in charge of the matters regarding personal information, including managing complaints raised by the subject of information in connection with the handling of his/her data and remedying any damage caused.</p>
            <p style={body}>- Chief Personal Information Manager:<br />
            · Name: Jaegyung Pyun<br />
            · Title: Associate<br />
            · Contact: 031-603-4845, jg.pyun@dk-consultant.com</p>

            <p style={{ ...sectionTitle, marginTop: 24 }}>Changes to the Privacy Policy</p>
            <p style={body}>As per Article 29 of the Personal Information Protection Act, DK Consultants Co., Ltd. takes technical, administrative, and physical actions necessary to secure the safety of personal information as follows:</p>
            <p style={body}>Minimum Number of Staff Managing Personal Information and Staff Training- We designate a minimum number of staff members to manage personal information.<br />
            - Establishment and Implementation of an Internal Management Plan<br />
            - We have in place an internal plan for the safe management of personal information.<br />
            - Prevention of Unauthorized Access<br />
            We take technical and physical protective measures to prevent unauthorized leakage or alteration of the personal information from hacking or computer viruses by installing security programs, regularly updating and inspecting them, and setting up systems in a controlled area with restricted access from external parties.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
