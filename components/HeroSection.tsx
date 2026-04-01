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

  const slides = [
    {
      href: "/services/financial",
      title: "Financial Advisory & Project Development",
      desc: "Global influence, local expertise and making values real; we transform opportunities into tangible reality.",
      bg: "/img/hero_bg.jpg",
    },
    {
      href: "/services/healthcare",
      title: "Healthcare Advisory",
      desc: "We are committed to providing a stable long-term guidance for your Healthcare infrastructure projects.",
      bg: "/img/hero_bg2.jpg",
    },
  ];

  return (
    <section>
      {/* Main Hero */}
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            onClick={() => (window.location.href = slide.href)}
            style={{
              position: "absolute",
              inset: 0,
              cursor: "pointer",
              opacity: activeSlide === i ? 1 : 0,
              transition: "opacity 1.2s ease",
              background: `linear-gradient(to right, rgba(20,30,60,0.45) 0%, rgba(20,30,60,0.15) 60%, rgba(20,30,60,0.05) 100%), url('${slide.bg}') center/cover no-repeat`,
            }}
          />
        ))}

        {/* Hero Text - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: "8%",
            color: "#fff",
            zIndex: 10,
            maxWidth: 520,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(34px, 4vw, 56px)",
              fontWeight: 700,
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1.2,
              marginBottom: 18,
              color: "#fff",
            }}
          >
            Creativity, Passion,<br />and Dedication
          </h1>
          <p
            style={{
              fontSize: 14,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.85,
              letterSpacing: 0.3,
            }}
          >
            Fueling creativity and cultivating innovation<br />
            in financial planning and management.
          </p>
        </div>
      </div>

      {/* Service Cards - overlapping the hero bottom */}
      <div style={{ background: "#f2f3f5", paddingBottom: 60 }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            transform: "translateY(-72px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          {[
            {
              href: "/services/financial",
              icon: (
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="3" y="7" width="32" height="24" rx="2" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="8" y="18" width="5" height="9" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="16.5" y="14" width="5" height="13" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <rect x="25" y="10" width="5" height="17" rx="1" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                </svg>
              ),
              title: "Financial Advisory & Project Development",
              desc: "Global influence, local expertise and making values real; we transform opportunities into tangible reality.",
            },
            {
              href: "/services/healthcare",
              icon: (
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="5" y="12" width="28" height="20" rx="2" stroke="#416ab3" strokeWidth="1.5" fill="none" />
                  <path d="M5 19h28" stroke="#416ab3" strokeWidth="1.5" />
                  <path d="M13 8v8M25 8v8" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M19 23v6M16 26h6" stroke="#416ab3" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Healthcare Advisory",
              desc: "We are committed to providing a stable long-term guidance for your Healthcare infrastructure projects.",
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
                borderRight: i === 0 ? "1px solid #eee" : "none",
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
