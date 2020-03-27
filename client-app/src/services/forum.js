import axios from "./instance";

export default {
  async getPosts () {
    return await axios.get('/post/all')
  },
  async getPhoto(){
    const url = 'https://api.cloudinary.com/v1_1/dd1zwnjkj/upload'
    const { data } = await axios({
      baseURL: url,
      method: "POST",
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    })
    return data;
  },
  async createPost (title, description, shortDescription, preview){
    return await axios.post('/post', title, description, shortDescription, preview)
  },
  // eslint-disable-next-line
  async deletePost (id) {
    return await axios.delete(`/post/${id}`)
  },
}
