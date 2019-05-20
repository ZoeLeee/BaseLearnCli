const path = require('path');
const merge=require('webpack-merge');
const common=require('./webpack.config.common').config;

module.exports =merge(common,  {
  mode:  process.env.NODE_ENV,
  target:"node",
  entry: path.join(__dirname,"../src/serverEntry.js"),
  output: {
    filename: "server-entry.js",
    path: path.resolve(__dirname,"../dist"),
    libraryTarget:"commonjs2",
    publicPath: '/public/',
  }
})