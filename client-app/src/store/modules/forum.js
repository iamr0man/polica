import { ForumApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    post: {},
    posts: [],
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload
    }
  },
  actions:{
    async  getPosts({ commit }) {
      const { data } = await ForumApi.getPosts();
      if(data){
        commit('SET_POSTS', data)
      }
    }
  },
  getters: {
    posts: state => state.posts
  }
}