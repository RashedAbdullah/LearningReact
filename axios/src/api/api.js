import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 2000,
});

// Request interceptor:
api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Powerd by Rashed Abdullah";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor:
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response) {
      // "Error came from server"
      err.message = `Error form server: status: ${err.response.status} - message: ${err.response.statusText}`;
    }
    return Promise.reject(err);
  }
);

export { api };
