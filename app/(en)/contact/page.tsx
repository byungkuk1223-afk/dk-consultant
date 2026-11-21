"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMG } from "@/data/images";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { lnk, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<"contact" | "address">("contact");
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", title: "", inquiry: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleSubmit() {
    if (!form.name || !form.email || !form.mobile || !form.title || !form.inquiry) {
      setErrorMsg("Please fill in all required fields."); return;
    }
    if (!agreed) {
      setErrorMsg("Please agree to the collection and use of your personal information."); return;
    }
    setStatus("loading");
    setErrorMsg("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", mobile: "", title: "", inquiry: "" });
      setAgreed(false);
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Sending failed. Please try again.");
      setStatus("error");
    }
  }

  const labelStyle: React.CSSProperties = {
    width: 90, minWidth: 90, fontSize: 13, color: "#444",
    fontFamily: "'Lato', 'Noto Sans KR', sans-serif", paddingTop: 6,
  };
  const inputStyle: React.CSSProperties = {
    border: "1px solid #ccc", padding: "6px 10px", fontSize: 13,
    fontFamily: "'Lato', 'Noto Sans KR', sans-serif", outline: "none", flex: 1,
  };
  const requiredStar: React.CSSProperties = { color: "#c00", marginRight: 2 };

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>

        <PageHero title="Contact Us" subtitle="We look forward to your inquiry" bg={IMG.contact} />

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 0 }}>
          <div style={{ display: "flex", width: "min(100%, 640px)" }}>
            <button onClick={() => setActiveTab("contact")} style={{
              flex: 1, padding: "14px 24px", border: "none", cursor: "pointer",
              backgroundColor: activeTab === "contact" ? "#3a5585" : "#f0f0f0",
              color: activeTab === "contact" ? "#fff" : "#555",
              fontSize: 13, fontFamily: "'Lato', 'Noto Sans KR', sans-serif",
              fontWeight: 400, letterSpacing: 0.5,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span>{tr("Contact")}</span>
              <span style={{ fontSize: 16, opacity: 0.7 }}>›</span>
            </button>
            <button onClick={() => setActiveTab("address")} style={{
              flex: 1, padding: "14px 24px", border: "none", cursor: "pointer",
              backgroundColor: activeTab === "address" ? "#3a5585" : "#f0f0f0",
              color: activeTab === "address" ? "#fff" : "#555",
              fontSize: 13, fontFamily: "'Lato', 'Noto Sans KR', sans-serif",
              fontWeight: 400, letterSpacing: 0.5,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginLeft: 2,
            }}>
              <span>{tr("Address & Number")}</span>
              <span style={{ fontSize: 16, opacity: 0.7 }}>›</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <section style={{ padding: "60px 24px", maxWidth: 1400, margin: "0 auto", boxSizing: "border-box" }}>

          {activeTab === "contact" && (
            <div style={{ maxWidth: 560, margin: "0 auto" }}>

              {status === "success" ? (
                <div style={{
                  padding: "32px 24px", textAlign: "center",
                  border: "1px solid #c8d8c0", background: "#f4faf2", borderRadius: 2,
                }}>
                  <p style={{ fontSize: 15, color: "#2e6b2e", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginBottom: 8 }}>
                    {tr("Thank you. Your inquiry has been received.")}</p>
                  <p style={{ fontSize: 13, color: "#666", fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>
                    {tr("We will reply as soon as possible.")}</p>
                  <button onClick={() => setStatus("idle")} style={{
                    marginTop: 20, padding: "8px 28px", background: "#3a5585", color: "#fff",
                    border: "none", fontSize: 13, cursor: "pointer", fontFamily: "'Lato', 'Noto Sans KR', sans-serif",
                  }}>
                    {tr("New inquiry")}</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {/* Name */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <label style={labelStyle}><span style={requiredStar}>*</span>{tr("Name")}</label>
                    <input style={{ ...inputStyle, width: 120, flex: "unset" }} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <label style={labelStyle}><span style={requiredStar}>*</span>{tr("E-mail")}</label>
                    <input style={{ ...inputStyle, width: 240, flex: "unset" }} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  {/* Mobile */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <label style={labelStyle}><span style={requiredStar}>*</span>{tr("Mobile")}</label>
                    <input style={{ ...inputStyle, width: 140, flex: "unset" }} value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} />
                  </div>
                  {/* Title */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <label style={labelStyle}><span style={requiredStar}>*</span>{tr("Title")}</label>
                    <input style={inputStyle} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                  </div>
                  {/* Inquiry */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginTop: 4 }}>
                    <label style={{ ...labelStyle, paddingTop: 8 }}><span style={requiredStar}>*</span>{tr("Inquiry")}</label>
                    <textarea
                      style={{ ...inputStyle, height: 140, resize: "vertical", lineHeight: 1.6 }}
                      value={form.inquiry}
                      onChange={e => setForm({ ...form, inquiry: e.target.value })}
                    />
                  </div>

                  {/* Privacy Statement */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginTop: 6 }}>
                    <label style={{ ...labelStyle, paddingTop: 6, lineHeight: 1.4 }}>{tr("Privacy")}</label>
                    <div style={{
                      flex: 1, height: 120, overflowY: "auto", border: "1px solid #ccc",
                      padding: "8px 10px", fontSize: 11, color: "#555", lineHeight: 1.7,
                      fontFamily: "'Lato', 'Noto Sans KR', sans-serif",
                    }}>
                      <p style={{ margin: "0 0 6px 0" }}><b>{tr("Purpose:")}</b> {tr("to receive and answer your inquiry.")}</p>
                      <p style={{ margin: "0 0 6px 0" }}><b>{tr("Items:")}</b> {tr("name, e-mail, mobile number, inquiry title and content.")}</p>
                      <p style={{ margin: "0 0 6px 0" }}><b>{tr("Retention:")}</b> {tr("five years from receipt, then destroyed.")}</p>
                      <p style={{ margin: "0 0 6px 0" }}><b>{tr("Overseas processing:")}</b> {tr("the form is delivered through Vercel Inc. and Resend (United States).")}</p>
                      <p style={{ margin: "0 0 6px 0" }}>{tr("You may refuse consent; in that case, please contact us by e-mail or telephone instead of this form.")}</p>
                      <p style={{ margin: 0 }}>{tr("Full details:")}{" "}<a href={lnk("/privacy")} style={{ color: "#3a5585", textDecoration: "underline" }}>{tr("Privacy Policy")}</a></p>
                    </div>
                  </div>

                  {/* Agree checkbox */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, paddingLeft: 102 }}>
                    <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ width: 14, height: 14, cursor: "pointer" }} />
                    <label htmlFor="agree" style={{ fontSize: 12, color: "#555", cursor: "pointer" }}>
                      {tr("I agree to the collection and use of my personal information as described above.")}</label>
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <p style={{ fontSize: 12, color: "#c00", paddingLeft: 102, marginTop: 4 }}>{tr(errorMsg)}</p>
                  )}

                  {/* Submit */}
                  <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                    <button
                      onClick={handleSubmit}
                      disabled={status === "loading"}
                      style={{
                        backgroundColor: status === "loading" ? "#7a8faa" : "#3a5585",
                        color: "#fff", border: "none",
                        padding: "10px 40px", fontSize: 13, cursor: status === "loading" ? "not-allowed" : "pointer",
                        fontFamily: "'Lato', 'Noto Sans KR', sans-serif", letterSpacing: 1,
                      }}
                    >
                      {status === "loading" ? tr("Sending...") : tr("Confirm")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "address" && (
            <div>
              <h2 style={{ fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", fontSize: 40, fontWeight: "normal", color: "#000", margin: "0 0 12px 0", borderBottom: "2px solid #ddd", paddingBottom: 20 }}>
                {tr("Address & Number")}</h2>
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
                    value: "#303, Gana Plaza, 10-7, Hwangsaeul-ro 258 beon-gil,\nBundang-gu, Seongnam-si, Gyeonggi-do, Korea",
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
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#333", fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>{tr(item.label)}</span>
                    <span style={{ fontSize: 12, color: (item as any).isEmail ? "#3a5585" : "#555", lineHeight: 1.7, fontFamily: "'Lato', 'Noto Sans KR', sans-serif", whiteSpace: "pre-line" }}>
                      {tr(item.value)}
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
