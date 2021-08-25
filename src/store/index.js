import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: {
      token: '',
      received: 0
    },
    user: {
      account: '',
      role: 0,
      email: ''
    }
  },
  mutations: {
    login (state, data) {
      state.jwt.token = data.token
      state.jwt.received = new Date().getTime()
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    user (state) {
      return { islogin: state.user.account.length > 0, isAdmin: state.user.role === 1, ...state.user }
    }
  }
})
