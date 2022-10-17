/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer'); // eslint-disable-line

const nextConfig = withContentlayer({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['res.cloudinary.com'],
	},
});

module.exports = nextConfig;
