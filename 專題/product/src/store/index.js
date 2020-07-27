import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    cart: []
  },
  mutations: {
    login (state, data) {
      state.user = data
    },
    addCart (state, data) {
      state.cart.push(data)
    },
    delCart (state, data) {
      state.cart.splice(data, 1)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    cart (state) {
      return state.cart
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
