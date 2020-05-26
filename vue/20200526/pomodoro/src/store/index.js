import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    timeleft: parseInt(process.env.VUE_APP_TIMELEFT),
    alarm: '',
    current: '',
    isBreak: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
