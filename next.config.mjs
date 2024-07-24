/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prom.ua",
      },
    ],
  },
};

export default nextConfig;
