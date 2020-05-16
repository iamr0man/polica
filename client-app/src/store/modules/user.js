import { UserApi } from "../../services/index";
import setAuthToken from '../../plugins/setAuthToken'
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
        setAuthToken(data.token)
        router.push({ path: '/', name: "Home" })
      }
    },
    async doLogin({ commit }, { email, password }) {
      const { data } = await UserApi.doLogin(email, password);
      
      if(data){
        debugger
        commit('SET_USER', data.user)
        setAuthToken(data.token)
        router.push({ path: '/' })
      }
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
