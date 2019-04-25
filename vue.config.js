const webpack = require('webpack')

module.exports = {
  publicPath: './',
  filenameHashing: false,
  css: {
    extract: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
