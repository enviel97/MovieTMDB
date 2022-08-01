import client from "@api/client";
import { VideoParams } from "@servers/types/props";

const videoApi = {
  async getVideos(props: VideoParams) {
    const response = await client.get<Video>(
      `${props.type}/${props.id}/videos`,
      { params: {} }
    );
    return response;
  },
};

export default videoApi;
