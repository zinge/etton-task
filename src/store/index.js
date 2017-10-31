import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: {}
  },

  mutations: {
    changeTest (state, payload) {
      state.test = payload
    }
  }
})
