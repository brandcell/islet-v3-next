/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  reactStrictMode: true,

  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },


}

module.exports = nextConfig
