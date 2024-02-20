import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.request.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
