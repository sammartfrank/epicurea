const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
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
  ],
};
