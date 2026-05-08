import axios from "axios";

let appStore = null;

export const injectStore = (store) => {
  appStore = store;
};

const api = axios.create({
  baseURL: "https://app.navakarana.com/api/v1",
});

api.interceptors.request.use((config) => {
  const token = appStore?.getState?.()?.auth?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;