import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Photoswipe from 'vue-pswipe'
import VuePageTransition from 'vue-page-transition'
import ElementUI from 'element-ui'
import VueCarousel from 'vue-carousel'
import VueMarquee from 'vue-marquee-component'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCartPlus, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import 'element-ui/lib/theme-chalk/index.css'
import './plugins/bootstrap-vue'
import './registerServiceWorker'
import './css/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Flipbook from 'flipbook-vue'
import Page from 'v-page'

// 預設傳送認證資訊
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueCarousel)
Vue.use(VueMarquee)
Vue.use(Photoswipe)
Vue.use(VuePageTransition)
library.add(faBars, faCartPlus, faUser, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('flipbook', Flipbook)
Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(Page)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
