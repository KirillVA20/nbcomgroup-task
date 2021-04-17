const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

var client = {
  ...config,
  watch: true,
  watchOptions: {
    poll: 1000,
  },
  name: "client",
  target: "web",
  entry: path.resolve(__dirname, "src/client/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

var server = {
  ...config,
  name: "server",
  target: "node",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "src/server/index.tsx"),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = [client, server];
