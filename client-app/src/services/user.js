import axios from "./instance";

export const doLogin = async (email, password) => {
  return await axios.post('/auth', { email, password})
};
