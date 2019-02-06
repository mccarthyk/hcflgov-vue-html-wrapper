import defaultOptions from './options'
import components from './components'
import './assets/bootstrap'

export default class Hcflgov {
  static install (Vue, options) {
    options = Object.assign(defaultOptions, options)

    Vue.prototype.$hcHtmlWrapper = new Vue({
      ...new this(),
      ...options
    })

    Vue.mixin({
      components
    })

    if (options.cssViaJs) {
      const Style = Vue.component('HcStyle', components.HcStyle)
      new Style()
    }
  }

  constructor () {
    return {
      data () {
        return {}
      },
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
