"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const REGIONS = ["All", "Asia", "Middle East·Africa", "Europe", "Oceania", "Latin America", "Northern America", "Etc."];
const PER_PAGE = 15;

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeRegion = searchParams.get("region") ?? "All";
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
    return matchRegion && matchSearch;
  });
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff" }}>
        {/* Page Hero */}
        <div style={{
          background: "linear-gradient(to right, rgba(20,30,60,0.55) 0%, rgba(20,30,60,0.3) 60%, rgba(20,30,60,0.15) 100%), url('/img/hero_bg.jpg') center/cover no-repeat",
          padding: "100px 40px 80px",
          textAlign: "center",
          marginTop: -80,
        }}>
          <p style={{ fontSize: 11, letterSpacing: 3.5, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", fontFamily: "'Lato', sans-serif", marginBottom: 14 }}>DK CONSULTANTS</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, fontFamily: "'Libre Baskerville', Georgia, serif", color: "#fff", letterSpacing: 0.5, marginBottom: 16 }}>Projects</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>List of finished projects we helped establish</p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px 80px" }}>
          {/* Sub Nav */}
          <div style={{ display: "flex", gap: 24, marginBottom: 32, borderBottom: "1px solid #e5e7eb", paddingBottom: 0 }}>
            {["Projects", "Clients"].map(tab => (
              <a key={tab} href={tab === "Clients" ? "/clients" : "/projects"}
                style={{ fontSize: 14, fontWeight: tab === "Projects" ? 700 : 400, fontFamily: "'Lato', sans-serif", color: tab === "Projects" ? "#416ab3" : "#666", textDecoration: "none", paddingBottom: 12, borderBottom: tab === "Projects" ? "2px solid #416ab3" : "2px solid transparent" }}>
                {tab}
              </a>
            ))}
          </div>

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
                fontWeight: 600,
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

          {/* Region Filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {REGIONS.map(r => (
              <button key={r} onClick={() => updateParams({ region: r, page: "1" })}
                style={{ padding: "7px 18px", fontSize: 12, fontFamily: "'Lato', sans-serif", fontWeight: 500, border: "1px solid", borderColor: activeRegion === r ? "#416ab3" : "#ddd", background: activeRegion === r ? "#416ab3" : "#fff", color: activeRegion === r ? "#fff" : "#555", cursor: "pointer", borderRadius: 2, transition: "all 0.2s" }}>
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
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'Lato', sans-serif", color: "#1a1a1a", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "#999", fontFamily: "'Lato', sans-serif" }}>{p.category}</div>
                  </td>
                  <td style={{ padding: "18px 16px", textAlign: "right", color: "#416ab3", fontSize: 18 }}>›</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 40 }}>
            <button onClick={() => updateParams({ page: "1" })} disabled={page === 1} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === 1 ? "default" : "pointer", color: page === 1 ? "#ccc" : "#555" }}>«</button>
            <button onClick={() => updateParams({ page: String(page - 1) })} disabled={page === 1} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === 1 ? "default" : "pointer", color: page === 1 ? "#ccc" : "#555" }}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => updateParams({ page: String(n) })} style={{ padding: "6px 12px", fontSize: 13, border: "1px solid", borderColor: page === n ? "#416ab3" : "#ddd", background: page === n ? "#416ab3" : "#fff", color: page === n ? "#fff" : "#555", cursor: "pointer" }}>{n}</button>
            ))}
            <button onClick={() => updateParams({ page: String(page + 1) })} disabled={page === totalPages} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === totalPages ? "default" : "pointer", color: page === totalPages ? "#ccc" : "#555" }}>›</button>
            <button onClick={() => updateParams({ page: String(totalPages) })} disabled={page === totalPages} style={{ padding: "6px 10px", fontSize: 13, border: "1px solid #ddd", background: "#fff", cursor: page === totalPages ? "default" : "pointer", color: page === totalPages ? "#ccc" : "#555" }}>»</button>
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
