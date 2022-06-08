const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
