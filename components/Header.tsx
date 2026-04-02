"use client";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(58,85,133,0.97)" : "rgba(0,0,0,0)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "18px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="DK Consultants"
            style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Nav */}
        <nav>
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
            {[
              {
                label: "ABOUT US",
                href: "/about",
                sub: [
                  { label: "About DK Consultants", href: "/about" },
                  { label: "PPP Unit", href: "/ppp" },
                  { label: "Healthcare Unit", href: "/healthcare" },
                  { label: "Our People", href: "/people" },
                ],
              },
              {
                label: "SERVICES",
                href: "/services",
                sub: [
                  { label: "Financial Advisory", href: "/services/financial" },
                  { label: "Healthcare Advisory", href: "/services/healthcare" },
                ],
              },
              {
                label: "PROJECTS",
                href: "/projects",
                sub: [
                  { label: "Projects", href: "/projects" },
                  { label: "Clients", href: "/clients" },
                ],
              },
              { label: "CAREER", href: "/career", sub: [] },
            ].map((item) => (
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
      </div>

      <style>{`
        .nav-item:hover .nav-dropdown { display: block; }
        .nav-dropdown {
          display: none;
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          min-width: 210px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.12);
          list-style: none;
          padding: 8px 0;
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
    </header>
  );
}
