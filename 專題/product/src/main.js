import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Photoswipe from 'vue-pswipe'
import VuePageTransition from 'vue-page-transition'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './plugins/bootstrap-vue'
import './registerServiceWorker'
import './style/style.scss'
import App from './App.vue'
import router from './router'
import store from './store'

// 預設傳送認證資訊
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
Vue.use(Photoswipe)
Vue.use(VuePageTransition)
library.add(faBars, faCartPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
