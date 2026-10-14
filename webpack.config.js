const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Плагін для копіювання фото

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Очищує папку dist перед кожним запуском
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Додає CSS у DOM
          'css-loader',   // Інтерпретує @import та url()
          'sass-loader'   // Компілює Sass у CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // Правило для автоматичного перенесення фотографій
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'images', noErrorOnMissing: true }
      ],
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  mode: 'development',
};