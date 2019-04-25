<script>
import defaultOptions from './options'
import * as components from './components'

export default {
  install (Vue, options) {
    options = Object.assign(defaultOptions, options)

    Vue.prototype.$hcHtmlWrapper = new Vue({
      ...this,
      ...options
    })

    Vue.mixin({
      components: { ...components }
    })
  },
  data: () => ({
  }),
  methods: {},
  computed: {
    navbarEndpoint () {
      return 'https://www.hillsboroughcounty.org/apis/v1/endpoints/navbar'
    },
    // TODO: footerEndpoint
    // footerEndpoint () {
    //   return 'https://www.hillsboroughcounty.org/apis/v1/endpoints/footer'
    // }
  }
}
</script>

<style src="./assets/sass/main.scss" lang="scss"></style>
