import client from "@api/client";
import { Paginate, PaginateParams, MovieType } from "@servers/types/props";

const pathUrl = "movie/";

const movieApi = {
  async getMovies(props: PaginateParams<MovieType>) {
    const response = await client.get<Paginate<Movie>>(
      `${pathUrl}${props.type}`,
      {
        params: { page: props.page ?? 1 },
      }
    );
    return response;
  },
};

export default movieApi;
