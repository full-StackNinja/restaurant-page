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
     output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist"),
     },
     module: {
          rules: [
               {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
               },
          ],
     },
};
