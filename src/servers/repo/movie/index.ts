import { MovieType, Paginate, PaginateParams } from "@/servers/types/props";
import client from "@api/client";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const movieAdapter = createEntityAdapter<Movie>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (movie) => movie.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = movieAdapter.getInitialState();

export const moviesApi = client.injectEndpoints({
  endpoints: (builder) => ({
    getMoviesPopular: builder.query({
      query: ({ page = 1 }: PaginateParams) => ({
        url: `movie/${MovieType.popular}`,
        params: { page },
      }),
      transformResponse: (res: Paginate<Movie>) => {
        // transfrom data after request
        return movieAdapter.setAll(initialState, res.results);
      },
      providesTags: (result) => [
        { type: "Movie", id: "LIST" },
        ...(result?.ids.map((id) => ({ type: "Movie" as const, id })) ?? []),
      ],
    }),
  }),
});

const selectMoviesData = createSelector(
  moviesApi.endpoints.getMoviesPopular.select({ page: 1 }),
  (moviesResult) => moviesResult.data
);

export const {
  selectAll: selectAllMovies,
  selectById: selectMovieById,
  selectIds: selectMovieIds,
} = movieAdapter.getSelectors<any>(
  (state) => selectMoviesData(state) ?? initialState
);

export const selectTopMovies = createSelector(
  selectMovieIds,
  (state: number) => state,
  (moviesResult, quantity) => moviesResult.slice(0, quantity)
);
