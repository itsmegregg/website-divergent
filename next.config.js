/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export with Next.js Image component
    domains: [
      'images.pexels.com',
      'encrypted-tbn0.gstatic.com',
      'upload.wikimedia.org',
      'dogsandthecityph.com',
      'icon2.cleanpng.com',
      'portal.gifted.ph',
      'contents.smsupermalls.com',
      'static.wixstatic.com',
      'errantdiner.com'
    ],
  },
  // Disable server-side features that won't work on static export
  trailingSlash: true,  // Add trailing slashes to URLs for better compatibility with static hosting
};

module.exports = nextConfig;
