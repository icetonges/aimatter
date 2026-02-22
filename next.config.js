/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed basePath '/aimatter' - this was causing all asset paths to break on Vercel
  // Only needed for GitHub Pages deployment; Vercel serves from root '/'
  images: {
    unoptimized: false, // Enable Vercel's built-in image optimization
  },
};

module.exports = nextConfig;
