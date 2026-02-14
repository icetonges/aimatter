/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aimatter',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
