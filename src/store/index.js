import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      collapse:false //导航栏收缩状态
  },
  mutations: {
      collapse(state) {
        state.collapse=!state.collapse
      }
  },
  actions: {

  }
})
