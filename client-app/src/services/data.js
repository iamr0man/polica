import axios from "./instance";

export const getPoints = async () => {
  return await axios.get('/expe/all')
};

export const createPoint = async (latitude, longitude, title, description, emoji) => {
  return await axios.post('/expe', { latitude, longitude, title, description, emoji })
};

  // eslint-disable-next-line
export const deletePoint = async (id) => {
  // return await axios.delete('/expe', { id })
};
