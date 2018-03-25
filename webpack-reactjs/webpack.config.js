const webpack = require('webpack')
const path = require('path')

module.exports = {
  target: 'electron',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        },
        // hack to resolve absolute path to the opencv4nodejs.node file
        opencv4nodejs: JSON.stringify(path.resolve(__dirname, 'node_modules/opencv4nodejs/build/Release/opencv4nodejs.node'))
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: ['react-hot-loader/webpack', 'babel-loader']
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