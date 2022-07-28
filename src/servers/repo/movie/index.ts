import client from "@api/client";
import { getMovies, getMoviesPopular } from "./queries";
import { movieAdapter, initialState } from "./queries/popularMovie";

export const moviesApi = client.injectEndpoints({
  endpoints: (builder) => ({
    // getMovies: builder.query(a),
    getMoviesPopular: builder.query(getMoviesPopular),
    getMovies: builder.query(getMovies),
  }),
});

export const {
  selectById: selectMoviePopularById,
  selectIds: selectMoviePopularIds,
} = movieAdapter.getSelectors<any>((state: any) => {
  const movieSelect = moviesApi.endpoints.getMoviesPopular.select({});
  return movieSelect(state).data || initialState;
});
