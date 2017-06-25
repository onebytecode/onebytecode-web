var webpack        = require('webpack')

var path           = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './views/index.html',
  filename: 'index.html',
  inject: 'body'
})

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyJsPluginConfig = new UglifyJsPlugin({
  sourceMap: false,
  compress: {
    warnings: false
  }
})

const CompressionPlugin = require("compression-webpack-plugin");
const CompressionPluginConfig = new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
// const LiveReloadPlugin = require('webpack-livereload-plugin')



module.exports  =  {
  entry: './scripts/vendor.js',
  output: {
    path: __dirname + '/public/assets',
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
      },
      { test: /\.(woff|svg|ttf|eot|jpg|png)([\?]?.*)$/,
          use: [
            { loader: "file-loader?name=[name].[ext]" }
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $:      "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js"
    }),
    UglifyJsPluginConfig,
    new webpack.EnvironmentPlugin("NODE_ENV"),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    CompressionPluginConfig
  ],
  devServer: {
    compress: true,
    port: 8080
  }
}
