import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";
import apiConfig from "./config";

export const baseSetup = fetchBaseQuery({
  baseUrl: apiConfig.baseUrl,
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: apiConfig.apiKey,
    }),
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json;charset=utf-8");
    return headers;
  },
});

const tmdbClient = createApi({
  reducerPath: "TMDB_API",
  baseQuery: baseSetup,
  tagTypes: ["Movie", "Video"],
  // tagTypes: ["Video", "TV", "Credit", "Movie"],
  endpoints: () => ({}),
});

export default tmdbClient;
