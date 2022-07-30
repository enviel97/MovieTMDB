import { IQuery } from "@api/props";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { MovieType, Paginate, PaginateParams } from "@servers/types/props";

type GetMoviesRequest = {
  type: MovieType;
} & PaginateParams;

export const movieAdapter = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id,
});

export const initialState = movieAdapter.getInitialState();

const getMovies: IQuery<
  GetMoviesRequest,
  Paginate<Movie>,
  EntityState<Movie>
> = {
  query: (req) => ({
    url: `movie/${req!.type}`,
    params: { page: req?.page ?? 1 },
  }),
  transformResponse: (res) => {
    return movieAdapter.upsertMany(initialState, res.results);
  },
  providesTags: (datas: EntityState<Movie>) => [
    { type: "Movie", id: "PARTIAL-LIST" },
    ...(datas?.ids.map((id) => ({
      type: "Movie" as const,
      id: id,
    })) ?? []),
  ],
};

export default getMovies;
