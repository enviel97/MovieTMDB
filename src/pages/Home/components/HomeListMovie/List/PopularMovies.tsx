import List from "@components/Hero/List";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import React from "react";
import useAppSelector from "@/hooks/api/useAppSelector";
import { selectAllMoviePopulars } from "@servers/repo/movie/getMoviesPopular.slice";

const TrendingMovie = () => {
  const href = "/movie";
  const isLoading = useAppSelector((state) => state.moviesPopular.loading);
  const datas = useAppSelector(selectAllMoviePopulars);

  return (
    <section className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Trending Movies</h2>
          <h4>View more</h4>
        </Link>

        <List
          data={datas}
          createItem={({ data }: { data: Movie }) => (
            <MovieItem
              href={`${href}/${data.id}`}
              src={data.poster_path}
              name={data.title}
              voteCount={data.vote_count}
              popularity={data.popularity}
              releaseDate={data.release_date}
              isLoading={isLoading}
              isAdult={data.adult}
            />
          )}
        />
      </div>
    </section>
  );
};
export default TrendingMovie;
