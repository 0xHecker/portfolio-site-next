/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer') // eslint-disable-line

const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'user-images.githubusercontent.com'],
  },
})

module.exports = nextConfig
