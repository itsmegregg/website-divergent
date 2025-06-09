import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static HTML export for cPanel deployment
  images: {
    unoptimized: true,  // Required for static export with Next.js Image component
    domains: [
      'img.freepik.com', 
      'encrypted-tbn0.gstatic.com',
      'contents.smsupermalls.com', 
      'www.smsupermalls.com', 
      'static.wixstatic.com',
      'w7.pngwing.com', 
      'pbs.twimg.com', 
      'theorangebucket.com',
      'www.smsupermalls.com', 
      'theorangebucket.ph', 
      'fruitasholdings.com',
      'upload.wikimedia.org', 
      'cdn.shopify.com', 
      'fundacionpacita.com', 
      'www.fundacionpacita.com',
      'images.pexels.com', 
      'static.vecteezy.com',
      't3.ftcdn.net',
      'coffeenow.ph',
      'scontent.fmnl3-1.fna.fbcdn.net',
      'dogsandthecityph.com',
      'images.unsplash.com',
      'errantdiner.com',
      'icon2.cleanpng.com',
      'portal.gifted.ph'
    ],
  },
  // Add trailing slashes to URLs for better compatibility with static hosting
  trailingSlash: true,
  
  // Disable TypeScript and ESLint checks during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
