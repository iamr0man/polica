import { registration ,doLogin } from "../../services/user";
import router from '../../router/index'

export default {
  namespaced: true,

  state: {
    user: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async registration({ commit }, { email, name, password}) {
      const { data } = await registration(email, name, password)

      if(data) {
        commit('SET_USER', data.user)
        localStorage.setItem('token', data.token)
        router.push('/')
      }
    },
    async doLogin({ commit }, { email, password }) {
      const { data } = await doLogin(email, password);
      
      if(data){
        commit('SET_USER', data.user)
        localStorage.setItem('token', data.token)
        router.push('/')
      }
      router.push
    },
    logout({ commit }) {
      commit('SET_USER', {})
      localStorage.removeItem('user')
    }
  },
  getters: {
    user: state => state.user
  }
};
