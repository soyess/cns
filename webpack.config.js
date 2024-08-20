const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "docs"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: process.env.PUBLIC_URL,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CopyPlugin({ patterns: [{ from: "src/assets/imgs", to: "assets/imgs" }] }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"], // 바벨로 파일을 변환할 때 쓸 프리셋들
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
        //  exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico|mov|mp4)$/i,
        loader: "file-loader",
        include: [path.resolve(__dirname, "./src/assets/imgs")],
        options: { name: "[name].[ext]" },
        exclude: /node_modules/,
      },
      {
        test: /\.(mp4|ogg)$/, // 로더를 적용할 파일 유형
        exclude: /(node_modules|bower_components)/,
        use: {
          // 해당 파일에 적용할 로더의 이름
          loader: "file-loader",
          options: {
            name: "assets/media/[name].[ext]?[hash]",
          },
        },
      },
    ],
  },
};
