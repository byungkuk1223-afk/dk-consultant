"use client";
import { useState } from "react";

interface HeaderProps {
  scrolled: boolean;
  solid?: boolean;
}

const MENU = [
              {
                label: "MARKETS",
                href: "/markets",
                sub: [
                  { label: "Power Generation", href: "/markets/power-generation" },
                  { label: "Carbon Capture & Low-Carbon Fuels", href: "/markets/carbon-capture" },
                  { label: "Environmental Infrastructure", href: "/markets/environmental-infrastructure" },
                  { label: "Industrial & Infrastructure", href: "/markets/industrial-infrastructure" },
                ],
              },
              {
                label: "SERVICES",
                href: "/services",
                sub: [
                  { label: "Engineering Management & Technical Advisory", href: "/services/engineering" },
                  { label: "Commercial & Contract Advisory", href: "/services/commercial" },
                  { label: "Financial Advisory & Capital Raising", href: "/services/financial" },
                  { label: "Bankable Feasibility & Project Development", href: "/services/development" },
                ],
              },
              {
                label: "PROJECTS",
                href: "/projects",
                sub: [
                  { label: "All Projects", href: "/projects" },
                  { label: "Team Experience", href: "/team-experience" },
                  { label: "Clients", href: "/clients" },
                ],
              },
              {
                label: "ABOUT",
                href: "/about",
                sub: [
                  { label: "Who We Are", href: "/about" },
                  { label: "How We Deliver", href: "/delivery" },
                  { label: "Our People", href: "/people" },
                ],
              },
              { label: "CAREERS", href: "/career", sub: [] },
            ];

export default function Header({ scrolled, solid }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const filled = scrolled || !!solid || open;
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: filled ? "rgba(11,37,69,0.97)" : "transparent",
        backgroundImage: filled ? "none" : "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
        transition: "background-color 0.3s ease, background-image 0.3s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "18px clamp(20px, 3vw, 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
          <img
            src="/logo-wordmark.png"
            alt="DK Consultants"
            style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Nav */}
        <nav className="hdr-nav">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: 48,
              alignItems: "center",
            }}
          >
            {MENU.map((item) => (
              <li key={item.label} className="nav-item" style={{ position: "relative" }}>
                <a
                  href={item.href}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 400,
                    fontFamily: "'Lato', sans-serif",
                    letterSpacing: 1.8,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </a>
                {item.sub && item.sub.length > 0 && (
                  <ul className="nav-dropdown">
                    {item.sub.map((s) => (
                      <li key={s.label}>
                        <a href={s.href}>{s.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hdr-contact"
          style={{
            color: "#fff",
            padding: "9px 22px",
            borderRadius: 0,
            textDecoration: "none",
            fontSize: 11,
            fontWeight: 400,
            fontFamily: "'Lato', sans-serif",
            letterSpacing: 2,
            border: "1px solid rgba(255,255,255,0.7)",
            background: "transparent",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          CONTACT
        </a>
        <button className="hdr-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      <style>{`
        .nav-item:hover .nav-dropdown { display: block; }
        .nav-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          min-width: 210px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.12);
          list-style: none;
          padding: 8px 0;
          padding-top: 22px;
          z-index: 200;
        }
        .nav-dropdown li a {
          display: block;
          padding: 11px 22px;
          color: #444;
          text-decoration: none;
          font-size: 13px;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          white-space: nowrap;
          transition: background 0.2s, color 0.2s;
        }
        .nav-dropdown li a:hover {
          background: #f0f4ff;
          color: #416ab3;
        }
      `}</style>
      <nav className={`hdr-mobile${open ? " open" : ""}`}>
        {MENU.map((item) => (
          <div key={item.label} className="grp">
            <a href={item.href}>{item.label}</a>
            {item.sub.length > 0 && (
              <div className="sub">{item.sub.map((x) => <a key={x.href} href={x.href}>{x.label}</a>)}</div>
            )}
          </div>
        ))}
        <div className="grp"><a href="/contact">CONTACT</a></div>
      </nav>
    </header>
  );
}
