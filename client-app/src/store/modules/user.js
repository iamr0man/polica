import { registration ,doLogin } from "../../services/user";

export default {
  namespaced: true,

  state: {
    details: []
  },
  mutations: {
    SET_USER(state, payload) {
      state.details = payload;
    }
  },
  actions: {
    async registration({ commit }, { email, name, password}) {
      const { data } = await registration(email, name, password)

      if(data) {
        commit('SET_USER', data)
      }
    },
    async doLogin({ commit }, { email, password }) {
      const { data } = await doLogin(email, password);
      
      if(data){
        commit('SET_USER', data)
      }
    }
  },
  getters: {}
};
