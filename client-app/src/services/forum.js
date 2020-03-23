import axios from "./instance";

export default {
  async getPosts () {
    return await axios.get('/post/all')
  },
  async createPost (){
    return await axios.post('/post', { })
  },
  // eslint-disable-next-line
  async deletePost (id) {
    return await axios.delete(`/post/${id}`)
  },
}
