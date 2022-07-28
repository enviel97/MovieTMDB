import { Category } from "@/servers/types/props";
import client from "@api/client";
import { getVideo, getSimilar } from "./queries";

export const videosApi = client.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query(getVideo),
    getSimilar: builder.query(getSimilar),
  }),
});

export const searchVideos = async (category: Category, params: any) => {
  // try {
  //   const url = `search/${category}`;
  //   const result = await client.get(url, params);
  //   return result;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
};

export const similarVideos = async (category: Category, id: string) => {
  // try {
  //   const url = `${category}/${id}/similar`;
  //   const result = await client.get(url);
  //   return result;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
};

export const detailVideo = async (
  category: Category,
  id: string,
  params: any
) => {
  // try {
  //   const url = `${category}/${id}`;
  //   const result = await client.get(url, params);
  //   return result;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
};
