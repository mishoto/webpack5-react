const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let DEV_TOOL = null;

if (process.env.NODE_ENV === "production") {
  mode = "production";
  DEV_TOOL = "source-map";
}
if (process.env.NODE_ENV === "development") {
  mode = "development";
  DEV_TOOL = "eval";
}

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
