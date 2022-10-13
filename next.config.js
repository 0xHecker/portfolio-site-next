/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer"); // eslint-disable-line

const nextConfig = withContentlayer({
	reactStrictMode: true,
	swcMinify: true,
});

module.exports = nextConfig;
