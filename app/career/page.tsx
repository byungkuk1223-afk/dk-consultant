"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareerPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ fontFamily: "'Lato', sans-serif" }}>

        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            width: "100%",
            height: 380,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              filter: "brightness(0.45)",
            }}
          />
          {/* Overlay text */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              paddingLeft: "28%",
              color: "#fff",
            }}
          >
            <h1
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: 50,
                fontWeight: 400,
                margin: "0 0 14px 0",
                letterSpacing: 1,
              }}
            >
              Career
            </h1>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                margin: 0,
                letterSpacing: 0.2,
                lineHeight: 1.6,
              }}
            >
              DK Consultants recruits people who have potential to grow into a global leader.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section
          style={{
            backgroundColor: "#fff",
            padding: "80px 10% 100px",
            maxWidth: 1400,
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Main heading */}
          <h2
            style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: 26,
              fontWeight: 400,
              color: "#111",
              lineHeight: 1.5,
              margin: "0 0 18px 0",
              maxWidth: 700,
              whiteSpace: "nowrap",
            }}
          >
            DK Consultants recruits people<br />
            who have potential to grow into a global leader.
          </h2>

          {/* Blue underline */}
          <div
            style={{
              width: 40,
              height: 3,
              backgroundColor: "#3a5585",
              marginBottom: 40,
            }}
          />

          {/* Body text */}
          <div style={{ maxWidth: 780, color: "#444", fontSize: 14, lineHeight: 1.9, fontWeight: 400, fontFamily: "'Lato', sans-serif" }}>
            <p style={{ margin: "0 0 22px 0" }}>
              We invite the talents with MBA, CPA, CFA or equivalent experience with international banks,
              developers / investors / fund or similar financial and corporate advisory institutions.
              We appreciate your interest in infrastructure / project finance.
            </p>
            <p style={{ margin: "0 0 22px 0" }}>
              You are exposed to, or if not will be trained in, high-end, complex financial models.
              You will analyze key business drivers and conduct scenario and sensitivity analysis to
              ensure compliance with project documents and applicable accounting &amp; financial principles.
              The job will include the preparation of reports, information memoranda, presentations
              both in Korean and in English.
            </p>
            <p style={{ margin: "0 0 22px 0" }}>
              Client interaction and business development are also critical components of the job.
              You will interact and engage with client teams to understand their requirements and respond
              to the client&apos;s changing needs and priorities under the guidance of team lead.
              We expect that you have strong analytical skills, writing/speaking fluency in both Korean
              and English, and commanding knowledge in MS Office.
            </p>
            <p style={{ margin: "0 0 32px 0" }}>
              For further information about DK Consultants and for your resume, please contact:
            </p>
          </div>

          {/* Contact Cards */}
          <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Ms. Eunyoung Choi" },
              { label: "Email Address:", value: "ey.choi@dk-consultant.com" },
              { label: "Contact Number:", value: "+82 31 603 4845" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f5f6f8",
                  padding: "16px 24px",
                  fontSize: 14,
                  color: "#333",
                  fontWeight: 400,
                  fontFamily: "'Lato', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#3a5585", marginRight: 6 }}>•</span>
                <span>
                  {item.value ? (
                    <>
                      <span style={{ fontWeight: 400 }}>{item.label} </span>
                      <span style={{ color: "#3a5585" }}>{item.value}</span>
                    </>
                  ) : (
                    <span style={{ fontWeight: 400 }}>{item.label}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
