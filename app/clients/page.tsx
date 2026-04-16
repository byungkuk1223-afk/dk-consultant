"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ROWS = [
  {
    images: [
      "https://dk-consultant.com/sub/img/img_04_02_1_1.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_1_2.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_1_3.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_1_4.jpg",
    ],
  },
  {
    images: [
      "https://dk-consultant.com/sub/img/img_04_02_2_1.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_2_2.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_2_3.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_2_4.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_2_5.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_2_6.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_2_7.jpg",
    ],
  },
  {
    images: [
      "https://dk-consultant.com/sub/img/img_04_02_3_1.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_3_2.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_3_3.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_3_4.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_3_5.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_3_6.jpg",
    ],
  },
  {
    images: [
      "https://dk-consultant.com/sub/img/img_04_02_4_1.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_4_2.jpg",
      "https://dk-consultant.com/sub/img/img_04_02_4_3.jpg",
    ],
  },
];

export default function ClientsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />

      {/* Page Hero */}
      <div
        style={{
          background: "#416ab3",
          padding: "110px 40px 50px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: 3.5,
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            fontFamily: "'Lato', sans-serif",
            marginBottom: 14,
          }}
        >
          DK CONSULTANTS
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#fff",
            letterSpacing: 0.5,
          }}
        >
          Clients
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            marginTop: 14,
          }}
        >
          Organizations and institutions we have proudly served
        </p>
      </div>

      {/* Projects / Clients Sub-Nav */}
      <div style={{ background: "#2c4a7c", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "flex" }}>
          {[
            { label: "Projects", href: "/projects" },
            { label: "Clients", href: "/clients" },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              style={{
                display: "inline-block",
                padding: "14px 28px",
                color: tab.href === "/clients" ? "#fff" : "rgba(255,255,255,0.6)",
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                fontWeight: tab.href === "/clients" ? 700 : 400,
                letterSpacing: 1,
                textDecoration: "none",
                borderBottom: tab.href === "/clients" ? "2px solid #fff" : "2px solid transparent",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* Clients Logo Grid */}
      <div style={{ background: "#fafafa", padding: "80px 40px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section Title */}
          <h2
            style={{
              fontSize: 40,
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontWeight: 400,
              color: "#000",
              lineHeight: "55px",
              marginBottom: 45,
              paddingBottom: 20,
              borderBottom: "2px solid #e0e0e0",
            }}
          >
            Clients
          </h2>

          {/* Logo Rows */}
          <div style={{ width: "100%" }}>
            {ROWS.map((row, rowIdx) => {
              const count = row.images.length;
              const cellW = 162;
              const gap = 10;
              const rowWidth = count * cellW + (count - 1) * gap;

              return (
                <div
                  key={rowIdx}
                  style={{
                    width: count === 7 ? "100%" : rowWidth,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: gap,
                    marginBottom: gap,
                    justifyContent: count === 7 ? "center" : "flex-start",
                  }}
                >
                  {row.images.map((src, imgIdx) => (
                    <div
                      key={imgIdx}
                      style={{
                        width: cellW,
                        height: 130,
                        background: "#fff",
                        border: "1px solid #e5e5e5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        style={{
                          maxWidth: "90%",
                          maxHeight: "90%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
