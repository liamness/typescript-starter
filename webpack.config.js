const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (_, { mode } = {}) => ({
  entry: ['./src/index.ts'],
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
  },
  devtool: mode === 'development' ? 'cheap-module-source-map' : false,
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
});
