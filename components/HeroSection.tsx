"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [{ bg: "/img/power_hero.jpg" }, { bg: "/img/power_plant.jpg" }];

  return (
    <section>
      {/* Main Hero */}
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: activeSlide === i ? 1 : 0,
              transition: "opacity 1.2s ease",
              background: `linear-gradient(to right, rgba(11,37,69,0.72) 0%, rgba(11,37,69,0.45) 55%, rgba(11,37,69,0.15) 100%), url('${slide.bg}') center/cover no-repeat`,
            }}
          />
        ))}

        {/* Hero Text - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: "30%",
            color: "#fff",
            zIndex: 10,
            maxWidth: 640,
          }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: 3,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 16,
            }}
          >
            POWER PLANT &amp; ENVIRONMENT
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 3.6vw, 50px)",
              fontWeight: 700,
              fontFamily: "'Libre Baskerville', Georgia, serif",
              lineHeight: 1.2,
              marginBottom: 18,
              color: "#fff",
            }}
          >
            Advancing power and environmental projects, from vision to execution
          </h1>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.85,
              letterSpacing: 0.3,
            }}
          >
            Owner-side engineering management, commercial structuring, and project finance in one team,
            on one project baseline.
          </p>
        </div>
      </div>

      {/* Service Cards - overlapping the hero bottom */}
      <div style={{ background: "#f2f3f5", paddingBottom: 60 }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 0,
            transform: "translateY(-72px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          {[
            {
              href: "/services#engineering",
              icon: (
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="6" y="14" width="8" height="18" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="17" y="20" width="15" height="12" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <path d="M8 14V6h4v8M21 20v-5h7v5" stroke="#416ab3" strokeWidth="1.5" />
                  <path d="M3 32h32" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Engineering Management & Technical Advisory",
              desc: "Design basis, package coordination, interface management, and independent review of every deliverable, for power plants and carbon capture facilities.",
            },
            {
              href: "/services#commercial",
              icon: (
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="8" y="5" width="22" height="28" rx="2" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <path d="M13 12h12M13 17h12M13 22h8" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Commercial & Contract Advisory",
              desc: "PPA, EPC, fuel, CO₂ transport and storage, and O&M agreements reviewed against one risk allocation matrix.",
            },
            {
              href: "/services#financial",
              icon: (
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="3" y="7" width="32" height="24" rx="2" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="8" y="18" width="5" height="9" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="16.5" y="14" width="5" height="13" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="25" y="10" width="5" height="17" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                </svg>
              ),
              title: "Financial Advisory & Capital Raising",
              desc: "One financial model from first assumptions to financial close: financing strategy, lender engagement, and due diligence.",
            },
          ].map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              style={{
                background: "#fff",
                padding: "36px 40px 40px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                borderRight: i < 2 ? "1px solid #eee" : "none",
              }}
            >
              {card.icon}
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "'Lato', sans-serif",
                  color: "#1a1a1a",
                  lineHeight: 1.4,
                  marginTop: 4,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  color: "#888",
                  lineHeight: 1.75,
                }}
              >
                {card.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
