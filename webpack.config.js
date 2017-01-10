const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  
  // Starting point will be the "app" folder and thus the index.js file that resides there
  entry: "./app/",
  context: __dirname,

  // Output the bundle and other files in a folder called "dist" in the project root.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  /* 
    Here we define what should happen when webpack traverses different types of imported files.
    e.g "import './index.html'" will be handled by the /\.html$/ "test" pattern below.
  */
  module: {
    rules: [
      {

        // If the imported file is a .js or .jsx.
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        // Load the imported file using babel-loader
        loader: 'babel-loader'
      },

      {

        // If the imported file is a .css file.
        test: /\.css$/,

        // If there are several loaders they are processed in reverse order.
        // That is css-loader will happen before style-loader.
        loader: [
            
            // Then hand it over to the style-loader
            'style-loader',
            // Load the imported file using css-loader with some arguments
            'css-loader?sourceMap',
            
            'postcss-loader',
          ]
      },
      {

        // If the imported file is a .html file.
        test: /\.html$/,
        exclude: /node_modules/,
        
        // Remember: reverse order.
        loader: [

            // Finally save the extracted chunk to a file using the file-loader (will end up in the "dist" folder as well).
            'file-loader?name=[name].[ext]',

            // Then extract the HTML chunk using the extract-loader
            'extract-loader',

            // Load the imported file using html-loader
            'html-loader'
        ]
      },
        {
            // If the imported file is one of a font type
            test: /\.(eot|svg|ttf|woff|woff2)$/,

            // The path is an fugly hack so that materialize can find it's roboto via predefined path.
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


 /*
    Configuration for wepback-dev-server.
    Everything in the "dist" folder will be public to the browser and accessible through the port below.
    Se the "dev" script in package.json on how the dev server is started.
 */
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8081
  },
  
  devtool: "source-map"

};
