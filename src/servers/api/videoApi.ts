import client from "@api/client";
import { SearchParams, SearchType, VideoParams } from "@servers/types/props";

const videoApi = {
  async getVideos(props: VideoParams) {
    const response = await client.get<Video>(
      `${props.type}/${props.id}/videos`,
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
};

export default videoApi;
