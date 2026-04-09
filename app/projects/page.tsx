"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, type Region } from "@/data/projects";

const REGIONS: (Region | "All")[] = [
  "All",
  "Asia",
  "Middle East·Africa",
  "Europe",
  "Oceania",
  "Latin America",
  "Northern America",
  "Etc.",
];

const PER_PAGE = 15;

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeRegion, setActiveRegion] = useState<Region | "All">("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered =
    activeRegion === "All"
      ? projects
      : projects.filter((p) => p.region === activeRegion);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleRegionChange(region: Region | "All") {
    setActiveRegion(region);
    setPage(1);
  }

  return (
    <>
      <Header scrolled={scrolled} />

      {/* Page Hero */}
      <div
        style={{
          background: "#416ab3",
          padding: "110px 40px 50px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: 3.5,
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            fontFamily: "'Lato', sans-serif",
            marginBottom: 14,
          }}
        >
          DK CONSULTANTS
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#fff",
            letterSpacing: 0.5,
          }}
        >
          Projects
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            marginTop: 14,
          }}
        >
          List of finished projects we helped establish
        </p>
      </div>

      {/* Region Filter Tabs */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => handleRegionChange(r)}
              style={{
                padding: "16px 22px",
                border: "none",
                borderBottom:
                  activeRegion === r
                    ? "3px solid #416ab3"
                    : "3px solid transparent",
                background: "none",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "'Lato', sans-serif",
                fontWeight: activeRegion === r ? 700 : 400,
                color: activeRegion === r ? "#416ab3" : "#555",
                letterSpacing: 0.5,
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div
        style={{
          background: "#f7f8fa",
          minHeight: "60vh",
          padding: "48px 40px 80px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 13,
              color: "#999",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              marginBottom: 24,
            }}
          >
            Total {filtered.length} projects
            {activeRegion !== "All" && ` in ${activeRegion}`}
          </p>

          {/* Board Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      padding: "60px 28px",
                      textAlign: "center",
                      color: "#bbb",
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 14,
                    }}
                  >
                    No projects found.
                  </td>
                </tr>
              ) : (
                paginated.map((p, idx) => (
                  <tr
                    key={p.id}
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      background: idx % 2 === 0 ? "#fff" : "#fafafa",
                      cursor: "default",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLTableRowElement).style.background =
                        "#f0f4ff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLTableRowElement).style.background =
                        idx % 2 === 0 ? "#fff" : "#fafafa";
                    }}
                  >
                    {/* Subject: title + service type stacked */}
                    <td style={{ padding: "18px 28px", width: "100%" }}>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: 15,
                          fontWeight: 400,
                          fontFamily: "'Lato', sans-serif",
                          color: "#222",
                          lineHeight: 1.5,
                        }}
                      >
                        {p.title}
                      </h4>
                      <p
                        style={{
                          margin: "5px 0 0",
                          fontSize: 12,
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 300,
                          color: "#888",
                          lineHeight: 1.4,
                        }}
                      >
                        {p.category}
                      </p>
                    </td>

                    {/* Arrow */}
                    <td
                      style={{
                        padding: "18px 24px 18px 0",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          border: "1px solid #ccc",
                          color: "#416ab3",
                          fontSize: 16,
                          lineHeight: 1,
                        }}
                      >
                        ›
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                marginTop: 40,
              }}
            >
              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: page === 1 ? "default" : "pointer",
                  color: page === 1 ? "#ccc" : "#555",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12,
                }}
              >
                «
              </button>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: page === 1 ? "default" : "pointer",
                  color: page === 1 ? "#ccc" : "#555",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 13,
                }}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  style={{
                    padding: "8px 13px",
                    border: "1px solid",
                    borderColor: page === n ? "#416ab3" : "#ddd",
                    background: page === n ? "#416ab3" : "#fff",
                    color: page === n ? "#fff" : "#555",
                    cursor: "pointer",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 13,
                    fontWeight: page === n ? 700 : 400,
                    transition: "all 0.15s",
                  }}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: page === totalPages ? "default" : "pointer",
                  color: page === totalPages ? "#ccc" : "#555",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 13,
                }}
              >
                ›
              </button>
              <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: page === totalPages ? "default" : "pointer",
                  color: page === totalPages ? "#ccc" : "#555",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12,
                }}
              >
                »
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
