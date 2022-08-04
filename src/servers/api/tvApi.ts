import client from "@api/client";
import { Paginate, PaginateParams, TvType } from "@servers/types/props";

const pathUrl = "tv/";

const tvApi = {
  async getTvs(props: PaginateParams<TvType>) {
    const response = await client.get<Paginate<TV>>(`${pathUrl}${props.type}`, {
      params: { page: props.page ?? 1 },
    });
    return response;
  },
};

export default tvApi;
