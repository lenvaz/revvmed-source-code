import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "",
  basePath: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "",
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'], // Preferred formats for optimization
    deviceSizes: [400, 800, 1200, 1600], // Match our conversion breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
