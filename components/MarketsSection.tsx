import Link from "next/link";
import { MARKET_PAGES } from "@/data/site";

export default function MarketsSection() {
  return (
    <section style={{ background: "#fff", padding: "70px 40px 76px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "#aaa", fontFamily: "'Lato', sans-serif", marginBottom: 14 }}>DK CONSULTANTS</p>
          <h2 style={{ fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 700, fontFamily: "'Libre Baskerville', Georgia, serif", color: "#1a1a1a" }}>Markets</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {MARKET_PAGES.map((m) => (
            <Link key={m.slug} href={`/markets/${m.slug}`} style={{ display: "block", border: "1px solid #e5e7eb", background: "#fff" }}>
              <div style={{ height: 150, backgroundImage: `url('${m.img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "18px 18px 22px" }}>
                <p style={{ fontSize: 17, fontFamily: "'Libre Baskerville', Georgia, serif", color: "#0b2545", marginBottom: 8, lineHeight: "23px" }}>{m.name}</p>
                <p style={{ fontSize: 13.5, lineHeight: "21px", color: "#666", fontFamily: "'Lato', sans-serif" }}>{m.lead}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
