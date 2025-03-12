import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    includePaths: [path.join(__dirname, "src/sass")],
    preparedData: `@import "main.sass"`
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
