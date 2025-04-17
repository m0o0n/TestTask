import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const axiosAuthInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

axiosAuthInstance.interceptors.request.use(
  (request) => request,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  },
);
