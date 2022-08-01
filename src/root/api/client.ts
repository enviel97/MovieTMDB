import axios from "axios";
import apiConfig from "./config";
import queryString from "query-string";

const client = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: apiConfig.apiKey,
    }),
});

client.interceptors.request.use(async (config) => config);
client.interceptors.response.use((res) => {
  try {
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export default client;
