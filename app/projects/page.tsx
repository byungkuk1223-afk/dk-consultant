"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, MARKETS, marketOf, statusOf } from "@/data/projects";
import { caseStudies } from "@/data/projectProfiles";

const REGIONS = ["All", "Asia", "Middle East·Africa", "Europe", "Oceania", "Latin America", "Northern America", "Etc."];
const PER_PAGE = 15;

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeRegion = searchParams.get("region") ?? "All";
  const activeMarket = searchParams.get("market") ?? "All";
  const page = Number(searchParams.get("page") ?? "1");
  const searchQuery = searchParams.get("q") ?? "";

  function updateParams(updates: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => {
      if (v && v !== "All" && v !== "1" && v !== "") params.set(k, v);
      else params.delete(k);
    });
    router.replace(`/projects?${params.toString()}`, { scroll: false });
  }

  const filtered = projects.filter(p => {
    const matchRegion = activeRegion === "All" || p.region === activeRegion;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchMarket = activeMarket === "All" || marketOf(p) === activeMarket;
    return matchRegion && matchSearch && matchMarket;
  });
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <Header scrolled={scrolled} />
      <main style={{ minHeight: "100vh", background: "#fff" }}>
        {/* Page Hero */}
        <section style={{
          position: "relative",
          width: "100%",
          height: 380,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/img/crane.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.45)",
          }} />
          <div style={{ position: "relative", zIndex: 1, paddingLeft: "28%", color: "#fff" }}>
            <h1 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 50, fontWeight: 400, margin: "0 0 14px 0", letterSpacing: 1 }}>
              Projects
            </h1>
            <p style={{ fontSize: 14, fontWeight: 300, margin: 0, letterSpacing: 0.2, lineHeight: 1.6 }}>
              Mandates DKC has delivered in its own name or with Synergy Korea. For the plants our people delivered before joining DKC, see Team Experience.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px 80px" }}>

          {/* Featured case studies */}
          {activeRegion === "All" && activeMarket === "All" && !searchQuery && page === 1 && (
            <div style={{ marginBottom: 44 }}>
              <p style={{ fontSize: 12, letterSpacing: 2.5, color: "#416ab3", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 14 }}>FEATURED CASE STUDIES</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {caseStudies.map(c => {
                  const p = projects.find(x => x.id === c.id);
                  return (
                    <a key={c.id} href={`/projects/${c.id}`} style={{ display: "block", background: "#fff", border: "1px solid #e5e7eb", borderTop: "4px solid #0b2545", padding: "18px 18px 20px", textDecoration: "none" }}>
                      <p style={{ fontSize: 10.5, letterSpacing: 1.8, color: "#0e7c86", fontWeight: 700, fontFamily: "'Lato', sans-serif", marginBottom: 8 }}>{c.tag.toUpperCase()}</p>
                      <p style={{ fontSize: 15, lineHeight: "21px", fontFamily: "'Libre Baskerville', Georgia, serif", color: "#0b2545", marginBottom: 10 }}>{c.headline}</p>
                      <p style={{ fontSize: 12, color: "#888", fontFamily: "'Lato', sans-serif" }}>{p?.detail?.client} · {p?.detail?.time}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Search Bar */}
          <form onSubmit={e => { e.preventDefault(); updateParams({ q: searchQuery, page: "1" }); }} style={{ display: "flex", gap: 0, marginBottom: 24 }}>
            <input
              type="text"
              value={searchQuery}
              onChange={e => updateParams({ q: e.target.value, page: "1" })}
              placeholder="Search projects..."
              style={{
                flex: 1,
                padding: "10px 16px",
                fontSize: 13,
                fontFamily: "'Lato', sans-serif",
                border: "1px solid #ddd",
                borderRight: "none",
                outline: "none",
                color: "#333",
                background: "#fff",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                fontSize: 13,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                background: "#416ab3",
                color: "#fff",
                border: "1px solid #416ab3",
                cursor: "pointer",
                letterSpacing: 0.5,
              }}
            >
              Search
            </button>
          </form>

          {/* Market Filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10, alignItems: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: 1.5, color: "#999", fontFamily: "'Lato', sans-serif", width: 70 }}>MARKET</span>
            {["All", ...MARKETS].map(m => (
              <button key={m} onClick={() => updateParams({ market: m, page: "1" })}
                style={{ padding: "7px 16px", fontSize: 12, fontFamily: "'Lato', sans-serif", border: "1px solid", borderColor: activeMarket === m ? "#0b2545" : "#ddd", background: activeMarket === m ? "#0b2545" : "#fff", color: activeMarket === m ? "#fff" : "#555", cursor: "pointer", borderRadius: 2 }}>
                {m}
              </button>
            ))}
          </div>

          {/* Region Filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32, alignItems: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: 1.5, color: "#999", fontFamily: "'Lato', sans-serif", width: 70 }}>REGION</span>
            {REGIONS.map(r => (
              <button key={r} onClick={() => updateParams({ region: r, page: "1" })}
                style={{ padding: "7px 18px", fontSize: 12, fontFamily: "'Lato', sans-serif", fontWeight: 400, border: "1px solid", borderColor: activeRegion === r ? "#416ab3" : "#ddd", background: activeRegion === r ? "#416ab3" : "#fff", color: activeRegion === r ? "#fff" : "#555", cursor: "pointer", borderRadius: 2, transition: "all 0.2s" }}>
                {r}
              </button>
            ))}
          </div>

          {/* Total Count */}
          <p style={{ fontSize: 13, color: "#999", fontFamily: "'Lato', sans-serif", marginBottom: 20 }}>Total {filtered.length} projects</p>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {paginated.map((p) => (
                <tr key={p.id}
                  onClick={() => router.push(`/projects/${p.id}`)}
                  style={{ borderTop: "1px solid #e5e7eb", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f8f9fc")}
                  onMouseLeave={e => (e.currentTarget.style.background = "")}>
                  <td style={{ padding: "18px 16px" }}>
                    <div style={{ fontSize: 14, fontWeight: 400, fontFamily: "'Lato', sans-serif", color: "#1a1a1a", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "#999", fontFamily: "'Lato', sans-serif" }}>{p.category}</div>
                  </td>
                  <td style={{ padding: "18px 10px", fontSize: 12, color: "#777", fontFamily: "'Lato', sans-serif", whiteSpace: "nowrap" }}>{marketOf(p)}</td>
                  <td style={{ padding: "18px 10px", fontSize: 12, color: "#777", fontFamily: "'Lato', sans-serif", whiteSpace: "nowrap" }}>{p.detail?.time}</td>
                  <td style={{ padding: "18px 10px", whiteSpace: "nowrap" }}>
                    {statusOf(p) === "Ongoing" && <span style={{ fontSize: 10.5, letterSpacing: 1, color: "#0e7c86", border: "1px solid #0e7c86", padding: "2px 7px", fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>ONGOING</span>}
                    {caseStudies.some(c => c.id === p.id) && <span style={{ fontSize: 10.5, letterSpacing: 1, color: "#0b2545", border: "1px solid #0b2545", padding: "2px 7px", marginLeft: 6, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>CASE STUDY</span>}
                  </td>
                  <td style={{ padding: "18px 16px", textAlign: "right", color: "#416ab3", fontSize: 18 }}>›</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 40 }}>
            <button onClick={() => updateParams({ page: "1" })} disabled={page === 1} style={{ padding: "6px 10px", fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 400, border: "1px solid #ddd", background: "#fff", cursor: page === 1 ? "default" : "pointer", color: page === 1 ? "#ccc" : "#555" }}>«</button>
            <button onClick={() => updateParams({ page: String(page - 1) })} disabled={page === 1} style={{ padding: "6px 10px", fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 400, border: "1px solid #ddd", background: "#fff", cursor: page === 1 ? "default" : "pointer", color: page === 1 ? "#ccc" : "#555" }}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => updateParams({ page: String(n) })} style={{ padding: "6px 12px", fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 400, border: "1px solid", borderColor: page === n ? "#416ab3" : "#ddd", background: page === n ? "#416ab3" : "#fff", color: page === n ? "#fff" : "#555", cursor: "pointer" }}>{n}</button>
            ))}
            <button onClick={() => updateParams({ page: String(page + 1) })} disabled={page === totalPages} style={{ padding: "6px 10px", fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 400, border: "1px solid #ddd", background: "#fff", cursor: page === totalPages ? "default" : "pointer", color: page === totalPages ? "#ccc" : "#555" }}>›</button>
            <button onClick={() => updateParams({ page: String(totalPages) })} disabled={page === totalPages} style={{ padding: "6px 10px", fontSize: 13, fontFamily: "'Lato', sans-serif", fontWeight: 400, border: "1px solid #ddd", background: "#fff", cursor: page === totalPages ? "default" : "pointer", color: page === totalPages ? "#ccc" : "#555" }}>»</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}
