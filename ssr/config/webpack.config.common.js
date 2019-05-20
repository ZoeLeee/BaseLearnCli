const path = require('path');


exports.config = {
  entry: path.join(__dirname,"../src/index.js"),
  module: {
    rules: [
      {
        test: /.(js)|(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // modules: false, //是否开启模块化
              importLoaders: 1,
              // localIdentName: '[name]_[local]_[hash:base64]', 
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  resolve:{
    extensions: ['.js','.jsx','.css' ]
  },
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname,"../dist"),

  },
}