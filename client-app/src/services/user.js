import axios from "./instance";

export const doLogin = async (email, password) => {
  return await axios.post('/auth', { email, password})
};

export const registration = async (email, name, password) => {
  return await axios.post('/users', { email, name, password})
};
