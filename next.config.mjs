/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  allowedDevOrigins: ['10.108.45.81'],
  experimental: {
    agentFeedback: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com"
      },
      {
        protocol: "https",
        hostname: "images.metahub.space",
      }
    ],
  },


  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
