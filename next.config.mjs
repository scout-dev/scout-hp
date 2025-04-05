/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['swiper'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'swiper/modules': 'swiper/modules/bundle',
    };
    return config;
  },
};

export default nextConfig;