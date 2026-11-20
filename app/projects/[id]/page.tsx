"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, marketOf, statusOf } from "@/data/projects";
import { caseStudyFor } from "@/data/caseStudies";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <>
        <Header scrolled={scrolled} />
        <main style={{ paddingTop: 80, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 16, color: "#999", fontFamily: "'Lato', sans-serif" }}>Project not found.</p>
            <Link href="/projects" style={{ marginTop: 16, display: "inline-block", fontSize: 14, color: "#416ab3", fontFamily: "'Lato', sans-serif" }}>← Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const d = project.detail;
  const cs = caseStudyFor(project.id);
  const infoRows = [
    cs && { label: "Location", value: cs.location },
    cs && { label: "Delivered", value: cs.delivered },
    d?.capacity && { label: "Capacity", value: d.capacity },
    d?.sector && { label: "Sector", value: d.sector },
    d?.country && { label: "Country", value: d.country },
    d?.client && { label: "Client", value: d.client },
    d?.time && { label: "Period", value: d.time },
    { label: "Our Role", value: project.category },
    { label: "Market", value: marketOf(project) },
    { label: "Status", value: statusOf(project) },
    { label: "Region", value: project.region },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ minHeight: "100vh", background: "#fff" }}>
        {/* Hero */}
        <div style={{ position: "relative", width: "100%", height: 380, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/img/crane.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.45)",
          }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff", padding: "0 40px" }}>
            <h1 style={{ fontSize: "clamp(20px, 2.8vw, 38px)", fontWeight: 700, fontFamily: "'Libre Baskerville', Georgia, serif", color: "#fff", letterSpacing: 0.5, maxWidth: 860, margin: "0 auto 16px" }}>{project.title}</h1>
            {d?.sector && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>{d.sector} · {project.region}</p>}
          </div>
        </div>

        <div style={{ maxWidth: 980, margin: "0 auto", padding: "60px 40px 100px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 48, fontSize: 13, fontFamily: "'Lato', sans-serif", color: "#999" }}>
            <Link href="/projects" style={{ color: "#416ab3", textDecoration: "none" }}>Projects</Link>
            <span>›</span>
            <span style={{ color: "#555" }}>{project.title}</span>
          </div>

          {/* Content: table + image side by side */}
          <div style={{ display: "grid", gridTemplateColumns: d?.hasImage ? "1fr 1fr" : "1fr", gap: 48, marginBottom: 60 }}>
            {/* Info Table */}
            <div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {infoRows.map(({ label, value }) => (
                    <tr key={label} style={{ borderBottom: "1px solid #e5e7eb" }}>
                      <th style={{ padding: "14px 16px 14px 0", width: 130, textAlign: "left", fontSize: 12, fontWeight: 700, fontFamily: "'Lato', sans-serif", color: "#416ab3", letterSpacing: 0.5, verticalAlign: "top", whiteSpace: "nowrap" }}>
                        {label}
                      </th>
                      <td style={{ padding: "14px 0", fontSize: 14, fontFamily: "'Lato', sans-serif", color: "#333", lineHeight: 1.6 }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Image */}
            {d?.hasImage && (
              <div style={{ position: "relative", minHeight: 320, background: "#f4f4f4", borderRadius: 4, overflow: "hidden" }}>
                <Image
                  src={d.imgUrl ?? `/img/projects/${project.id}.${d?.imgExt ?? 'jpg'}`}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>

          {/* Case study (brochure Part B) */}
          {cs && (
            <div style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 12, letterSpacing: 2.5, color: "#0e7c86", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 10 }}>CASE STUDY · {cs.tag.toUpperCase()}</p>
              <h2 style={{ fontSize: 26, lineHeight: "34px", fontFamily: "'Libre Baskerville', Georgia, serif", fontWeight: 400, color: "#0b2545", marginBottom: 18 }}>{cs.headline}</h2>
              <p style={{ fontSize: 12, letterSpacing: 2, color: "#416ab3", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 8 }}>PROJECT HIGHLIGHTS</p>
              <ul style={{ margin: "0 0 26px 18px", fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#333", lineHeight: "26px" }}>
                {cs.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: "1px solid #e5e7eb" }}>
                {[["The challenge", cs.challenge], ["The solution", cs.solution], ["The result", cs.result]].map(([h, t], i) => (
                  <div key={h} style={{ padding: "20px 22px", borderLeft: i ? "1px solid #e5e7eb" : "none", background: i === 2 ? "#f4f7fb" : "#fff" }}>
                    <p style={{ fontSize: 11.5, letterSpacing: 2, color: "#0b2545", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 10 }}>{h.toUpperCase()}</p>
                    <p style={{ fontSize: 14.5, lineHeight: "24px", color: "#444", fontFamily: "'Lato', sans-serif" }}>{t}</p>
                    {i === 1 && cs.scope && (
                      <ul style={{ margin: "10px 0 0 18px", fontSize: 14, lineHeight: "23px", color: "#444", fontFamily: "'Lato', sans-serif" }}>
                        {cs.scope.map(s => <li key={s}>{s}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 14, fontSize: 14, color: "#555", fontFamily: "'Lato', sans-serif" }}>
                <b style={{ color: "#0e7c86", letterSpacing: 1, fontSize: 12 }}>WHAT IT MEANS FOR CLIENTS&nbsp;&nbsp;</b>{cs.relevance}
              </p>
            </div>
          )}

          {/* CTA */}
          <div style={{ background: "#416ab3", borderRadius: 4, padding: "36px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Libre Baskerville', Georgia, serif", color: "#fff", marginBottom: 8 }}>Interested in a similar project?</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>Contact us to discuss how we can support your next initiative.</p>
            </div>
            <Link href="/contact" style={{ whiteSpace: "nowrap", padding: "12px 28px", background: "#fff", color: "#416ab3", fontSize: 13, fontWeight: 700, fontFamily: "'Lato', sans-serif", textDecoration: "none", borderRadius: 2, letterSpacing: 0.5 }}>
              CONTACT US
            </Link>
          </div>

          {/* Back */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/projects" style={{ fontSize: 13, color: "#416ab3", fontFamily: "'Lato', sans-serif", textDecoration: "none" }}>
              ← Back to Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
