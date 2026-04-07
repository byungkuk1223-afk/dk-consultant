"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<"contact" | "address">("contact");
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", title: "", inquiry: "", safetyCode: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labelStyle: React.CSSProperties = {
    width: 90,
    minWidth: 90,
    fontSize: 13,
    color: "#444",
    fontFamily: "'Open Sans', sans-serif",
    paddingTop: 6,
  };

  const inputStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "6px 10px",
    fontSize: 13,
    fontFamily: "'Open Sans', sans-serif",
    outline: "none",
    flex: 1,
  };

  const requiredStar: React.CSSProperties = { color: "#c00", marginRight: 2 };

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')",
            backgroundSize: "cover", backgroundPosition: "center 40%",
            filter: "brightness(0.45)",
          }} />
          <div style={{ position: "relative", zIndex: 1, paddingLeft: "35%", color: "#fff" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 400, margin: "0 0 12px 0", letterSpacing: 0.5 }}>
              Contact Us
            </h1>
            <p style={{ fontSize: 13, fontWeight: 300, margin: 0, letterSpacing: 0.2 }}>
              We look forward to your <span style={{ color: "#a8b8d8" }}>inquiry</span>
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 0 }}>
          <div style={{ display: "flex", width: "52%", minWidth: 500 }}>
            <button
              onClick={() => setActiveTab("contact")}
              style={{
                flex: 1, padding: "14px 24px", border: "none", cursor: "pointer",
                backgroundColor: activeTab === "contact" ? "#3a5585" : "#f0f0f0",
                color: activeTab === "contact" ? "#fff" : "#555",
                fontSize: 13, fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400, letterSpacing: 0.5,
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
            >
              <span>Contact</span>
              <span style={{ fontSize: 16, opacity: 0.7 }}>›</span>
            </button>
            <button
              onClick={() => setActiveTab("address")}
              style={{
                flex: 1, padding: "14px 24px", border: "none", cursor: "pointer",
                backgroundColor: activeTab === "address" ? "#3a5585" : "#f0f0f0",
                color: activeTab === "address" ? "#fff" : "#555",
                fontSize: 13, fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400, letterSpacing: 0.5,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginLeft: 2,
              }}
            >
              <span>Address &amp; Number</span>
              <span style={{ fontSize: 16, opacity: 0.7 }}>›</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <section style={{ padding: "60px 10%", maxWidth: 1400, margin: "0 auto", boxSizing: "border-box" }}>

          {activeTab === "contact" && (
            <div style={{ maxWidth: 560, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 400, color: "#111", margin: "0 0 12px 0" }}>
                Contact
              </h2>
              <div style={{ width: 36, height: 2, backgroundColor: "#3a5585", marginBottom: 32 }} />

              {/* Form fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <label style={labelStyle}><span style={requiredStar}>*</span>Name</label>
                  <input style={{ ...inputStyle, width: 120, flex: "unset" }} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <label style={labelStyle}><span style={requiredStar}>*</span>E-mail</label>
                  <input style={{ ...inputStyle, width: 240, flex: "unset" }} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                {/* Mobile */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <label style={labelStyle}><span style={requiredStar}>*</span>Mobile</label>
                  <input style={{ ...inputStyle, width: 140, flex: "unset" }} value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} />
                </div>
                {/* Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <label style={labelStyle}><span style={requiredStar}>*</span>Title</label>
                  <input style={inputStyle} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                </div>
                {/* Inquiry */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginTop: 4 }}>
                  <label style={{ ...labelStyle, paddingTop: 8 }}><span style={requiredStar}>*</span>Inquiry</label>
                  <textarea
                    style={{ ...inputStyle, height: 140, resize: "vertical", lineHeight: 1.6 }}
                    value={form.inquiry}
                    onChange={e => setForm({ ...form, inquiry: e.target.value })}
                  />
                </div>

                {/* Safety code */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                  <label style={labelStyle}>Safety code</label>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 80, height: 30, background: "linear-gradient(135deg, #ddd 0%, #bbb 100%)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 15, fontWeight: 700, color: "#333", letterSpacing: 4,
                      fontFamily: "monospace", userSelect: "none", border: "1px solid #ccc",
                    }}>
                      DK8K3
                    </div>
                    <input style={{ ...inputStyle, width: 90, flex: "unset" }} placeholder="" value={form.safetyCode} onChange={e => setForm({ ...form, safetyCode: e.target.value })} />
                    <span style={{ fontSize: 12, color: "#666" }}>Enter the numbers on the left.</span>
                  </div>
                </div>

                {/* Privacy Statement */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginTop: 6 }}>
                  <label style={{ ...labelStyle, paddingTop: 6, lineHeight: 1.4 }}>Privacy<br />Statement</label>
                  <div style={{
                    flex: 1, height: 80, overflowY: "scroll", border: "1px solid #ccc",
                    padding: "8px 10px", fontSize: 11, color: "#555", lineHeight: 1.7,
                    fontFamily: "'Open Sans', sans-serif",
                  }}>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Purpose of Personal Information Processing</p>
                    <p style={{ margin: "0 0 10px 0" }}>We, DK Consultants Co., Ltd. (www.dk-consultant.com; hereinafter referred to as the 'Company'), use our best efforts to protect your privacy and personal information. The Company processes personal information for the following purpose and does not use it for any other purposes; identifying and verifying clients in provision of services pertinent to clients' needs and interest.</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Personal Information Processing and Retention Period</p>
                    <p style={{ margin: "0 0 6px 0" }}>① The Company processes and retains personal information within the personal information retention period according to relevant laws or within the personal information retention period to which individuals consented when collecting their personal information.</p>
                    <p style={{ margin: "0 0 10px 0" }}>② The retention period of the personal information processed by the Company is 5 years.</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Provision of Personal Information to a Third Party</p>
                    <p style={{ margin: "0 0 10px 0" }}>The Company may provide the personal information to a third party only when it falls under the provisions specified in Article 17 and 18 of the Personal Information Act, such as when the subject of the information provides consent and where special rules exist in any relevant law.</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Outsourcing the Handling of Personal Information</p>
                    <p style={{ margin: "0 0 6px 0" }}>① The Company may outsource the handling of personal information for efficient provision of services.</p>
                    <p style={{ margin: "0 0 10px 0" }}>② When the Company provides personal data to a third party, the Company shall create and maintain a record of the provision in accordance with the provisions of Article 25 of the Act on the Protection of Personal Information. When concluding an outsourcing contract, the Company specifies in writing the matters concerning the technical and administrative protection measures, limitations on re-outsourcing, and liability for damages. Personal information is protected by all means and is under the strict supervision of the Company.</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Rights and Duties of a Subject Information</p>
                    <p style={{ margin: "0 0 6px 0" }}>A subject of any personally identifiable information managed by the Company is entitled to the following rights regarding the protection of his/her personal information:</p>
                    <p style={{ margin: "0 0 4px 0" }}>1) The right to request for the inspection of the personal information</p>
                    <p style={{ margin: "0 0 4px 0" }}>2) The right to request for the correction of the personal information</p>
                    <p style={{ margin: "0 0 4px 0" }}>3) The right to delete the personal information</p>
                    <p style={{ margin: "0 0 10px 0" }}>4) The right to request for the suspension of the handling of the personal information</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Destruction of Personal Information</p>
                    <p style={{ margin: "0 0 6px 0" }}>When DK Consultants Co., Ltd. has no further need to retain any personal information, such as when it fulfills the purpose of keeping such data or the retention period has passed, the Company will destroy the personal information without delay.</p>
                    <p style={{ margin: "0 0 4px 0" }}>- Procedures of Destruction: After or as soon as we achieve the purpose of having personal information, we will immediately destroy such information; or move and store it in a separate database for some time specified by the internal policies and other laws and regulations before destruction.</p>
                    <p style={{ margin: "0 0 10px 0" }}>- Deadline for Destruction: We destroy the personal information within five days upon reaching the end date of the retention period, or within five days from the date when the retention of the personal information is deemed unnecessary.</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Use of Cookies</p>
                    <p style={{ margin: "0 0 10px 0" }}>We do not use cookies for storing and tracking any personally identifiable information.</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Privacy Officer</p>
                    <p style={{ margin: "0 0 4px 0" }}>DK Consultants Co., Ltd. designates the following chief personal information manager to be in charge of the matters regarding personal information.</p>
                    <p style={{ margin: "0 0 4px 0" }}>· Name: Jaegyung Pyun</p>
                    <p style={{ margin: "0 0 4px 0" }}>· Title: Associate</p>
                    <p style={{ margin: "0 0 10px 0" }}>· Contact: 031-603-4845, jg.pyun@dk-consultant.com</p>
                    <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#3a5585" }}>Changes to the Privacy Policy</p>
                    <p style={{ margin: 0 }}>As per Article 29 of the Personal Information Protection Act, DK Consultants Co., Ltd. takes technical, administrative, and physical actions necessary to secure the safety of personal information. We designate a minimum number of staff members to manage personal information and have in place an internal plan for the safe management of personal information.</p>
                  </div>
                </div>

                {/* Agree checkbox */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, paddingLeft: 102 }}>
                  <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ width: 14, height: 14, cursor: "pointer" }} />
                  <label htmlFor="agree" style={{ fontSize: 12, color: "#555", cursor: "pointer" }}>
                    I agree to the terms of the <span style={{ color: "#3a5585", textDecoration: "underline" }}>Privacy Policy</span> Terms.
                  </label>
                </div>

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                  <button style={{
                    backgroundColor: "#3a5585", color: "#fff", border: "none",
                    padding: "10px 40px", fontSize: 13, cursor: "pointer",
                    fontFamily: "'Open Sans', sans-serif", letterSpacing: 1,
                  }}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "address" && (
            <div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 400, color: "#111", margin: "0 0 12px 0", textAlign: "center" }}>
                Address &amp; Number
              </h2>
              <div style={{ width: 36, height: 2, backgroundColor: "#3a5585", margin: "0 auto 48px" }} />

              {/* Icons row */}
              <div style={{ display: "flex", justifyContent: "center", gap: 80, marginBottom: 48 }}>
                {[
                  {
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3a5585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    ),
                    label: "ADDRESS",
                    value: "#303, Gana Plaza, 10-7,\nHwangsaeul-ro 258 beon-gil,\nBundang-gu, Seongnam-si,\nGyeonggi-do, Korea",
                  },
                  {
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3a5585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                    ),
                    label: "TEL",
                    value: "+82.31.603.4845",
                  },
                  {
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3a5585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 17 13 17"/>
                        <polyline points="22 11 13 11"/>
                        <polyline points="22 5 13 5"/>
                        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/>
                        <line x1="9" y1="12" x2="9" y2="12"/>
                      </svg>
                    ),
                    label: "FAX",
                    value: "+82.31.603.0079",
                  },
                  {
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3a5585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: "MAIL",
                    value: "dkc_info@dk-consultant.com",
                    isEmail: true,
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, maxWidth: 160, textAlign: "center" }}>
                    {item.icon}
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#333", fontFamily: "'Open Sans', sans-serif" }}>{item.label}</span>
                    <span style={{ fontSize: 12, color: (item as any).isEmail ? "#3a5585" : "#555", lineHeight: 1.7, fontFamily: "'Open Sans', sans-serif", whiteSpace: "pre-line" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div style={{ width: "100%", height: 380 }}>
                <iframe
                  src="https://maps.google.com/maps?q=10-7+Hwangsaeul-ro+258beon-gil,+Bundang-gu,+Seongnam-si,+Gyeonggi-do&output=embed&z=15"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
