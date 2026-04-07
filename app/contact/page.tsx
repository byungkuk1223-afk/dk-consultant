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
                flex: 1, padding: "14px 0", border: "none", cursor: "pointer",
                backgroundColor: activeTab === "contact" ? "#3a5585" : "#f0f0f0",
                color: activeTab === "contact" ? "#fff" : "#555",
                fontSize: 13, fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400, letterSpacing: 0.5,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 24px",
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
                    <p style={{ margin: "0 0 6px 0", fontWeight: 600, color: "#3a5585" }}>Purpose of Personal Information Processing</p>
                    <p style={{ margin: 0 }}>
                      We, DK Consultants Co., Ltd. (www.dk-consultant.com, hereinafter referred to as the 'Company'), use our best efforts to protect your privacy and personal information.
                      The Company processes personal information for the following purpose and does not use it for any other purposes: identifying and verifying clients in provision of
                      services, prevention of unauthorized use, confirmation of intent to subscribe, restriction of subscription and number of subscriptions, preservation of records for
                      dispute resolution, handling of complaints, and delivery of notifications.
                    </p>
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
            <div style={{ maxWidth: 560, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 400, color: "#111", margin: "0 0 12px 0" }}>
                Address &amp; Number
              </h2>
              <div style={{ width: 36, height: 2, backgroundColor: "#3a5585", marginBottom: 32 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "#444", lineHeight: 1.8 }}>
                <div style={{ display: "flex", gap: 24 }}>
                  <span style={{ minWidth: 80, color: "#888", fontSize: 12, letterSpacing: 0.5 }}>ADDRESS</span>
                  <span>17F, 26, Teheran-ro 87-gil, Gangnam-gu, Seoul, Republic of Korea</span>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <span style={{ minWidth: 80, color: "#888", fontSize: 12, letterSpacing: 0.5 }}>TEL</span>
                  <span>+82 31 603 4845</span>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <span style={{ minWidth: 80, color: "#888", fontSize: 12, letterSpacing: 0.5 }}>EMAIL</span>
                  <span style={{ color: "#3a5585" }}>eychoi@dk-consultant.com</span>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
