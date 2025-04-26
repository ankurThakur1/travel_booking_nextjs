/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.searchmyreservation.com',
          pathname: '/images/**',
        },
      ],
    },
};

export default nextConfig;
