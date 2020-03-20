import axios from "axios";
import store from '../store/index'

const apiClient = axios.create({
  baseURL: `http://localhost:5000/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

apiClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.status === 401) {
    store.dispatch('user/logout')
    location.reload(true)
  }
  return Promise.reject(error);
});

export default apiClient;
