import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from 'webpack';

const isDevelopment = process.env.NODE_ENV === "development";

const config: Configuration = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules", path.resolve(__dirname, "../src")],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      lodash$: "lodash-es",
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: [isDevelopment && require.resolve("react-refresh/babel")].filter(Boolean),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "3D-Blog",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new ESLintPlugin({
      fix: true,
      lintDirtyModulesOnly: true,
    }),
    new webpack.DefinePlugin({
      "process.env": "{}",
      global: {}
    })
  ],
};

export default config;
