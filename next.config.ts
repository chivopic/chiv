import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid flaky parallel NFT/trace races on this environment
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
