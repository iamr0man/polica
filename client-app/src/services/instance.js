import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5000/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'x-auth-token': localStorage.token || ''
  }
});

apiClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default apiClient;
