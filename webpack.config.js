var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: false 
    })
  ],
  module: {
    loaders: [
    {
      test: /\.html$/,
      loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ["latest"],  
        }
      },
      {
       test: /\.css$/,
       loader: 'style!css'
    },
    ]
  },
  devServer: {
    contentBase: './dist'
  }
}
