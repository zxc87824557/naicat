import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// address-card -> fa-address-card -> faAddressCard
import { faAddressCard, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style/style.styl'

library.add(faAddressCard, faArrowUp)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App)
}).$mount('#app')
