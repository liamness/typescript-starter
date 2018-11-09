const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = (_, { mode } = {}) => ({
  entry: ['@babel/polyfill', './src/index.ts'],
  output: {
    filename: '[name]-[contenthash].js',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
    minimizer:
      mode === 'production'
        ? [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
            }),
          ]
        : [],
  },
  devtool: mode === 'development' ? 'cheap-module-source-map' : false,
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(mode === 'development'),
    }),
    new CleanPlugin(['dist']),
  ],
});