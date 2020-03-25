import { UserApi } from "../../services/index";
import router from '../../router/index'

export default {
  namespaced: true,

  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUser({ commit, getters }){
      if(Object.entries(getters.user).length){
        return getters.user;
      }

      const { data } = await UserApi.getUser()
      if(data){
        commit('SET_USER', data)
      }
    },
    async registration({ commit }, { email, name, password}) {
      const { data } = await UserApi.registration(email, name, password)

      if(data) {
        commit('SET_USER', data.user)
        localStorage.setItem('token', data.token)
        router.push('/')
      }
    },
    async doLogin({ commit }, { email, password }) {
      const { data } = await UserApi.doLogin(email, password);
      
      if(data){
        commit('SET_USER', data.user)
        localStorage.setItem('token', data.token)
        router.push('/')
      }
      router.push
    },
    // eslint-disable-next-line
    logout({ commit }) {
      commit('SET_USER', {})
      localStorage.removeItem('token')
      router.push('/login')
    }
  },
  getters: {
    user: state => state.user
  }
};
