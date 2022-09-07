import List from "@components/Hero/List";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import MovieItem from "@pages/Home/components/HomeListMovie/MovieItem";
import useFetchData from "@/hooks/api/useFetchData";
import { Category } from "@servers/types/props";
import videoApi from "@servers/api/videoApi";

const Similar = ({ id, category }: SimilarsProp) => {
  const isMovie = useMemo(() => category === "movie", [category]);
  const href = isMovie ? "/movie" : "/tv";
  const type = category === "movie" ? Category.movie : Category.tv;
  const { data, loading } = useFetchData(
    [{ type: type, id: `${id}` }],
    videoApi.similar
  );

  return (
    <section className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Trending Movies</h2>
          <h4>View more</h4>
        </Link>

        <List
          data={data?.results ?? []}
          createItem={({ data }) => (
            <MovieItem
              href={`${href}/${data.id}`}
              src={data.poster_path ?? data.backdrop_path}
              name={data.title ?? data.name}
              voteCount={data.vote_count}
              popularity={data.popularity}
              releaseDate={data.release_date}
              isLoading={loading}
              isAdult={!!data.adult}
            />
          )}
        />
      </div>
    </section>
  );
};
export default Similar;
