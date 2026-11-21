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
import { useI18n } from "@/lib/i18n";

const F = "'Lato', 'Noto Sans KR', sans-serif";
const SERIF = "'Libre Baskerville', 'Noto Serif KR', Georgia, serif";
const label: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.2, color: "#0e7c86", fontWeight: 700, fontFamily: F, marginBottom: 12 };
const h2: React.CSSProperties = { fontSize: 23, fontFamily: SERIF, fontWeight: 400, color: "#0b2545", margin: "0 0 14px" };
const p: React.CSSProperties = { fontSize: 15.5, lineHeight: "27px", color: "#3a3a3a", fontFamily: F, marginBottom: 14 };

// Heroes use the market's photograph: the legacy per-project images are small and some are illustrative, not of the project.
function imgOf(pr: Project) {
  return projectImg(pr);
}

export default function ProjectDetailPage() {
  const { lnk, tr } = useI18n();
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
            <p style={{ fontSize: 16, color: "#999", fontFamily: F }}>{tr("Project not found.")}</p>
            <Link href={lnk("/projects")} style={{ marginTop: 16, display: "inline-block", fontSize: 14, color: "#416ab3", fontFamily: F }}>{tr("← Back to Projects")}</Link>
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
    d?.client ? { k: "Client", v: tr(d.client) } : null,
    pf?.sponsor ? { k: "Developer", v: tr(pf.sponsor) } : null,
    { k: "Location", v: tr(pf?.location ?? d?.country ?? project.region) },
    pf?.capacity || d?.capacity ? { k: "Capacity", v: tr(pf?.capacity ?? d?.capacity) } : null,
    { k: "Market", v: mslug ? <Link href={lnk(`/markets/${mslug}`)} style={{ color: "#416ab3" }}>{tr(market)}</Link> : tr(market) },
    {
      k: "Services",
      v: services.map((s, i) => (
        <span key={s}>{i ? tr(", ") : ""}<Link href={lnk(`/services/${s}`)} style={{ color: "#416ab3" }}>{tr(serviceBySlug(s)?.title)}</Link></span>
      )),
    },
    d?.time ? { k: "Period", v: d.time.replace("~", " – ") } : null,
    { k: "Status", v: tr(statusOf(project)) },
    pf ? { k: "Delivered", v: tr(pf.delivered) } : null,
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
              <Link href={lnk("/projects")} style={{ color: "inherit" }}>{tr("PROJECTS")}</Link>
              {mslug && <> {tr(" / ")}{" "}<Link href={lnk(`/markets/${mslug}`)} style={{ color: "inherit" }}>{tr(market).toUpperCase()}</Link></>}
              {pf?.caseStudy && <span style={{ marginLeft: 12, border: "1px solid rgba(255,255,255,.7)", padding: "2px 8px" }}>{tr("FEATURED")}</span>}
            </p>
            <h1 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 400, fontFamily: SERIF, lineHeight: 1.2, maxWidth: 900 }}>{tr(pf?.headline ?? project.title)}</h1>
          </div>
        </div>

        {/* Body */}
        <div className="rg" style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 40px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 340px", gap: 56 }}>
          <div>
            <p style={{ fontSize: 19, lineHeight: "31px", color: "#0b2545", fontFamily: SERIF, marginBottom: 34 }}>
              {pf ? tr(pf.summary) : tr(d?.client ? (d?.country ? "{category} for {client} in {country}." : "{category} for {client}.") : d?.country ? "{category} in {country}." : "{category}.", { category: tr(project.category), client: tr(d?.client ?? ""), country: tr(d?.country ?? "") })}
            </p>

            {pf && pf.about.length > 0 && (
              <section style={{ marginBottom: 34 }}>
                <p style={label}>{tr("ABOUT THE PROJECT")}</p>
                {pf.about.map((t) => <p key={t} style={p}>{tr(t)}</p>)}
              </section>
            )}

            <section style={{ marginBottom: 34 }}>
              <p style={label}>{tr("DKC'S ROLE")}</p>
              <p style={p}>{tr(pf?.role ?? project.category)}</p>
              {pf && pf.scope.length > 0 && (
                <>
                  <h2 style={{ ...h2, fontSize: 18, marginTop: 6 }}>{tr("Scope")}</h2>
                  <ul style={{ margin: "0 0 0 20px", fontFamily: F, fontSize: 15.5, lineHeight: "27px", color: "#3a3a3a" }}>
                    {pf.scope.map((s) => <li key={s}>{tr(s)}</li>)}
                  </ul>
                </>
              )}
              {pf?.team && pf.team.length > 0 && (
                <>
                  <h2 style={{ ...h2, fontSize: 18, marginTop: 16 }}>{tr("DKC team")}</h2>
                  {pf.team.map((t) => (
                    <p key={t.name} style={{ ...p, marginBottom: 6 }}>
                      <Link href={lnk("/people")} style={{ color: "#0b2545", fontWeight: 700 }}>{tr(t.name)}</Link> — {tr(t.role)}
                    </p>
                  ))}
                </>
              )}
            </section>

            {pf?.challenge && (
              <section style={{ marginBottom: 34 }}>
                <p style={label}>{tr("CASE STUDY")}</p>
                <div className="rg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #e5e7eb" }}>
                  {[["The challenge", pf.challenge], ["The solution", pf.solution], ["The result", pf.result]].map(([h, t], i) => (
                    <div key={h} style={{ padding: "20px 20px", borderLeft: i ? "1px solid #e5e7eb" : "none", background: i === 2 ? "#f4f7fb" : "#fff" }}>
                      <p style={{ fontSize: 11.5, letterSpacing: 2, color: "#0b2545", fontWeight: 700, fontFamily: F, marginBottom: 10 }}>{tr(h ?? "").toUpperCase()}</p>
                      <p style={{ fontSize: 14.5, lineHeight: "24px", color: "#444", fontFamily: F }}>{tr(t)}</p>
                    </div>
                  ))}
                </div>
                {pf.relevance && (
                  <p style={{ marginTop: 14, fontSize: 14.5, color: "#555", fontFamily: F }}>
                    <b style={{ color: "#0e7c86", letterSpacing: 1, fontSize: 12 }}>{tr("WHAT IT MEANS FOR CLIENTS")}</b>{"  "}{tr(pf.relevance)}
                  </p>
                )}
                {pf.nextStep && (
                  <div style={{ marginTop: 16, borderLeft: "3px solid #0e7c86", background: "#f4f7fb", padding: "14px 18px" }}>
                    <p style={{ fontSize: 11.5, letterSpacing: 2, color: "#0e7c86", fontWeight: 700, fontFamily: F, marginBottom: 6 }}>{tr("NEXT STEP")}</p>
                    <p style={{ fontSize: 14.5, lineHeight: "24px", color: "#333", fontFamily: F }}>{tr(pf.nextStep)}</p>
                  </div>
                )}
              </section>
            )}

            {pf && pf.refs.length > 0 && (
              <section style={{ borderTop: "1px solid #e5e7eb", paddingTop: 18 }}>
                <p style={{ ...label, color: "#888", fontSize: 10.5 }}>{tr("PUBLIC INFORMATION ON THE PROJECT")}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {pf.refs.map((r) => (
                    <li key={r.url} style={{ fontSize: 12.5, lineHeight: "20px", fontFamily: F, marginBottom: 4 }}>
                      <a href={lnk(r.url)} target="_blank" rel="noopener noreferrer" style={{ color: "#5f6b7a" }}>{tr(r.label)} ↗</a>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 11.5, color: "#999", fontFamily: F, marginTop: 8 }}>
                  {tr("\"About the project\" summarizes published information on the project and its market. It does not describe DKC's findings; DKC's role is described separately above.")}</p>
              </section>
            )}
          </div>

          {/* Key facts */}
          <aside>
            <div style={{ border: "1px solid #e5e7eb", borderTop: "4px solid #0b2545", padding: "22px 22px 8px", position: "sticky", top: 90 }}>
              <p style={{ ...label, color: "#0b2545" }}>{tr("KEY FACTS")}</p>
              <dl style={{ margin: 0 }}>
                {facts.map((f) => (
                  <div key={f.k} style={{ borderTop: "1px solid #eef0f3", padding: "11px 0" }}>
                    <dt style={{ fontSize: 11, letterSpacing: 1.4, color: "#888", fontWeight: 700, fontFamily: F, marginBottom: 3 }}>{tr(f.k).toUpperCase()}</dt>
                    <dd style={{ margin: 0, fontSize: 14, lineHeight: "21px", color: "#222", fontFamily: F }}>{f.v}</dd>
                  </div>
                ))}
              </dl>
              <Link href={lnk("/contact")} style={{ display: "block", textAlign: "center", margin: "14px 0 14px", padding: "12px 10px", background: "#0b2545", color: "#fff", fontSize: 12, letterSpacing: 1.5, fontWeight: 700, fontFamily: F }}>
                {tr("DISCUSS A SIMILAR PROJECT")}</Link>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ background: "#f6f8fb", padding: "46px 0 60px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              <p style={label}>{tr("RELATED PROJECTS · {market}", { market: tr(market).toUpperCase() })}</p>
              <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {related.map((r) => {
                  const rp = profileFor(r.id);
                  return (
                    <Link key={r.id} href={lnk(`/projects/${r.id}`)} style={{ display: "block", background: "#fff", border: "1px solid #e5e7eb", borderTop: "3px solid #0b2545" }}>
                      <div style={{ padding: "16px 18px 20px" }}>
                        <p style={{ fontSize: 15.5, lineHeight: "22px", fontFamily: SERIF, color: "#0b2545", marginBottom: 8 }}>{tr(rp?.headline ?? r.title)}</p>
                        <p style={{ fontSize: 12.5, color: "#888", fontFamily: F }}>{tr(r.detail?.client)}{r.detail?.time ? ` · ${r.detail.time.replace("~", " – ")}` : ""}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              {mslug && <p style={{ marginTop: 22 }}><Link href={lnk(`/markets/${mslug}`)} style={{ color: "#416ab3", fontWeight: 700, fontSize: 14, fontFamily: F }}>{tr("All {market} projects →", { market: tr(market) })}</Link></p>}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
