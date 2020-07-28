import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    account: '',
    cart: []
  },
  mutations: {
    login (state, data) {
      state.account = data
    },
    addCart (state, data) {
      state.cart.push(data)
    },
    delCart (state, data) {
      state.cart.splice(data, 1)
    },
    logout (state, data) {
      state.account = ''
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    cart (state) {
      return state.cart
    },
    account (state) {
      return state.account
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
