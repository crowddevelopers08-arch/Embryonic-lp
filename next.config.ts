import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://embryonicfertilityivf.com/wp-content/uploads/**"),
      new URL("https://embryonicfertility.com/wp-content/uploads/**"),
    ],
  },
};

export default nextConfig;
