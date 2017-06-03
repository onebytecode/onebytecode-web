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
  sourceMap: true,
  compress: {
    warnings: true
  }
})

const LiveReloadPlugin = require('webpack-livereload-plugin')



module.exports  =  {
  entry: './scripts/vendor.js',
  output: {
    path: __dirname + '/public/',
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
        exclude: /(node_modules|bower_components)/,
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
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  devServer: {
    compress: true,
    port: 8080
  }
}
