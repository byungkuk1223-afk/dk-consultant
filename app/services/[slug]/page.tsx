"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero, { sx } from "@/components/PageHero";
import { EngineeringSection, CommercialSection, FinancialSection, DevelopmentSection } from "@/components/services/Sections";
import { SERVICES, serviceBySlug, type ServiceSlug } from "@/data/site";
import { projects, servicesOf } from "@/data/projects";
import { profileFor } from "@/data/projectProfiles";

const SECTION: Record<ServiceSlug, () => React.ReactElement> = {
  engineering: EngineeringSection,
  commercial: CommercialSection,
  financial: FinancialSection,
  development: DevelopmentSection,
};

export default function ServicePage() {
  const { slug } = useParams();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const svc = serviceBySlug(String(slug));
  if (!svc) {
    return (
      <>
        <Header scrolled={scrolled} />
        <main style={{ padding: "160px 24px", textAlign: "center" }}><Link href="/services">← All services</Link></main>
        <Footer />
      </>
    );
  }
  const Body = SECTION[svc.slug];
  const featured = projects
    .filter((p) => servicesOf(p).includes(svc.slug))
    .sort((a, b) => Number(!!profileFor(b.id)) - Number(!!profileFor(a.id)))
    .slice(0, 6);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero title={svc.title} subtitle={svc.lead} bg={svc.img} />
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 30, flexWrap: "wrap" }}>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} style={{ padding: "18px 0", fontSize: 13.5, fontWeight: 700, color: s.slug === svc.slug ? "#0b2545" : "#7a8696", borderBottom: s.slug === svc.slug ? "2px solid #0b2545" : "2px solid transparent", fontFamily: "'Lato', sans-serif" }}>
              {s.title}
            </Link>
          ))}
        </div>
      </div>

      <Body />

      <section style={{ background: "#f6f8fb" }}>
        <div style={sx.wrap}>
          {svc.slug === "engineering" ? (
            <>
              <p style={sx.label}>EXPERIENCE BEHIND THIS SERVICE</p>
              <p style={sx.p}>
                DKC&apos;s engineering management team brings design, construction, and commissioning experience on large coal-fired units,
                circulating fluidized bed boilers, and a commercial carbon capture plant, gained before joining DKC.
              </p>
              <p style={sx.p}>
                <Link href="/team-experience" style={{ color: "#416ab3", fontWeight: 700 }}>Team experience →</Link>&nbsp;&nbsp;
                <Link href="/people" style={{ color: "#416ab3", fontWeight: 700 }}>Our people →</Link>
              </p>
            </>
          ) : (
            <>
              <p style={sx.label}>SELECTED PROJECTS</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                {featured.map((p) => (
                  <Link key={p.id} href={`/projects/${p.id}`} style={{ display: "block", background: "#fff", border: "1px solid #e5e7eb", padding: "18px 18px 20px" }}>
                    <p style={{ fontSize: 15.5, lineHeight: "22px", fontFamily: "'Libre Baskerville', Georgia, serif", color: "#0b2545", marginBottom: 8 }}>{profileFor(p.id)?.headline ?? p.title}</p>
                    <p style={{ fontSize: 12.5, color: "#888", fontFamily: "'Lato', sans-serif" }}>{p.detail?.client}{p.detail?.time ? ` · ${p.detail.time.replace("~", " – ")}` : ""}</p>
                  </Link>
                ))}
              </div>
              <p style={{ ...sx.p, marginTop: 20 }}><Link href="/projects" style={{ color: "#416ab3", fontWeight: 700 }}>All projects →</Link></p>
            </>
          )}
        </div>
      </section>

      <section style={{ background: "#0b2545" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <p style={{ color: "#fff", fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 22, lineHeight: "30px", maxWidth: 760 }}>
            Discuss how DKC can support your project on the owner&apos;s side.
          </p>
          <Link href="/contact" style={{ background: "#fff", color: "#0b2545", padding: "13px 26px", fontSize: 12.5, letterSpacing: 1.5, fontWeight: 700, fontFamily: "'Lato', sans-serif" }}>CONTACT US</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
