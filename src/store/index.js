import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: '',
    },
  },
  mutations: {
    logout(state) {
      state.user.name = ''
      state.user.id = ''
    },
    login(state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
  },
  actions: {},
  modules: {},
  // 使用 vuex-persistedstate 套件
  plugins: [createPersistedState()],
})
