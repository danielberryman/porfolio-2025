import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: if deploying to a subpath like username.github.io/repo-name
  basePath: '/portfolio-2025',
  trailingSlash: true,
};

export default nextConfig;
