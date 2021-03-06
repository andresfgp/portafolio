const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { //modulo a exportar
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
        use: [{
          loader: 'html-loader',
        }],
      },
      {
        test: /\.(s*)css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
        ],
      }, {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|gif|jpg|svg|pdf)$/,
        use: [{
          'loader': 'file-loader',
          options: {
            name: 'assets/[hash].[ext]',
          },
        }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/logo.png',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css', //referencia para trabajar desde webpack con sass
    }),
  ],
  devtool: 'source-map',
};
