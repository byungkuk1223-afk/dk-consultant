"use client";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const financialBoxes = [
  {
    img: "/img-financial-2.png",
    title: "Project Development",
    items: [
      "Pre-Feasibility Study",
      "Feasibility Study",
      "Financial Modeling",
      "Economic Cost/Benefit and Impact Analysis",
      "Risk Analysis and Mitigation Plan",
      "Project Structuring and Options Analysis",
      "Partnership Strategy",
      "Financing Strategy",
      "Negotiation Support",
    ],
  },
  {
    img: "/img-financial-1.png",
    title: "Financial Advisory",
    items: [
      "Bid Advisory",
      "Debt Advisory",
      "Due Diligence",
      "Capital Structuring",
      "Financial Modeling and Audit",
      "Project Feasibility Analysis",
      "Mergers and Acquisitions",
      "Financial Restructuring",
    ],
  },
];

const healthcareBoxes = [
  {
    img: "/img-hc-planning.png",
    title: "Medical Planning",
    subtitle: "We provide detailed and specific plans for hospital development, according to clients' requirements.",
    items: ["Market Study", "Hospital Plan", "Medical Staff Plan"],
  },
  {
    img: "/img-hc-equipment.png",
    title: "Medical Equipment",
    subtitle: "We allocate appropriate medical equipment pertinent to personalized medical plans.",
    items: [
      "Current Condition of Medical Equipment",
      "Loading and Installation Plan",
      "Monitoring and Evaluation",
      "Management Plan",
      "Designing Plan",
      "Training Plan",
    ],
  },
  {
    img: "/img-hc-operation.png",
    title: "Operation & Management",
    subtitle:
      "Our healthcare projects aim to provide first class medical care, offering a comprehensive structure plan for hospital's internal management.",
    items: ["Hospital Management Plan", "Manpower Supply Plan", "Maintenance Plan"],
  },
  {
    img: "/img-hc-his.png",
    title: "Hospital Information System",
    subtitle:
      "We provide an integration of strategic planning in HIS development, especially in EMR, CPOE and ENR.",
    items: ["Analysis of Current HIS", "HIS Development and Customization", "Monitoring and Evaluation"],
  },
  {
    img: "/img-hc-training.png",
    title: "Education & Training",
    subtitle:
      "Our training services augment the efficacy of any medical services by establishing a dynamic educational environment for both medical and administrative staffs.",
    items: ["Training Program Development", "Program Arrangement"],
  },
];

