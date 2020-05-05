const { resolve } = require('path');
/*
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTML_MINIFY = {
  collapseWhitespace: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
};
*/

const stdBase = {
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: resolve(__dirname, 'dist', 'assets'),
    publicPath: '/',
  },
};

module.exports = { stdBase };
