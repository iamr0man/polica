import axios from "./instance";

export default {
  async getPosts () {
    return await axios.get('/post/all')
  },
  async createPost (formData){
    let config = {
      header : {
       'Content-Type' : 'multipart/form-data'
     }
    }
    return await axios.post('/post', formData, config)
  },
  // eslint-disable-next-line
  async deletePost (id) {
    return await axios.delete(`/post/${id}`)
  },
}
