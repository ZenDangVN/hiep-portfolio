import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // xuất static HTML vào thư mục out/
  trailingSlash: true,    // /about → /about/index.html (GitHub Pages cần)
  images: {
    unoptimized: true,    // Next.js Image Optimization không hoạt động với static export
  },
  // Nếu deploy lên project page (username.github.io/ten-repo), bỏ comment dòng dưới:
  basePath: "/hiep-portfolio",
};

export default nextConfig;
