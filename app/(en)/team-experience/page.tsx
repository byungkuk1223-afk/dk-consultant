"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMG } from "@/data/images";
import PageHero, { sx } from "@/components/PageHero";
import Link from "next/link";
import { TEAM_PROJECTS } from "@/data/teamProjects";
import { useI18n } from "@/lib/i18n";

export default function TeamExperiencePage() {
  const { lnk, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero
        title="Team Experience"
        subtitle="Plants our people engineered, built, and commissioned before they joined DKC."
        bg={IMG.teamExperience}
      />

      <section>
        <div style={sx.wrap}>
          <p style={sx.lead}>
            {tr("DKC's discipline leads joined from two groups that delivered coal-fired plants together: KEPCO E&C's thermal power engineering and POSCO E&C's power business.")}</p>
          <p style={sx.p}>
            {tr("The projects on this page are the career experience of DKC team members with their previous employers. They are listed separately from")}{" "}
            <a href={lnk("/projects")} style={{ color: "#416ab3", fontWeight: 700 }}>{tr("DKC's own projects")}</a>.
          </p>

          <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20, marginTop: 30 }}>
            {TEAM_PROJECTS.map((t) => (
              <Link key={t.slug} href={lnk(`/team-experience/${t.slug}`)} className="card-lift" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #e3e8ef" }}>
                <div style={{ height: 160, background: `url('${t.img}') center/cover no-repeat` }} />
                <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontSize: 11, letterSpacing: 1.8, color: "#0e7c86", fontWeight: 700, fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginBottom: 8 }}>{tr(t.tag).toUpperCase()}</p>
                  <p style={{ fontSize: 17, lineHeight: "24px", fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", color: "#0b2545", marginBottom: 10 }}>{tr(t.title)}</p>
                  <p style={{ fontSize: 14, lineHeight: "22px", color: "#55606d", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", flex: 1 }}>{tr(t.short)}</p>
                  <p style={{ fontSize: 12.5, color: "#7a8696", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginTop: 12, borderTop: "1px solid #eef1f5", paddingTop: 10 }}>
                    {tr(t.employer.replace(/ \(.*\)$/, ""))} · {tr(t.people.map((x) => x.name).join(", "))}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
