import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com"], // Add domains if loading images from external sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images
      },
    ],
  },
};

export default nextConfig;
