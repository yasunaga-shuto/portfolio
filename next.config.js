/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  }
}

module.exports = nextConfig
