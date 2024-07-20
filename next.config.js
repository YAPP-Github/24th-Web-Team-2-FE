const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'via.placeholder.com'],
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${
          process.env.NEXT_PUBLIC_API_MOCK === 'enabled' ? process.env.MOCK_API_URL : process.env.NEXT_PUBLIC_API_URL
        }/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
