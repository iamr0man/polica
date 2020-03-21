import axios from "./instance";

export const getPoints = async () => {
  return await axios.get('/expe/all')
};

export const createPoint = async (latitude, longitude, title, description, emoji) => {
  debugger
  return await axios.post('/expe', { latitude, longitude, title, description, emoji })
};
