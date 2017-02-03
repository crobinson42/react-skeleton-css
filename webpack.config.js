const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// default

module.exports = {
  entry: {
    main: './lib/index.js',
    example: './lib/example/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },

  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // default value
      DEBUG: false
    })
  ],

  devtool: "eval-source-map",

  devServer: {
    publicPath: "/assets/",
    watchContentBase: true,
    contentBase: path.join(__dirname, "example"),
    compress: true,
    port: 9000,
    inline: true,
  }
};
