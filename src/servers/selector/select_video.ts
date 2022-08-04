import { createSelector } from "@reduxjs/toolkit";
import { selectAllMovies } from "@servers/repo/movie/getMovies.silce";
import { selectAllTVs } from "@servers/repo/tv/getTv.slice";

export const selectVideobyCatalog = createSelector(
  [selectAllMovies, selectAllTVs, (_: any, catalog: string) => catalog],
  (movie, tv, catalog: string) => {
    if (catalog === "movie") return movie;
    else return tv;
  }
);
