var webpack        = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// var BowerWebpackPlugin = require('bower-webpack-plugin')

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
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $:      "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js"
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    })
  ]
}
