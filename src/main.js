import defaultOptions from './options'
import * as components from './components'
import './assets/sass/main.scss'
import './assets/bootstrap'

export default class HcHtmlWrapper {
  static install (Vue, options) {
    options = Object.assign(defaultOptions, options)

    Vue.prototype.$hcHtmlWrapper = new Vue({
      ...new this(),
      ...options
    })

    Vue.mixin({
      components: { ...components }
    })
  }

  constructor () {
    return {
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
  }
}
