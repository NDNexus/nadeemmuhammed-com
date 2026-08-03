import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* =========================================================
     LEGACY URL REDIRECTS

     Preserve relevant URLs from the previous WordPress website
     by permanently redirecting them to their equivalent routes
     on the new website.
  ========================================================= */

  async redirects() {
    return [
      {
        source: "/about-me",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-me",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
