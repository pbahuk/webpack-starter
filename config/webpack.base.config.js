const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack 4 starter",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
