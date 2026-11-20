"use client";
// Landing page sections. Structure follows common practice of engineering and advisory firms:
// hero → key figures → who we are → services → markets → featured projects → how we deliver → clients → careers / contact.
import Link from "next/link";
import { IMG, projectImg } from "@/data/images";
import { SERVICES, MARKET_PAGES } from "@/data/site";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/projectProfiles";

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const WRAP: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "84px 24px" };
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };
const H2: React.CSSProperties = { fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.25, fontFamily: SERIF, fontWeight: 400, color: NAVY, margin: 0 };
const MORE: React.CSSProperties = { color: "#416ab3", fontWeight: 700, fontSize: 14, fontFamily: F, whiteSpace: "nowrap" };

const CLIENT_LOGOS = [
  "1_1", "1_2", "1_3", "1_4", "2_1", "2_2", "2_3", "2_4", "2_5", "2_6",
  "2_7", "3_1", "3_2", "3_3", "3_4", "3_5", "3_6", "4_1", "4_2", "4_3",
].map((k) => `/img/img_04_02_${k}.jpg`);

function Head({ eyebrow, title, more }: { eyebrow: string; title: string; more?: { href: string; label: string } }) {
  return (
    <div className="rstack" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 34 }}>
      <div style={{ maxWidth: 760 }}>
        <p style={EYEBROW}>{eyebrow}</p>
        <h2 style={H2}>{title}</h2>
      </div>
      {more && <Link href={more.href} style={MORE}>{more.label} →</Link>}
    </div>
  );
}

