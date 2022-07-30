import client from "@api/client";
import { getMovies, getMoviesPopular, getMoviesTrending } from "./queries";
import {
  moviePopularAdapter,
  initialState as popularInit,
} from "./queries/popularMovie";
import {
  movieTrendingAdapter,
  initialState as trendingInit,
} from "./queries/trendingMovie";
import { movieAdapter, initialState as movieInit } from "./queries/movieList";
import { createSelector } from "@reduxjs/toolkit";
import { hookAPIData } from "./helpers/hooksFromApi";

export const moviesApi = client.injectEndpoints({
  endpoints: (builder) => ({
    // getMovies: builder.query(a),
    getMoviesPopular: builder.query(getMoviesPopular),
    getMoviesTrending: builder.query(getMoviesTrending),
    getMovies: builder.query(getMovies),
  }),
});

export const {
  selectById: selectMoviePopularById,
  selectEntities: selectMoviePopular,
  selectIds: selectMoviePopularIds,
} = moviePopularAdapter.getSelectors<any>((state: any) => {
  const _state = hookAPIData(state, {
    reducerPath: moviesApi.reducerPath,
    tagType: { type: "PopularMovie", id: "LIST" },
  });
  return _state ?? popularInit;
});

export const selectSlidePopular = createSelector(
  selectMoviePopularIds,
  (result) => result.slice(0, 4)
);

export const {
  selectById: selectMovieTrendingById,
  selectEntities: selectMovieTrending,
  selectIds: selectMovieTrendingIds,
} = movieTrendingAdapter.getSelectors<any>((state: any) => {
  // const movieSelect = moviesApi.endpoints.getMoviesTrending.select({});
  // return movieSelect(state).data || trendingInit;
  const _state = hookAPIData(state, {
    reducerPath: moviesApi.reducerPath,
    tagType: { type: "TrendingMovie", id: "LIST" },
  });
  return _state ?? trendingInit;
});

export const { selectById: selectMovieById, selectIds: selectMovieIds } =
  movieAdapter.getSelectors<any>((state: any) => {
    const _state = hookAPIData(state, {
      reducerPath: moviesApi.reducerPath,
      tagType: { type: "Movie", id: "PARTIAL-LIST" },
    });
    return _state ?? movieInit;
  });
