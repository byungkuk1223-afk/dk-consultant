"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero, { Bullets, sx } from "@/components/PageHero";
import { MARKET_PAGES, marketBySlug, serviceBySlug } from "@/data/site";
import { projects, marketOf, statusOf } from "@/data/projects";
import { profileFor } from "@/data/projectProfiles";

export default function MarketPage() {
  const { slug } = useParams();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const m = marketBySlug(String(slug));
  if (!m) {
    return (
      <>
        <Header scrolled={scrolled} />
        <main style={{ padding: "160px 24px", textAlign: "center" }}><Link href="/services">← Services</Link></main>
        <Footer />
      </>
    );
  }
  const list = projects
    .filter((p) => marketOf(p) === m.name)
    .sort((a, b) => Number(!!profileFor(b.id)) - Number(!!profileFor(a.id)));
  const featured = list.filter((p) => profileFor(p.id)).slice(0, 3);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero title={m.name} subtitle={m.lead} bg={m.img} />
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 30, flexWrap: "wrap" }}>
          {MARKET_PAGES.map((x) => (
            <Link key={x.slug} href={`/markets/${x.slug}`} style={{ padding: "18px 0", fontSize: 13.5, fontWeight: 700, color: x.slug === m.slug ? "#0b2545" : "#7a8696", borderBottom: x.slug === m.slug ? "2px solid #0b2545" : "2px solid transparent", fontFamily: "'Lato', sans-serif" }}>
              {x.name}
            </Link>
          ))}
        </div>
      </div>

      <section>
        <div style={{ ...sx.wrap, display: "grid", gridTemplateColumns: "minmax(0,1fr) 360px", gap: 50 }}>
          <div>
            <p style={sx.lead}>{m.text}</p>
            <p style={sx.label}>FOCUS AREAS</p>
            <Bullets items={m.focus} />
          </div>
          <aside style={{ border: "1px solid #e5e7eb", borderTop: "4px solid #0b2545", padding: "20px 22px", alignSelf: "start" }}>
            <p style={{ ...sx.label, marginTop: 0, color: "#0b2545" }}>SERVICES IN THIS MARKET</p>
            {m.services.map((s) => (
              <p key={s} style={{ marginBottom: 10 }}>
                <Link href={`/services/${s}`} style={{ color: "#416ab3", fontWeight: 700, fontSize: 14.5, fontFamily: "'Lato', sans-serif" }}>{serviceBySlug(s)?.title} →</Link>
              </p>
            ))}
          </aside>
        </div>
      </section>

      {featured.length > 0 && (
        <section style={{ background: "#f6f8fb" }}>
          <div style={sx.wrap}>
            <p style={sx.label}>FEATURED PROJECTS</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {featured.map((p) => {
                const pf = profileFor(p.id)!;
                return (
                  <Link key={p.id} href={`/projects/${p.id}`} style={{ display: "block", background: "#fff", border: "1px solid #e5e7eb", padding: "20px 20px 22px" }}>
                    <p style={{ fontSize: 11, letterSpacing: 1.8, color: "#0e7c86", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 8 }}>{pf.tag.toUpperCase()}</p>
                    <p style={{ fontSize: 16, lineHeight: "23px", fontFamily: "'Libre Baskerville', Georgia, serif", color: "#0b2545", marginBottom: 10 }}>{pf.headline}</p>
                    <p style={{ fontSize: 13.5, lineHeight: "21px", color: "#666", fontFamily: "'Lato', sans-serif" }}>{pf.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section>
        <div style={sx.wrap}>
          <p style={sx.label}>ALL {m.name.toUpperCase()} PROJECTS ({list.length})</p>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "14px 10px 14px 0" }}>
                    <Link href={`/projects/${p.id}`} style={{ fontSize: 14.5, color: "#1a1a1a", fontFamily: "'Lato', sans-serif" }}>{profileFor(p.id)?.headline ?? p.title}</Link>
                    <div style={{ fontSize: 12, color: "#999", fontFamily: "'Lato', sans-serif" }}>{p.category}</div>
                  </td>
                  <td style={{ padding: "14px 10px", fontSize: 12.5, color: "#777", fontFamily: "'Lato', sans-serif", whiteSpace: "nowrap" }}>{p.detail?.client}</td>
                  <td style={{ padding: "14px 10px", fontSize: 12.5, color: "#777", fontFamily: "'Lato', sans-serif", whiteSpace: "nowrap" }}>{p.detail?.time?.replace("~", " – ")}</td>
                  <td style={{ padding: "14px 0", fontSize: 11, color: "#0e7c86", fontWeight: 700, fontFamily: "'Lato', sans-serif" }}>{statusOf(p) === "Ongoing" ? "ONGOING" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
}
