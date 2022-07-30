import { MovieType, Paginate } from "@/servers/types/props";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { IQuery } from "@api/props";

export const moviePopularAdapter = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id,
});

export const initialState = moviePopularAdapter.getInitialState();

export const getMoviesPopular: IQuery<
  any,
  Paginate<Movie>,
  EntityState<Movie>
> = {
  query: () => ({
    url: `movie/${MovieType.popular}`,
    params: { page: 1 },
  }),
  transformResponse: (res) =>
    moviePopularAdapter.setAll(initialState, res.results),
  providesTags: (result: EntityState<Movie>) => [
    { type: "PopularMovie", id: "LIST" },
    ...(result?.ids.map((id) => ({ type: "PopularMovie" as const, id })) ?? []),
  ],
};

export default getMoviesPopular;
