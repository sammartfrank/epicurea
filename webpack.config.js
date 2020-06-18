const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [path.resolve('./'), path.resolve('./node_modules')],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
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
        test: /\.(jpg|jpeg|png|gif|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
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
  devtool: 'cheap-eval-source-map',
};
