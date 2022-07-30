import { MovieType, Paginate } from "@/servers/types/props";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { IQuery } from "@api/props";

export const movieTrendingAdapter = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id,
});

export const initialState = movieTrendingAdapter.getInitialState();

export const getMoviesTrending: IQuery<
  any,
  Paginate<Movie>,
  EntityState<Movie>
> = {
  query: () => ({
    url: `movie/${MovieType.top_rated}`,
    params: { page: 1 },
  }),
  transformResponse: (res) =>
    movieTrendingAdapter.setAll(initialState, res.results),
  providesTags: (result: EntityState<Movie>) => [
    { type: "TrendingMovie", id: "LIST" },
    ...(result?.ids.map((id) => ({ type: "TrendingMovie" as const, id })) ??
      []),
  ],
};

export default getMoviesTrending;
