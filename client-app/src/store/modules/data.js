import { getPoints, createPoint } from '../../services/data'

export default {
  namespaced: true,
  state: {
    points: [],
    point: {}
  },
  mutations: {
    SET_POINTS(state, payload) {
      state.points = payload
    },    
    SET_POINT(state, payload) {
      state.point = payload
    }    
  },
  actions: {
    async getPoints({ commit }) {
      const { data } = await getPoints();
      if(data){
        commit('SET_POINTS', data)
      }
    },
    async createExpe({ commit }, {latitude, longitude, title, describe, emoji}) {
      const { data } = await createPoint(latitude, longitude, title, describe, emoji)
      if(data) {
        commit('SET_POINT', data)
      }
    } 
  },
  getters: {
    points: state => state.points,
    point: state => state.point,
  }
}