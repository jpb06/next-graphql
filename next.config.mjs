import Icons from 'unplugin-icons/webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  webpack(config) {
    //config.infrastructureLogging = { debug: /PackFileCache/ };
    config.plugins.push(
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    );
    // config.plugins.push(
    //   require('unplugin-icons/webpack').default({
    //     compiler: 'jsx',
    //     jsx: 'react',
    //   }),
    // );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
};

export default nextConfig;
