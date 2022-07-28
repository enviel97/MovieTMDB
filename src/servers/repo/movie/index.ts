import client from "@api/client";
import { createSelector } from "@reduxjs/toolkit";
import movieAdapter, {
  getMoviesPopular,
  initialState,
} from "./queries/popularMovie";

export const moviesApi = client.injectEndpoints({
  endpoints: (builder) => ({
    // getMovies: builder.query(a),
    getMoviesPopular: builder.query(getMoviesPopular),
  }),
});

// selector
const selectMoviesData = createSelector(
  moviesApi.endpoints.getMoviesPopular.select({ page: 1 }),
  (moviesResult) => moviesResult.data
);

export const { selectById: selectMovieById, selectIds: selectMovieIds } =
  movieAdapter.getSelectors<any>(
    (state: any) => selectMoviesData(state) || initialState
  );
