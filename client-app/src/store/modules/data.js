import { getPoints } from '../../services/data'

export default {
  namespaced: true,
  state: {
    points: []
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
    } 
  },
  getters: {
    points: state => state.points
  }
}