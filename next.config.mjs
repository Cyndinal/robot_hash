/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
      },
    ],
  },
};

export default nextConfig;
