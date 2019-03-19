module.exports = {
  // set your styleguidist configuration here
  title: 'Vue HTML Wrapper',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  styleguideDir: 'docs',
  ignore: [
    '**/components/Navbar/SearchForm.vue',
    '**/components/Cards/*.vue',
    '**/components/IconButton.vue',
    '**/components/Search/Result.vue'
  ]
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // }
}
