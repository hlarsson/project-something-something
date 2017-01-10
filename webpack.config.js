const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  
  entry: './app/',
  context: __dirname,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?sourceMap', 'postcss-loader',]
      },
      { test: /\.scss$/, 
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: ['css-loader', 'sass-loader']
        }) 
      },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: [
            'file-loader?name=[name].[ext]',
            'extract-loader',
            'html-loader'
        ]
      },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/roboto/[name].[ext]'
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      'node_modules',
    ],
  },

  plugins: [
      new ExtractTextPlugin({
        filename: '/style/[name].css',
        allChunks: true,
      }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081
  },
  
  devtool: 'source-map'

};
