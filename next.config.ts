import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true, 
  output: 'export',  


   images: {
  domains: ['i.postimg.cc'],
    formats: ['image/webp'],
  },
  
  


};

export default nextConfig;
