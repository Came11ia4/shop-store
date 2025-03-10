import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'duyi-resource.oss-cn-beijing.aliyuncs.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
