import axios from "axios";
import { getmd5Header } from "./lib/md5ConvertFunc";

export const baseApi = axios.create({
  method: 'POST',
  baseURL: 'https://api.valantis.store:41000'
})

baseApi.interceptors.request.use((config) => {
  config.headers['X-Auth'] = getmd5Header();
  return config;
})
