/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  runtime: 'edge', 
  unstable_allowDynamic: [
    '/lib/utilities.js', 
    '/node_modules/function-bind/**', 
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
