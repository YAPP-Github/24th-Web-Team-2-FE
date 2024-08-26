const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path((?!article|domain|main).*)',
        destination: `${
          process.env.NEXT_PUBLIC_API_MOCK === 'enabled'
            ? process.env.NEXT_PUBLIC_MOCK_URL
            : process.env.NEXT_PUBLIC_API_URL
        }/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
