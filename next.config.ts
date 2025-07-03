// next.config.ts
import type { NextConfig } from 'next';

const repo = 'portfolio-2025';
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGhPages && isProd ? `/${repo}` : '',
  assetPrefix: isGhPages && isProd ? `/${repo}/` : '',
};

export default nextConfig;
