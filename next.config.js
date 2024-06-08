const devWebpack = require('./config/webpack.dev.js');
const prodWebpack = require('./config/webpack.prod.js');

const nextConfig = {
  webpack: () => {
    return process.env.NODE_ENV === 'production' ? prodWebpack : devWebpack;
  },
  reactStrictMode: true,
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
