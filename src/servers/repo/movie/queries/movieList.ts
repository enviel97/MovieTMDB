import { IQuery } from "@api/props";
import { EntityState } from "@reduxjs/toolkit/dist/entities/models";
import { Paginate, PaginateParams } from "@servers/types/props";

// export const getMovieList: IQuery<
//   PaginateParams,
//   Paginate<Movie>,
//   EntityState<Movie>
// > = {
//   query: (req) => ({
//     url: `movie/${MovieType.popular}`,
//     params: { page: req?.page ?? 1 },
//   }),
//   transformResponse: (res) => movieAdapter.setAll(initialState, res.results),
//   providesTags: (result: EntityState<Movie>) => [
//     { type: "PopularMovie", id: "LIST" },
//     ...(result?.ids.map((id) => ({ type: "PopularMovie" as const, id })) ?? []),
//   ],
// };

export default {};
