import { IQuery } from "@api/props";
import { MovieType, Paginate, PaginateParams } from "@servers/types/props";

type GetMoviesRequest = {
  type: MovieType;
} & PaginateParams;

const getMovies: IQuery<GetMoviesRequest, Paginate<Movie>, Movie[]> = {
  query: (req) => ({
    url: `movie/${req!.type}`,
    params: { page: req?.page ?? 1 },
  }),
  transformResponse: (res) => res.results,
  providesTags: (datas: Movie[]) => [
    { type: "Movie", id: "LIST" },
    ...(datas?.map((data) => ({
      type: "Movie" as const,
      id: data.id,
    })) ?? []),
  ],
};

export default getMovies;
