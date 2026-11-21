"use client";
// Global footprint: map of the countries in DKC's project list, grouped into regions.
// Built from data/projects.ts so it stays current; marker positions come from data/worldMap.ts.
import { projects, marketOf } from "@/data/projects";
import { MAP_W, MAP_H, LAND_SVG, COUNTRY_XY, HQ_XY } from "@/data/worldMap";
import { useI18n } from "@/lib/i18n";

const F = "'Lato', 'Noto Sans KR', sans-serif";
const SERIF = "'Libre Baskerville', 'Noto Serif KR', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";

const REGIONS: { name: string; countries: string[] }[] = [
  { name: "North America", countries: ["USA", "Canada"] },
  { name: "Latin America", countries: ["Dominican Republic", "Argentina", "Bolivia"] },
  { name: "Europe", countries: ["Spain", "Ireland"] },
  { name: "Middle East & Africa", countries: ["UAE", "Oman", "Kuwait", "Qatar", "Saudi Arabia", "Iraq", "Cameroon"] },
  { name: "Central Asia", countries: ["Uzbekistan", "Kyrgyzstan", "Kazakhstan"] },
  { name: "South Asia", countries: ["India", "Nepal", "Bangladesh", "Sri Lanka"] },
  { name: "Southeast Asia", countries: ["Indonesia", "Vietnam", "Philippines", "Thailand", "Laos", "Cambodia"] },
  { name: "East Asia & Oceania", countries: ["Korea", "Australia"] },
];

const SHORT: Record<string, string> = {
  "Power Generation": "power generation",
  "Carbon Capture & Low-Carbon Fuels": "hydrogen, ammonia, and carbon capture",
  "Environmental Infrastructure": "environmental infrastructure",
  "Industrial & Infrastructure": "industrial and infrastructure",
  "Healthcare": "healthcare",
};

const countriesOf = (country?: string) => (country ?? "").split(/,|&|\/| and /).map((c) => c.trim()).filter(Boolean);

export default function GlobalFootprint({ background = "#fff" }: { background?: string }) {
  const { lnk, tr } = useI18n();
  const present = new Set(projects.flatMap((p) => countriesOf(p.detail?.country)));
  const regions = REGIONS.map((r) => {
    const cs = r.countries.filter((c) => present.has(c));
    const ps = projects.filter((p) => countriesOf(p.detail?.country).some((c) => cs.includes(c)));
    const types = [...new Set(ps.map((p) => SHORT[marketOf(p)] ?? marketOf(p).toLowerCase()))];
    return { ...r, countries: cs, types };
  }).filter((r) => r.countries.length > 0);
  const markers = [...present].filter((c) => COUNTRY_XY[c]);

  return (
    <section style={{ background }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: 48, marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 }}>{tr("GLOBAL FOOTPRINT")}</p>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.25, fontFamily: SERIF, fontWeight: 400, color: NAVY }}>
              {tr("Advising where Korean engineering and capital meet the world's power and environmental needs")}</h2>
          </div>
          <div>
            <p style={{ fontFamily: F, fontSize: 16, lineHeight: "28px", color: "#3d4752", marginBottom: 12 }}>
              {tr("DKC is based in Seongnam, Korea, and has advised on projects in {n} countries across Asia, the Middle East, Africa, Europe, and the Americas, mostly for Korea's public financiers or for Korean EPC contractors and utilities entering new markets.", { n: present.size })}
            </p>
            <p style={{ fontFamily: F, fontSize: 16, lineHeight: "28px", color: "#3d4752" }}>
              {tr("Local reach comes from partners: a partnership with Synergy Consulting since 2016, with joint mandates as Synergy Korea.")}</p>
          </div>
        </div>

        <div style={{ position: "relative", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label={tr("Map of {n} countries where DKC has advised on projects", { n: present.size })}>
            <image href={LAND_SVG} x={0} y={0} width={MAP_W} height={MAP_H} />
            {markers.map((c) => {
              const [x, y] = COUNTRY_XY[c];
              return (
                <g key={c}>
                  <circle cx={x} cy={y} r={9} fill={TEAL} opacity={0.18} />
                  <circle cx={x} cy={y} r={4.2} fill={TEAL} stroke="#fff" strokeWidth={1.2}>
                    <title>{tr(c)}</title>
                  </circle>
                </g>
              );
            })}
            <g transform={`translate(${HQ_XY[0]} ${HQ_XY[1]})`}>
              <path d="M0,-9 L2.6,-2.8 L9,-2.8 L3.8,1.2 L5.7,7.6 L0,3.8 L-5.7,7.6 L-3.8,1.2 L-9,-2.8 L-2.6,-2.8 Z" fill={NAVY} stroke="#fff" strokeWidth={1}>
                <title>{tr("DKC head office, Seongnam, Korea")}</title>
              </path>
            </g>
          </svg>
          <div style={{ display: "flex", gap: 22, justifyContent: "center", flexWrap: "wrap", fontFamily: F, fontSize: 13, color: "#6b7580", marginTop: 8 }}>
            <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: TEAL, marginRight: 6 }} />{tr("Project location")}</span>
            <span><span style={{ color: NAVY, marginRight: 6 }}>★</span>{tr("DKC head office, Seongnam, Korea")}</span>
          </div>
        </div>

        <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 14, marginTop: 30 }}>
          {regions.map((r) => (
            <div key={r.name} style={{ border: "1px solid #e3e8ef", borderTop: `3px solid ${TEAL}`, padding: "16px 18px", background: "#fff" }}>
              <p style={{ fontFamily: F, fontSize: 13, letterSpacing: 1.4, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{tr(r.name).toUpperCase()}</p>
              <p style={{ fontFamily: F, fontSize: 13.5, color: TEAL, lineHeight: "20px", marginBottom: 8 }}>{r.countries.map((c) => tr(c)).join(", ")}</p>
              <p style={{ fontFamily: F, fontSize: 13.5, color: "#55606d", lineHeight: "20px" }}>
                {r.types.map((x) => tr(x)).join("; ").replace(/^./, (c) => c.toUpperCase())}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
