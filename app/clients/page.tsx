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
      <main style={{ minHeight: "100vh", background: "#fff" }}>

      {/* Page Hero */}
      <section style={{
        position: "relative",
        width: "100%",
        height: 380,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/img/hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45)",
        }} />
        <div style={{ position: "relative", zIndex: 1, paddingLeft: "28%", color: "#fff" }}>
          <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 50, fontWeight: 400, margin: "0 0 14px 0", letterSpacing: 1 }}>
            Clients
          </h1>
          <p style={{ fontSize: 14, fontWeight: 300, margin: 0, letterSpacing: 0.2, lineHeight: 1.6 }}>
            Organizations and institutions we have proudly served
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px 0" }}>
        {/* Projects / Clients Sub-Nav */}
        <div style={{ display: "flex", gap: 24, marginBottom: 32, borderBottom: "1px solid #e5e7eb", paddingBottom: 0 }}>
          {[
            { label: "Projects", href: "/projects" },
            { label: "Clients", href: "/clients" },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              style={{
                fontSize: 14,
                fontWeight: tab.href === "/clients" ? 700 : 400,
                fontFamily: "'Lato', sans-serif",
                color: tab.href === "/clients" ? "#416ab3" : "#666",
                textDecoration: "none",
                paddingBottom: 12,
                borderBottom: tab.href === "/clients" ? "2px solid #416ab3" : "2px solid transparent",
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
              fontWeight: "normal",
              color: "#000",
              marginBottom: 20,
              paddingBottom: 20,
              borderBottom: "2px solid #ddd",
            }}
          >
            Clients
          </h2>

          {/* Logo Rows */}
          <div style={{ overflowX: "auto" }}>
            {ROWS.map((row, rowIdx) => {
              const count = row.images.length;
              const cellW = 162;
              const gap = 10;
              const rowWidth = count * cellW + (count - 1) * gap;

              return (
                <div
                  key={rowIdx}
                  style={{
                    width: rowWidth,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: gap,
                    marginBottom: gap,
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

      </main>
      <Footer />
    </>
  );
}
