/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js: if we are on GitHub Pages, use '/aimatter', 
  // but if we are on Vercel (or local), use no prefix.
  basePath: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/aimatter' : '',
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static exports
  },
}

module.exports = nextConfig