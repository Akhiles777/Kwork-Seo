import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true, 
  output: 'export',  


   images: {
    domains: ['i.postimg.cc'], 
    formats: ['image/webp'], 
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  
  compress: true,

};

export default nextConfig;
