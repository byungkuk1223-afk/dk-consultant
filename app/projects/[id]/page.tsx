"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <>
        <Header scrolled={true} />
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
  const infoRows = [
    d?.capacity && { label: "Capacity", value: d.capacity },
    d?.sector && { label: "Sector", value: d.sector },
    d?.country && { label: "Country", value: d.country },
    d?.client && { label: "Client", value: d.client },
    d?.time && { label: "Period", value: d.time },
    { label: "Our Role", value: project.category },
    { label: "Region", value: project.region },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>
        {/* Hero */}
        <div style={{
          background: "linear-gradient(to right, rgba(20,30,60,0.55) 0%, rgba(20,30,60,0.3) 60%, rgba(20,30,60,0.15) 100%), url('/img/hero_bg.jpg') center/cover no-repeat",
          padding: "100px 40px 80px",
          textAlign: "center",
          marginTop: -80,
        }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 14 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(20px, 2.8vw, 38px)", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", letterSpacing: 0.5, maxWidth: 860, margin: "0 auto 16px" }}>{project.title}</h1>
          {d?.sector && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>{d.sector} · {project.region}</p>}
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

          {/* CTA */}
          <div style={{ background: "#416ab3", borderRadius: 4, padding: "36px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#fff", marginBottom: 8 }}>Interested in a similar project?</h3>
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
