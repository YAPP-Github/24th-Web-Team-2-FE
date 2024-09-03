const withMDX = require('@next/mdx')({
  extension: /\.md?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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
        source: '/:path((?!article|domain|mail).*)',
        destination: `${
          process.env.NEXT_PUBLIC_API_MOCK === 'enabled'
            ? process.env.NEXT_PUBLIC_MOCK_URL
            : process.env.NEXT_PUBLIC_API_URL
        }/:path*`,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
