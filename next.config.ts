import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.mariomon.dev",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Performance
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },

          // Privacy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // Get back X-Content-Type-Options
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // Critical: CSP (Vercel doesn't provide this)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://static.cloudflareinsights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https://assets.mariomon.dev",
              "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com https://cloudflareinsights.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },

          // Privacy: Block unnecessary browser features
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
