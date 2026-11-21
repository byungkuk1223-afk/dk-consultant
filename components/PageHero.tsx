"use client";
import { useI18n } from "@/lib/i18n";

export default function PageHero({ title, subtitle, bg }: { title: string; subtitle: string; bg: string }) {
  const { tr } = useI18n();
  // Title starts on the same left edge as the page body (1200px container with 24px gutters).
  return (
    <section className="page-hero" style={{ position: "relative", width: "100%", minHeight: 380, overflow: "hidden", display: "flex", alignItems: "center", background: "#0b2545" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center 40%", filter: "brightness(0.45)" }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "110px 24px 56px", color: "#fff" }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.2, fontWeight: 400, margin: "0 0 14px 0", letterSpacing: 0.5, maxWidth: 900 }}>
          {tr(title)}
        </h1>
        <p style={{ fontSize: 17, fontWeight: 300, margin: 0, lineHeight: 1.6, fontFamily: "'Lato', 'Noto Sans KR', sans-serif", maxWidth: 820 }}>{tr(subtitle)}</p>
      </div>
    </section>
  );
}

export const sx = {
  wrap: { maxWidth: 1200, margin: "0 auto", padding: "70px 24px" } as React.CSSProperties,
  h2: {
    color: "#000",
    fontSize: 34,
    fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif",
    fontWeight: "normal",
    borderBottom: "2px solid #ddd",
    paddingBottom: 18,
    marginBottom: 22,
  } as React.CSSProperties,
  lead: { color: "#416ab3", fontSize: 19, lineHeight: "30px", fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", marginBottom: 18 } as React.CSSProperties,
  p: { color: "#555", fontSize: 16, lineHeight: "28px", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginBottom: 16 } as React.CSSProperties,
  label: { fontSize: 12, letterSpacing: 2.5, color: "#416ab3", fontWeight: 700, fontFamily: "'Lato', 'Noto Sans KR', sans-serif", margin: "28px 0 12px" } as React.CSSProperties,
  th: { background: "#0b2545", color: "#fff", fontSize: 12, letterSpacing: 1, textAlign: "left", padding: "12px 14px", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", fontWeight: 700 } as React.CSSProperties,
  td: { borderBottom: "1px solid #e5e7eb", fontSize: 14, color: "#333", padding: "12px 14px", verticalAlign: "top", lineHeight: 1.55, fontFamily: "'Lato', 'Noto Sans KR', sans-serif" } as React.CSSProperties,
  img: { width: "100%", height: "auto", display: "block", border: "1px solid #eee" } as React.CSSProperties,
  note: { fontSize: 13, color: "#888", fontFamily: "'Lato', 'Noto Sans KR', sans-serif", marginTop: 8, lineHeight: 1.6 } as React.CSSProperties,
};

export function Table({ head, rows, widths }: { head: string[]; rows: string[][]; widths?: string[] }) {
  const { tr } = useI18n();
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 10px" }}>
      <thead>
        <tr>
          {head.map((h, i) => (
            <th key={h} style={{ ...sx.th, width: widths?.[i] }}>{tr(h).toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ background: i % 2 ? "#f7f9fc" : "#fff" }}>
            {r.map((c, j) => (
              <td key={j} style={{ ...sx.td, fontWeight: j === 0 ? 700 : 400 }}>{tr(c)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Bullets({ items }: { items: string[] }) {
  const { tr } = useI18n();
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 10px" }}>
      {items.map((it) => (
        <li key={it} style={{ position: "relative", padding: "6px 0 6px 22px", color: "#444", fontSize: 15, lineHeight: "24px", fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>
          <span style={{ position: "absolute", left: 4, top: 15, width: 6, height: 6, borderRadius: "50%", background: "#416ab3" }} />
          {tr(it)}
        </li>
      ))}
    </ul>
  );
}
