import { MovieType, Paginate } from "@/servers/types/props";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { IQuery } from "@api/props";

const movieAdapter = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id,
});

export const initialState = movieAdapter.getInitialState();

export const getMoviesPopular: IQuery<
  any,
  Paginate<Movie>,
  EntityState<Movie>
> = {
  query: (_) => ({
    url: `movie/${MovieType.popular}`,
    params: { page: 1 },
  }),
  transformResponse: (res) =>
    movieAdapter.setAll(initialState, res.results.slice(0, 5)),
  providesTags: (result: EntityState<Movie>) => [
    { type: "PopularMovie", id: "LIST" },
    ...(result?.ids.map((id) => ({ type: "PopularMovie" as const, id })) ?? []),
  ],
};

export default movieAdapter;
