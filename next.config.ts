import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react", "framer-motion"],
  },
  compress: true,
};

export default nextConfig;
