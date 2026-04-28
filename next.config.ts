import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
