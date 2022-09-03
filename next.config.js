/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TOKEN: process.env.TOKEN,
    DEPLOYMENT: process.env.DEPLOYMENT
  },
  trailingSlash: true
}

module.exports = nextConfig
