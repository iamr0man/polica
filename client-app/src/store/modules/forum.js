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
      state.post = payload
    },
  },
  actions:{
    async getPosts({ commit }) {
      const { data } = await ForumApi.getPosts();
      if(data){
        commit('SET_POSTS', data)
      }
    },
    // eslint-disable-next-line
    async getPhoto({ commit }, {formData}) {
      const { data } = await ForumApi.getPhoto(formData);
      return data.secure_url;
    },
    async createPost({ commit }, {formData}) {
      const { data } = await ForumApi.createPost(formData);
      if(data){
        commit('SET_POST', data)
      }
    },
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post,
  }
}