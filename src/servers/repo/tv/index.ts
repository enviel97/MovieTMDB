import client from "@api/client";
import { getTvs } from "./queries";

export const tvApi = client.injectEndpoints({
  endpoints: (builder) => ({
    getTvs: builder.query(getTvs),
  }),
});
