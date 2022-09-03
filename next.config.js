/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TOKEN: process.env.TOKEN,
    DEPLOYMENT: process.env.DEPLOYMENT,
    USER_PROFILE: process.env.USER_PROFILE
  },
  trailingSlash: true
}

module.exports = nextConfig
