import { IQuery } from "@api/props";
import { Paginate, PaginateParams, TvType } from "@servers/types/props";

type GetTVRequest = {
  type: TvType;
} & PaginateParams;

const getTvs: IQuery<GetTVRequest, Paginate<TV>, TV[]> = {
  query: (req) => ({
    url: `tv/${req!.type}`,
    params: { page: req?.page ?? 1 },
  }),
  transformResponse: (res) => res.results,
  providesTags: (result: TV[]) => [
    { type: "TV", id: "LIST" },
    ...(result?.map((id) => ({ type: "TV" as const, id })) ?? []),
  ],
};

export default getTvs;
