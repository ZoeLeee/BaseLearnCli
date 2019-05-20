const path = require('path');
const merge=require('webpack-merge');
const common=require('./webpack.config.common').config;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =merge(common,  {
  mode: "development",
  output:{
    publicPath: '/public/',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "./index.html"
    }),
  ],
  devServer: {
    port: 7777,
    open: true,
    // publicPath: '/public',
    // contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: {
      index: '/public/index.html'
    },
  }
})