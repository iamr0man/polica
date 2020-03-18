import axios from "./instance";

export const getPoint = async () => {
  debugger
  const ps = await axios.get('/expe/all')
  return ps;
};

export const createToken = async (latitude, longitude, title, description, emoji) => {
  return await axios.post('/expe', { latitude, longitude, title, description, emoji })
};
