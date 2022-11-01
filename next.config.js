/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer') // eslint-disable-line

const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'user-images.githubusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
      require('./scripts/generate-rss') // eslint-disable-line
    }

    return config
  },
})

module.exports = nextConfig
