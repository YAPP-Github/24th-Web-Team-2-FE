const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public/mockServiceWorker.js', to: '' }],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
