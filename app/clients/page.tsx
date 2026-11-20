"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMG } from "@/data/images";
import PageHero from "@/components/PageHero";

const ROWS = [
  {
    images: [
      "/img/img_04_02_1_1.jpg",
      "/img/img_04_02_1_2.jpg",
      "/img/img_04_02_1_3.jpg",
      "/img/img_04_02_1_4.jpg",
    ],
  },
  {
    images: [
      "/img/img_04_02_2_1.jpg",
      "/img/img_04_02_2_2.jpg",
      "/img/img_04_02_2_3.jpg",
      "/img/img_04_02_2_4.jpg",
      "/img/img_04_02_2_5.jpg",
      "/img/img_04_02_2_6.jpg",
      "/img/img_04_02_2_7.jpg",
    ],
  },
  {
    images: [
      "/img/img_04_02_3_1.jpg",
      "/img/img_04_02_3_2.jpg",
      "/img/img_04_02_3_3.jpg",
      "/img/img_04_02_3_4.jpg",
      "/img/img_04_02_3_5.jpg",
      "/img/img_04_02_3_6.jpg",
    ],
  },
  {
    images: [
      "/img/img_04_02_4_1.jpg",
      "/img/img_04_02_4_2.jpg",
      "/img/img_04_02_4_3.jpg",
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

      <PageHero title="Clients" subtitle="Organizations and institutions we have proudly served" bg={IMG.clients} />

      {/* Clients Logo Grid */}
      <div style={{ background: "#fafafa", padding: "80px 40px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>


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
