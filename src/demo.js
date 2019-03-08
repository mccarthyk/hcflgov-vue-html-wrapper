// demo
import Vue from 'vue'
import HcHtmlWrapper from './main'

import Demo from './demo/_Layout'

Vue.config.productionTip = false

Vue.use(HcHtmlWrapper)

new Vue({
  render: h => h(Demo)
}).$mount('#hc-main')
