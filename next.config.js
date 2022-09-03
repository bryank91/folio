/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DEPLOYMENT: process.env.DEPLOYMENT
  },
  trailingSlash: true
}

module.exports = nextConfig
