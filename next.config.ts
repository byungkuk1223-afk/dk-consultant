import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const base = [{ source: "/healthcare", destination: "/about", permanent: true },
      { source: "/projects/49", destination: "/projects/46", permanent: true },
      { source: "/projects/43", destination: "/projects/36", permanent: true },
      { source: "/projects/38", destination: "/projects/45", permanent: true },
      { source: "/ppp", destination: "/services#financial", permanent: false }];
    // Same redirects for the Korean pages (/ko/...).
    return [...base, ...base.map((r) => ({ ...r, source: `/ko${r.source}`, destination: `/ko${r.destination}` }))];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dk-consultant.com",
        pathname: "/data/file/**",
      },
    ],
  },
};

export default nextConfig;
