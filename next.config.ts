import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [96, 128, 180, 220, 280, 384, 520],
    formats: ['image/webp'],
    qualities: [55, 75],
    minimumCacheTTL: 2_678_400,
  },
};

export default nextConfig;
