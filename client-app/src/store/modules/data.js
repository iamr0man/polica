import { getPoints } from '../../services/data'

export default {
  namespaced: true,
  state: {
    points: []
  },
  mutations: {
    SET_POINS(state, payload) {
      state.points = payload
    }    
  },
  actions: {
    async getPoints({ commit }) {
      debugger
      const points = await getPoints();
      if(points){
        commit('SET_POINTS', points)
      }
    } 
  },
  getters: {
    point: state => state.points
  }
}