import { IQuery } from "@api/props";
import { Category } from "@servers/types/props";

interface VideoParams {
  id: string;
  catalog: Category;
}

const getSimilar: IQuery<VideoParams, Video> = {
  query: (res) => ({
    url: `${res?.catalog}/${res?.id}/similar`,
    params: {},
  }),
  providesTags: (result: Video) => [{ type: "Similar", id: result?.id ?? "" }],
};

export default getSimilar;
