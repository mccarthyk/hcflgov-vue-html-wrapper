module.exports = {
  publicPath: './',
  filenameHashing: false,
  css: {
    extract: true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
