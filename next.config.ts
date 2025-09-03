import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  experimental: {
    imgOptTimeoutInSeconds: 30, // Increase from default 7 seconds
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
