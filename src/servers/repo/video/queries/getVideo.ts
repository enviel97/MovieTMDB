import { IQuery } from "@api/props";
import { Category } from "@servers/types/props";

interface VideoParams {
  id: string;
  catalog: Category;
}

const getTvs: IQuery<VideoParams, Video> = {
  query: (res) => ({
    url: `${res?.catalog}/${res?.id}/videos`,
    params: {},
  }),
  providesTags: (result: Video) => [{ type: "Video", id: result?.id ?? "" }],
};

export default getTvs;
