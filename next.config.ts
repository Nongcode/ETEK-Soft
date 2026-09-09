import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tu-van",
        destination: "/lien-he",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
