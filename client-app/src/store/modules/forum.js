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
    },
    SET_POST(state, payload) {
      state.posts = payload
    },
  },
  actions:{
    async getPosts({ commit }) {
      const { data } = await ForumApi.getPosts();
      if(data){
        commit('SET_POSTS', data)
      }
    },
    async createPost({ commit }, {name, title, description}) {
      const { data } = await ForumApi.createPost(name, title, description);
      if(data){
        commit('SET_POST', data)
      }
    },
  },
  getters: {
    posts: state => state.posts
  }
}