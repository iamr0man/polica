import { doLogin } from "../../services/user";

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
    async doLogin({ commit }, { email, password }) {
      const { data } = await doLogin(email, password);
      
      commit('SET_USER', data)
    }
  },
  getters: {}
};
