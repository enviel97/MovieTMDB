import client from "@api/client";
import {
  Paginate,
  SearchParams,
  SearchType,
  VideoParams,
} from "@servers/types/props";

const videoApi = {
  async getVideos(props: VideoParams) {
    const response = await client.get<Video>(
      `${props.type}/${props.id}/videos`,
      { params: {} }
    );
    return response;
  },
  async getDetail(props: VideoParams) {
    const response = await client.get<MovieDetail | TVDetail>(
      `${props.type}/${props.id}`,
      { params: {} }
    );
    return response;
  },
  async search(params: SearchParams) {
    const { type = SearchType.all } = params;
    const response = await client.get(`/search/${type}`, {
      params: { query: params.query, page: params.page ?? 1 },
    });
    return response;
  },
  async getCredit(props: VideoParams) {
    const response = await client.get<Credits>(
      `${props.type}/${props.id}/credits`,
      { params: {} }
    );
    return response;
  },
  async similar(props: VideoParams) {
    const response = await client.get<Paginate<Movie | TV>>(
      `${props.type}/${props.id}/similar`,
      {
        params: { page: 1 },
      }
    );
    return response;
  },
};

export default videoApi;
