const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Here!
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const isProduction ? 'production' : 'development';
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: './src/index.ts',
  mode,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    // And here!
    new CopyPlugin({
      patterns: [{ from: './src/img', to: 'static' }],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
