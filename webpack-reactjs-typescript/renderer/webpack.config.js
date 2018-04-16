const webpack = require('webpack')
const path = require('path')

module.exports = {
  target: 'electron',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'app'),
        loader: ['react-hot-loader/webpack', 'ts-loader?configFile=tsconfig.json']
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
}