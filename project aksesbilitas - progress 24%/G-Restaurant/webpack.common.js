const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash:6][ext][query]',
  },
  module: {
    rules: [{
      test: /\.(sc|c)ss$/i, // regular expression scss|css
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.(png|svg|jpe?g|gif)$/i,
      type: "asset/resource",
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
  ],
};