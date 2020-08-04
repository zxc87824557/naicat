import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    account: '',
    name: '',
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
    delProduct (state) {
      return state.delProduct
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
