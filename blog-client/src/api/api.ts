import useAuthStore from "@/stores/authStore";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("blog-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
