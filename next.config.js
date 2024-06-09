const devWebpack = require('./config/webpack.dev.js');
const prodWebpack = require('./config/webpack.prod.js');
const TerserPlugin = require('terser-webpack-plugin');

const nextConfig = {
  webpack: config => {
    if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
      const webpackConfig = {
        ...config,
        ...devWebpack,
      };
      return webpackConfig;
    }

    config.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    );

    const webpackConfig = {
      ...config,
      ...prodWebpack,
    };
    return webpackConfig;
  },
  reactStrictMode: true,
  // content: ['./app/**/*.{js,jsx,ts,tsx}'],
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
