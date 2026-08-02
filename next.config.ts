import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
  },
  // Allows the dev server (HMR/websocket + dev-only endpoints) to be reached
  // from a sandboxed/preview network address during local development.
  allowedDevOrigins: ["10.182.21.120", "localhost", "127.0.0.1"],
};

export default nextConfig;
