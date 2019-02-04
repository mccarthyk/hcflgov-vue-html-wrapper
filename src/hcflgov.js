import axios from 'axios'
import components from './components'
import defaultOptions from './options'

export default class Hcflgov {
  static install (Vue, options) {
    Vue.prototype.$http = axios

    Vue.mixin({
      components
    })

    options = Object.assign(defaultOptions, options)

    Vue.prototype.$hcflgov = new Vue({
      ...new this(),
      ...options
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
        }
      }
    }
  }
}
