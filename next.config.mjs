/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      },
      {
        hostname: 'storyset.com'
      }
    ]
  },
  devIndicators: false
};

export default nextConfig;
