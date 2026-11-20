import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/ppp", destination: "/services#financial", permanent: false }];
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