const CARD_W = 560;
const CARD_GAP = 40;
const VISIBLE = 2;
const MAX_INDEX = healthcareBoxes.length - VISIBLE; // 3

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<"financial" | "healthcare">("financial");
  const [hcIndex, setHcIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hcMove = (dir: number) => {
    setHcIndex((prev) => Math.max(0, Math.min(prev + dir, MAX_INDEX)));
  };

  return (
    <>
      <Header scrolled={scrolled} />

      {/* Hero */}
      <div
        style={{
          width: "100%",
          height: 600,
          position: "relative",
          backgroundImage: "url('/img-financial-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: 80,
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(11,31,58,0.72)" }} />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            padding: "0 24px",
            paddingTop: 220,
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: 55,
              fontWeight: "normal",
              fontFamily: "'Libre Baskerville', serif",
              lineHeight: 1.2,
            }}
          >
            Services
          </h2>
          <p style={{ color: "#fff", fontSize: 18, fontFamily: "'Lato', sans-serif", marginTop: 10, opacity: 0.85 }}>
            Details of our guided approach
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ width: "100%", background: "#f0f0f0", position: "relative", zIndex: 100 }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            background: "#fff",
            boxShadow: "5px 5px 5px rgba(0,0,0,0.1)",
            borderRadius: 3,
          }}
        >
          {(["financial", "healthcare"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                height: 90,
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: activeTab === tab ? 700 : 400,
                background: activeTab === tab ? "#416ab3" : "#fff",
                color: activeTab === tab ? "#fff" : "#333",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#416ab3";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.color = "#333";
                }
              }}
            >
              {tab === "financial" ? "Financial Advisory" : "Healthcare Advisory"}
            </button>
          ))}
        </div>
      </div>

      {/* Financial Advisory Panel */}
      {activeTab === "financial" && (
        <>
          <div style={{ background: "#fff" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 50px" }}>
              <h2
                style={{
                  color: "#000",
                  fontSize: 40,
                  fontFamily: "'Libre Baskerville', serif",
                  fontWeight: "normal",
                  borderBottom: "2px solid #ddd",
                  paddingBottom: 20,
                  marginBottom: 20,
                }}
              >
                Financial Advisory
              </h2>
              <p style={{ color: "#777", fontSize: 17, lineHeight: "30px", fontFamily: "'Lato', sans-serif" }}>
                We provide services across the full spectrum of the infrastructure cycle, from creating a need for
                infrastructure to negotiating a successful transaction.
              </p>
            </div>
          </div>

          <div style={{ width: "100%", background: "#f8f8f8", paddingBottom: 100 }}>
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                gap: "4%",
                padding: "0 24px",
                flexWrap: "wrap",
              }}
            >
              {financialBoxes.map((box) => (
                <div
                  key={box.title}
                  style={{
                    width: "48%",
                    background: "#fff",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    minHeight: 750,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 250,
                      backgroundImage: `url('${box.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: 900,
                      padding: "30px 50px",
                      color: "#000",
                      fontFamily: "'Libre Baskerville', serif",
                    }}
                  >
                    {box.title}
                  </p>
                  <ul style={{ padding: "0 50px", listStyle: "none" }}>
                    {box.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          width: "100%",
                          borderBottom: "1px dotted #ddd",
                          fontSize: 15,
                          padding: "12px 15px 12px 28px",
                          color: "#555",
                          position: "relative",
                          lineHeight: "24px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 10,
                            top: 20,
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#416ab3",
                            display: "inline-block",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Healthcare Advisory Panel — Slider */}
      {activeTab === "healthcare" && (
        <>
          <div style={{ background: "#fff" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 50px" }}>
              <h2
                style={{
                  color: "#000",
                  fontSize: 40,
                  fontFamily: "'Libre Baskerville', serif",
                  fontWeight: "normal",
                  borderBottom: "2px solid #ddd",
                  paddingBottom: 20,
                  marginBottom: 20,
                }}
              >
                Healthcare Advisory
              </h2>
              <p style={{ color: "#777", fontSize: 17, lineHeight: "30px", fontFamily: "'Lato', sans-serif" }}>
                We provide healthcare advisory services from hospital development to O&amp;M Planning, Hospital
                Information System Planning and Education &amp; Training in order to help our client succeed in
                healthcare business.
              </p>
            </div>
          </div>

          <div style={{ width: "100%", background: "#f8f8f8", padding: "60px 0 80px" }}>
            {/* Slider container */}
            <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
              {/* Track wrapper — clips overflow */}
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    gap: CARD_GAP,
                    transform: `translateX(-${hcIndex * (CARD_W + CARD_GAP)}px)`,
                    transition: "transform 0.4s ease",
                  }}
                >
                  {healthcareBoxes.map((box) => (
                    <div
                      key={box.title}
                      style={{
                        flex: `0 0 ${CARD_W}px`,
                        background: "#fff",
                        border: "1px solid #e5e5e5",
                        boxShadow: "0 5px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: 250,
                          backgroundImage: `url('${box.img}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <p
                        style={{
                          fontSize: 22,
                          fontWeight: 900,
                          padding: "30px 50px 10px",
                          color: "#000",
                          fontFamily: "'Libre Baskerville', serif",
                        }}
                      >
                        {box.title}
                      </p>
                      <h4
                        style={{
                          color: "#aaa",
                          fontSize: 15,
                          lineHeight: "26px",
                          fontWeight: "normal",
                          padding: "8px 50px 20px",
                          fontFamily: "'Lato', sans-serif",
                        }}
                      >
                        {box.subtitle}
                      </h4>
                      <ul style={{ padding: "0 50px 30px", listStyle: "none" }}>
                        {box.items.map((item) => (
                          <li
                            key={item}
                            style={{
                              width: "100%",
                              borderBottom: "1px dotted #ddd",
                              fontSize: 15,
                              padding: "12px 15px 12px 28px",
                              color: "#555",
                              position: "relative",
                              lineHeight: "24px",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 10,
                                top: 20,
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: "#416ab3",
                                display: "inline-block",
                              }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev button */}
              <button
                onClick={() => hcMove(-1)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: -22,
                  transform: "translateY(-50%)",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#416ab3",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: hcIndex === 0 ? 0.3 : 1,
                  transition: "opacity 0.2s",
                  zIndex: 10,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={() => hcMove(1)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: -22,
                  transform: "translateY(-50%)",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#416ab3",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: hcIndex >= MAX_INDEX ? 0.3 : 1,
                  transition: "opacity 0.2s",
                  zIndex: 10,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 36 }}>
              {healthcareBoxes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHcIndex(Math.min(i, MAX_INDEX))}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: i === hcIndex ? "#416ab3" : "#ccc",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Raleway:wght@400;700;900&display=swap');
      `}</style>
    </>
  );
}
