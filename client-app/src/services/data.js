import axios from "./instance";

export default {
  async getPoints () {
    return await axios.get('/expe/all')
  },
  async createPoint (latitude, longitude, title, description, emoji){
    return await axios.post('/expe', { latitude, longitude, title, description, emoji })
  },
  // eslint-disable-next-line
  async deletePoint (id) {
    return await axios.delete(`/expe/${id}`)
  },
}
