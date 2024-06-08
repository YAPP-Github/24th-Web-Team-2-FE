const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { convertToAbsolutePath } = require('./webpackUtil');

module.exports = {
  entry: convertToAbsolutePath('src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2021',
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.(style.js|style.ts)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(png|jpg)$/i,
        issuer: /\.[jt]sx?$/,
        use: ['url-loader'],
      },
    ],
  },

  output: {
    path: convertToAbsolutePath('dist'),
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': convertToAbsolutePath('src'),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: convertToAbsolutePath('public/index.html'),
      favicon: convertToAbsolutePath('public/favicon.ico'),
    }),
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
