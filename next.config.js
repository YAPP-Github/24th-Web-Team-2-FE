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
      },
    ];
  },
};

module.exports = nextConfig;
