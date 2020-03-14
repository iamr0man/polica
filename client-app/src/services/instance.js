import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5000/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default apiClient;
