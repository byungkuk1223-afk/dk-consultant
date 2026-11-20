"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, marketOf, statusOf, servicesOf, type Project } from "@/data/projects";
import { profileFor } from "@/data/projectProfiles";
import { marketBySlug, marketSlugOf, serviceBySlug } from "@/data/site";
import { projectImg } from "@/data/images";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const label: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.2, color: "#0e7c86", fontWeight: 700, fontFamily: F, marginBottom: 12 };
const h2: React.CSSProperties = { fontSize: 23, fontFamily: SERIF, fontWeight: 400, color: "#0b2545", margin: "0 0 14px" };
const p: React.CSSProperties = { fontSize: 15.5, lineHeight: "27px", color: "#3a3a3a", fontFamily: F, marginBottom: 14 };

// Heroes use the market's photograph: the legacy per-project images are small and some are illustrative, not of the project.
function imgOf(pr: Project) {
  return projectImg(pr);
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const project = projects.find((x) => x.id === Number(id));

  if (!project) {
    return (
      <>
        <Header scrolled={scrolled} />
        <main style={{ paddingTop: 80, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 16, color: "#999", fontFamily: F }}>Project not found.</p>
            <Link href="/projects" style={{ marginTop: 16, display: "inline-block", fontSize: 14, color: "#416ab3", fontFamily: F }}>← Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const d = project.detail;
  const pf = profileFor(project.id);
  const market = marketOf(project);
  const mslug = marketSlugOf(market);
  const services = servicesOf(project);
  const facts: { k: string; v: React.ReactNode }[] = [
    d?.client ? { k: "Client", v: d.client } : null,
    { k: "Location", v: pf?.location ?? d?.country ?? project.region },
    pf?.capacity || d?.capacity ? { k: "Capacity", v: pf?.capacity ?? d?.capacity } : null,
    { k: "Market", v: mslug ? <Link href={`/markets/${mslug}`} style={{ color: "#416ab3" }}>{market}</Link> : market },
    {
      k: "Services",
      v: services.map((s, i) => (
        <span key={s}>{i ? ", " : ""}<Link href={`/services/${s}`} style={{ color: "#416ab3" }}>{serviceBySlug(s)?.title}</Link></span>
      )),
    },
    d?.time ? { k: "Period", v: d.time.replace("~", " – ") } : null,
    { k: "Status", v: statusOf(project) },
    pf ? { k: "Delivered", v: pf.delivered } : null,
  ].filter(Boolean) as { k: string; v: React.ReactNode }[];

  const related = projects
    .filter((x) => x.id !== project.id && marketOf(x) === market)
    .sort((a, b) => Number(!!profileFor(b.id)) - Number(!!profileFor(a.id)))
    .slice(0, 3);

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ minHeight: "100vh", background: "#fff" }}>
        {/* Hero */}
        <div style={{ position: "relative", width: "100%", height: 420, overflow: "hidden", display: "flex", alignItems: "flex-end", background: "#0b2545" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${imgOf(project)}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.42)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, width: "100%", margin: "0 auto", padding: "0 24px 46px", color: "#fff" }}>
            <p style={{ fontSize: 12, letterSpacing: 2.4, fontWeight: 700, fontFamily: F, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
              <Link href="/projects" style={{ color: "inherit" }}>PROJECTS</Link>
              {mslug && <> &nbsp;/&nbsp; <Link href={`/markets/${mslug}`} style={{ color: "inherit" }}>{market.toUpperCase()}</Link></>}
              {pf?.caseStudy && <span style={{ marginLeft: 12, border: "1px solid rgba(255,255,255,.7)", padding: "2px 8px" }}>CASE STUDY</span>}
            </p>
            <h1 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 400, fontFamily: SERIF, lineHeight: 1.2, maxWidth: 900 }}>{pf?.headline ?? project.title}</h1>
          </div>
        </div>

        {/* Body */}
        <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 40px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 340px", gap: 56 }}>
          <div>
            <p style={{ fontSize: 19, lineHeight: "31px", color: "#0b2545", fontFamily: SERIF, marginBottom: 34 }}>
              {pf ? pf.summary : `${project.category}${d?.client ? ` for ${d.client}` : ""}${d?.country ? ` in ${d.country}` : ""}.`}
            </p>

            {pf && pf.about.length > 0 && (
              <section style={{ marginBottom: 34 }}>
                <p style={label}>ABOUT THE PROJECT</p>
                {pf.about.map((t) => <p key={t} style={p}>{t}</p>)}
              </section>
            )}

            <section style={{ marginBottom: 34 }}>
              <p style={label}>DKC&apos;S ROLE</p>
              <p style={p}>{pf?.role ?? project.category}</p>
              {pf && pf.scope.length > 0 && (
                <>
                  <h2 style={{ ...h2, fontSize: 18, marginTop: 6 }}>Scope</h2>
                  <ul style={{ margin: "0 0 0 20px", fontFamily: F, fontSize: 15.5, lineHeight: "27px", color: "#3a3a3a" }}>
                    {pf.scope.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </>
              )}
            </section>

            {pf?.challenge && (
              <section style={{ marginBottom: 34 }}>
                <p style={label}>CASE STUDY</p>
                <div className="rg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #e5e7eb" }}>
                  {[["The challenge", pf.challenge], ["The solution", pf.solution], ["The result", pf.result]].map(([h, t], i) => (
                    <div key={h} style={{ padding: "20px 20px", borderLeft: i ? "1px solid #e5e7eb" : "none", background: i === 2 ? "#f4f7fb" : "#fff" }}>
                      <p style={{ fontSize: 11.5, letterSpacing: 2, color: "#0b2545", fontWeight: 700, fontFamily: F, marginBottom: 10 }}>{h?.toUpperCase()}</p>
                      <p style={{ fontSize: 14.5, lineHeight: "24px", color: "#444", fontFamily: F }}>{t}</p>
                    </div>
                  ))}
                </div>
                {pf.relevance && (
                  <p style={{ marginTop: 14, fontSize: 14.5, color: "#555", fontFamily: F }}>
                    <b style={{ color: "#0e7c86", letterSpacing: 1, fontSize: 12 }}>WHAT IT MEANS FOR CLIENTS&nbsp;&nbsp;</b>{pf.relevance}
                  </p>
                )}
              </section>
            )}

            {pf && pf.refs.length > 0 && (
              <section style={{ borderTop: "1px solid #e5e7eb", paddingTop: 18 }}>
                <p style={{ ...label, color: "#888", fontSize: 10.5 }}>PUBLIC INFORMATION ON THE PROJECT</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {pf.refs.map((r) => (
                    <li key={r.url} style={{ fontSize: 12.5, lineHeight: "20px", fontFamily: F, marginBottom: 4 }}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#5f6b7a" }}>{r.label} ↗</a>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 11.5, color: "#999", fontFamily: F, marginTop: 8 }}>
                  &quot;About the project&quot; summarizes public sources on the project itself. DKC&apos;s role is described separately above.
                </p>
              </section>
            )}
          </div>

          {/* Key facts */}
          <aside>
            <div style={{ border: "1px solid #e5e7eb", borderTop: "4px solid #0b2545", padding: "22px 22px 8px", position: "sticky", top: 90 }}>
              <p style={{ ...label, color: "#0b2545" }}>KEY FACTS</p>
              <dl style={{ margin: 0 }}>
                {facts.map((f) => (
                  <div key={f.k} style={{ borderTop: "1px solid #eef0f3", padding: "11px 0" }}>
                    <dt style={{ fontSize: 11, letterSpacing: 1.4, color: "#888", fontWeight: 700, fontFamily: F, marginBottom: 3 }}>{f.k.toUpperCase()}</dt>
                    <dd style={{ margin: 0, fontSize: 14, lineHeight: "21px", color: "#222", fontFamily: F }}>{f.v}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/contact" style={{ display: "block", textAlign: "center", margin: "14px 0 14px", padding: "12px 10px", background: "#0b2545", color: "#fff", fontSize: 12, letterSpacing: 1.5, fontWeight: 700, fontFamily: F }}>
                DISCUSS A SIMILAR PROJECT
              </Link>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ background: "#f6f8fb", padding: "46px 0 60px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              <p style={label}>RELATED PROJECTS · {market.toUpperCase()}</p>
              <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {related.map((r) => {
                  const rp = profileFor(r.id);
                  return (
                    <Link key={r.id} href={`/projects/${r.id}`} style={{ display: "block", background: "#fff", border: "1px solid #e5e7eb", borderTop: "3px solid #0b2545" }}>
                      <div style={{ padding: "16px 18px 20px" }}>
                        <p style={{ fontSize: 15.5, lineHeight: "22px", fontFamily: SERIF, color: "#0b2545", marginBottom: 8 }}>{rp?.headline ?? r.title}</p>
                        <p style={{ fontSize: 12.5, color: "#888", fontFamily: F }}>{r.detail?.client}{r.detail?.time ? ` · ${r.detail.time.replace("~", " – ")}` : ""}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              {mslug && <p style={{ marginTop: 22 }}><Link href={`/markets/${mslug}`} style={{ color: "#416ab3", fontWeight: 700, fontSize: 14, fontFamily: F }}>All {market} projects →</Link></p>}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
