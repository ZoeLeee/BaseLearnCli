const path = require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const merge=require('webpack-merge');
const common=require('./webpack.config.common').config;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =merge(common,  {
  mode: "production",
  entry: path.join(__dirname,"../src/index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(['./dist/*.bundle.js', './dist/*.map', './dist/*.css'],{
      root:  path.resolve(__dirname, '..')
    }),
  ],
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname,"../dist"),
    publicPath: '/public',
  },
})