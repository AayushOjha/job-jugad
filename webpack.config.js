const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "production",
  entry: {
    background: "./extenshion/background.js",
    content: "./extenshion/content.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './extenshion/manifest.json', to: '' },
        { from: './extenshion/popup.html', to: '' },
        { from: './extenshion/jquery-3.7.1.min.js', to: ''},
        { from: './extenshion/html_parser.js', to: '' },
        { from: './extenshion/logo.png', to: '' },
      ],
    }),
  ],
};
