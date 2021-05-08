const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, { mode } = {}) => ({
  entry: ['./src/index.ts'],
  output: {
    filename: '[name]-[contenthash].js',
    clean: true,
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
  devtool: mode === 'development' ? 'cheap-module-source-map' : false,
  plugins: [new HtmlWebpackPlugin()],
});
