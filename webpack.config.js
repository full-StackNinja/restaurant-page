const htmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const path = require("path");
module.exports = {
     mode: "development",
     entry: {
          index: "./src/script-files/index.js",
     },
     devtool: "inline-source-map",
     devServer: {
          static: "./dist",
          hot: true,
     },
     plugins: [
          new htmlWebpackPlugin({
               template: "./src/index.html",
          }),
          new DotEnv(),
     ],
     output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist"),
          clean: true,
     },
     module: {
          rules: [
               {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
               },
               {
                    test: /\.(jpg|jpeg|png|tif|svg)$/i,
                    type: "asset/resource",
               },
          ],
     },
};
