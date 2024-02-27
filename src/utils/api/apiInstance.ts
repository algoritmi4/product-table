import axios from "axios";
import { setAuthHeader } from "./lib/setAuthHeaderFunc";
import { BASE_API_URL } from "../model/constants";
import axiosRetry from "axios-retry";

export const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  config.headers['X-Auth'] = setAuthHeader();
  return config;
})

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.log(error);

  return Promise.reject(error);
})

axiosRetry(instance, {
  retries: 3,
  retryCondition: () => true
})
