const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: './dist',
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    clientLogLevel: 'debug',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // devtool: 'cheap-eval-source-map',
};
