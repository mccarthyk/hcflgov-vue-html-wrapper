var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSCSS = new ExtractTextPlugin('build.css')
// const extractSTYL = new ExtractTextPlugin('material.css')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: (process.env.NODE_ENV === 'production') ? './' : '/dist/',
    filename: 'build.js',
    libraryTarget: 'umd',
    library: 'HcHtmlWrapper',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ],
      },
      // {
      //   test: /\.styl$/,
      //   use: extractSTYL.extract({
      //     fallback: 'vue-style-loader',
      //     use: ['css-loader', 'stylus-loader']
      //   })
      // },
      // {
      //   test: /\.sass$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader?indentedSyntax'
      //   ],
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // // the "scss" and "sass" values for the lang attribute to the right configs here.
            // // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ],
            'styl': [
              'vue-style-loader',
              'css-loader',
              'stylus-loader'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    proxy: {
      '/apis': {
        target: 'https://hillsborough/apis',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.entry.unshift('./src/assets/sass/main.scss')

  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    extractSCSS,
    // extractSTYL
  ])
}
