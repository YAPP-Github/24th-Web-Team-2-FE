const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  plugins: [
    // new CopyPlugin({
    //   patterns: [{ from: 'public/mockServiceWorker.js', to: '' }],
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
