const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = [
  new HtmlWebpackPlugin({
    template: "./index.html",
  }),
  new webpack.WatchIgnorePlugin({
    paths: [/css\.d\.ts$/],
  }),
  new webpack.DefinePlugin({
    APP_MODE: JSON.stringify(process.env.APP_MODE),
  }),
  new CleanWebpackPlugin(),
];
