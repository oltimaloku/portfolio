import type { NextConfig } from "next";

// The site is exported as static HTML and served from GitHub Pages at
// oltimaloku.github.io/portfolio. CI sets NEXT_PUBLIC_BASE_PATH=/portfolio;
// locally it is empty so `npm run dev` serves from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
