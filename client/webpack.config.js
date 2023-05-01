const path = require('path')

module.exports = {
  entry: ['./client/index.tsx', './client/styles/index.scss'],
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
