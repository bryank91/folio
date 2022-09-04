/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TOKEN: process.env.TOKEN,
    DEPLOYMENT: process.env.DEPLOYMENT,
    USER_PROFILE: process.env.USER_PROFILE,
    PROJECTS: process.env.PROJECTS
  },
  trailingSlash: true
}

module.exports = nextConfig
