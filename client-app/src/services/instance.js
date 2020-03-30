import axios from "axios";
import router from '../router/index'

const apiClient = axios.create({
  baseURL: `http://localhost:5001/api`,
  withCredentials: false, // This is the default
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'x-auth-token': localStorage.token || ''
  }
});

apiClient.interceptors.response.use(response => {
   return response;
}, error => {
  if (error.response.status === 401) {
    router.push('/login')
  }
  return error;
});

export default apiClient;
