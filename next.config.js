const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'via.placeholder.com', 'picsum.photos'],
  },

  async rewrites() {
    return [
      {
        source: '/:path((?!main/article|domain).*)',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
        // @우찬 - env파일 공유 한번 해주세요~!
        source: '/:path*',
        destination: `${
          process.env.NEXT_PUBLIC_API_MOCK === 'enabled' ? process.env.MOCK_API_URL : process.env.NEXT_PUBLIC_API_URL
        }/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
