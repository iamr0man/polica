import { getPoints, createPoint, deletePoint } from '../../services/data'

export default {
  namespaced: true,
  state: {
    points: [],
  },
  mutations: {
    SET_POINTS(state, payload) {
      state.points = payload
    }  
  },
  actions: {
    async getPoints({ commit }) {
      const { data } = await getPoints();
      if(data){
        commit('SET_POINTS', data)
      }
    },
    // eslint-disable-next-line
    async createPoint({ commit }, {latitude, longitude, title, describe, emoji}) {
      await createPoint(latitude, longitude, title, describe, emoji)
    },
    // eslint-disable-next-line
    async deletePoint({ commit }, {id}) {
      await deletePoint(id);
    }, 
  },
  getters: {
    points: state => state.points,
  }
}