export function HomeHero() {
  return (
    <section style={{ position: "relative", minHeight: "min(100vh, 860px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: NAVY }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(100deg, rgba(11,37,69,0.88) 0%, rgba(11,37,69,0.62) 48%, rgba(11,37,69,0.2) 100%), url('${IMG.homeHero}') center/cover no-repeat` }} />
      <div style={{ position: "relative", width: "100%", maxWidth: 1200, margin: "0 auto", padding: "150px 24px 96px", color: "#fff" }}>
        <p style={{ fontSize: 12, letterSpacing: 3, fontFamily: F, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
          POWER · CARBON CAPTURE · ENVIRONMENTAL INFRASTRUCTURE
        </p>
        <h1 style={{ fontSize: "clamp(32px, 4.4vw, 56px)", fontWeight: 400, fontFamily: SERIF, lineHeight: 1.18, margin: "0 0 26px", maxWidth: 900 }}>
          On the owner&apos;s side, from the first study to the day the plant runs.
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.4vw, 18px)", fontFamily: F, fontWeight: 300, color: "rgba(255,255,255,0.92)", lineHeight: 1.75, maxWidth: 720, marginBottom: 36 }}>
          A large energy project is shaped by a handful of early decisions: the design basis, how risk is shared across the
          contracts, and how the financing is structured. DK Consultants brings engineers, commercial advisors, and financiers
          to the owner&apos;s side of the table, so that those decisions are taken together, on the same numbers, and taken once.
        </p>
        <div className="rstack" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/services" style={{ background: "#fff", color: NAVY, padding: "15px 30px", fontSize: 12.5, letterSpacing: 1.6, fontWeight: 700, fontFamily: F, textAlign: "center" }}>OUR SERVICES</Link>
          <Link href="/projects" style={{ border: "1px solid rgba(255,255,255,0.75)", color: "#fff", padding: "15px 30px", fontSize: 12.5, letterSpacing: 1.6, fontWeight: 700, fontFamily: F, textAlign: "center" }}>SELECTED PROJECTS</Link>
        </div>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section>
      <div className="rg" style={{ ...WRAP, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)", gap: 64, alignItems: "start" }}>
        <div>
          <p style={EYEBROW}>WHO WE ARE</p>
          <h2 style={H2}>An advisor for projects that have to be built and financed at the same time.</h2>
        </div>
        <div>
          <p style={{ fontFamily: F, fontSize: 16.5, lineHeight: "29px", color: "#3d4752", marginBottom: 16 }}>
            DK Consultants works for project owners. Our Power Plant &amp; Environment practice manages the engineering of power and
            carbon capture projects from the design basis through construction and commissioning, with power plant and process
            engineers who have built such plants working in the same team as contract and project finance specialists.
          </p>
          <p style={{ fontFamily: F, fontSize: 16.5, lineHeight: "29px", color: "#3d4752", marginBottom: 22 }}>
            Since 2016 we have advised Korean public financiers, agencies, utilities, and EPC contractors on power, low-carbon
            fuel, and environmental projects in Asia, the Middle East, Africa, Europe, and the Americas.
          </p>
          <Link href="/about" style={MORE}>Who we are →</Link>
          <span style={{ display: "inline-block", width: 24 }} />
          <Link href="/people" style={MORE}>Our people →</Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section style={{ background: "#f6f8fb" }}>
      <div style={WRAP}>
        <Head eyebrow="SERVICES" title="Four services, one team, one project baseline" more={{ href: "/services", label: "All services" }} />
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card-lift" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #e3e8ef" }}>
              <div style={{ height: 170, background: `url('${s.img}') center/cover no-repeat` }} />
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{ fontFamily: SERIF, fontSize: 17.5, lineHeight: "25px", color: NAVY, marginBottom: 10 }}>{s.title}</p>
                <p style={{ fontFamily: F, fontSize: 14, lineHeight: "22px", color: "#55606d", flex: 1 }}>{s.short}</p>
                <p style={{ ...MORE, marginTop: 14, fontSize: 13 }}>Learn more →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketsGrid() {
  return (
    <section>
      <div style={WRAP}>
        <Head eyebrow="MARKETS" title="Where we work, and how we see each market" more={{ href: "/markets", label: "All markets" }} />
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {MARKET_PAGES.map((m) => (
            <Link key={m.slug} href={`/markets/${m.slug}`} className="card-lift" style={{ position: "relative", display: "block", minHeight: 260, overflow: "hidden", background: NAVY }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(11,37,69,0.92) 0%, rgba(11,37,69,0.35) 70%), url('${m.img}') center/cover no-repeat` }} />
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "24px 26px", color: "#fff" }}>
                <p style={{ fontFamily: SERIF, fontSize: 22, lineHeight: "29px", marginBottom: 8 }}>{m.name}</p>
                <p style={{ fontFamily: F, fontSize: 14.5, lineHeight: "22px", color: "rgba(255,255,255,0.88)", maxWidth: 480 }}>{m.lead}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const items = caseStudies.map((c) => ({ c, p: projects.find((x) => x.id === c.id)! })).filter((x) => x.p);
  return (
    <section>
      <div style={WRAP}>
        <Head eyebrow="FEATURED PROJECTS" title="Recent mandates" more={{ href: "/projects", label: `All ${projects.length} projects` }} />
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {items.map(({ c, p }) => (
            <Link key={c.id} href={`/projects/${c.id}`} className="card-lift" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #e3e8ef" }}>
              <div style={{ height: 180, background: `url('${projectImg(p)}') center/cover no-repeat` }} />
              <div style={{ padding: "18px 20px 22px" }}>
                <p style={{ fontSize: 11, letterSpacing: 1.6, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 8 }}>{c.tag.toUpperCase()}</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: "23px", color: NAVY, marginBottom: 10 }}>{c.headline}</p>
                <p style={{ fontFamily: F, fontSize: 12.5, color: "#7a8696" }}>{p.detail?.client}{p.detail?.time ? ` · ${p.detail.time.replace("~", "–")}` : ""}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliveryBand() {
  const pts = [
    { t: "One accountable director", d: "A single project director answers to the owner for the technical, commercial, and financial work." },
    { t: "One project baseline", d: "Design basis, cost estimate, contract terms, and financial model are updated together, never separately." },
    { t: "A documented review procedure", d: "Discipline review, a second check and approval before issue, and independent review by the lenders' engineer at the gates they set." },
  ];
  return (
    <section style={{ background: NAVY, color: "#fff" }}>
      <div style={WRAP}>
        <div className="rstack" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 36 }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ ...EYEBROW, color: "#8fd0d4" }}>HOW WE DELIVER</p>
            <h2 style={{ ...H2, color: "#fff" }}>The discipline behind every deliverable</h2>
          </div>
          <Link href="/delivery" style={{ ...MORE, color: "#fff" }}>How we deliver →</Link>
        </div>
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {pts.map((x, i) => (
            <div key={x.t} style={{ borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: 20 }}>
              <p style={{ fontFamily: SERIF, fontSize: 15, color: "#8fd0d4", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</p>
              <p style={{ fontFamily: SERIF, fontSize: 20, lineHeight: "28px", marginBottom: 10 }}>{x.t}</p>
              <p style={{ fontFamily: F, fontSize: 15, lineHeight: "24px", color: "rgba(255,255,255,0.82)" }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientStrip() {
  return (
    <section>
      <div style={{ ...WRAP, paddingBottom: 72 }}>
        <Head eyebrow="CLIENTS" title="Organizations we have advised" more={{ href: "/clients", label: "All clients" }} />
        <div className="rg logo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          {CLIENT_LOGOS.map((src) => (
            <div key={src} style={{ border: "1px solid #edf0f4", height: 86, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
              <img src={src} alt="" style={{ maxWidth: "80%", maxHeight: 62, objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareersContact() {
  return (
    <section style={{ background: "#f6f8fb" }}>
      <div className="rg" style={{ ...WRAP, display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: 20 }}>
        <Link href="/career" className="card-lift" style={{ position: "relative", minHeight: 300, display: "block", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(11,37,69,0.9) 0%, rgba(11,37,69,0.25) 75%), url('${IMG.careersBand}') center/cover no-repeat` }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "26px 28px", color: "#fff" }}>
            <p style={{ ...EYEBROW, color: "#8fd0d4" }}>CAREERS</p>
            <p style={{ fontFamily: SERIF, fontSize: 22, lineHeight: "30px", marginBottom: 10 }}>Engineers and financiers who want to see a project through</p>
            <p style={{ fontFamily: F, fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>Join DK Consultants →</p>
          </div>
        </Link>
        <div style={{ background: NAVY, color: "#fff", padding: "34px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 300 }}>
          <div>
            <p style={{ ...EYEBROW, color: "#8fd0d4" }}>CONTACT</p>
            <p style={{ fontFamily: SERIF, fontSize: 22, lineHeight: "30px", marginBottom: 12 }}>Planning a power, carbon capture, or environmental project?</p>
            <p style={{ fontFamily: F, fontSize: 15, lineHeight: "24px", color: "rgba(255,255,255,0.82)" }}>Tell us where the project stands. We will tell you how we can help on the owner&apos;s side.</p>
          </div>
          <Link href="/contact" style={{ alignSelf: "flex-start", marginTop: 22, background: "#fff", color: NAVY, padding: "13px 26px", fontSize: 12.5, letterSpacing: 1.5, fontWeight: 700, fontFamily: F }}>CONTACT US</Link>
        </div>
      </div>
    </section>
  );
}
