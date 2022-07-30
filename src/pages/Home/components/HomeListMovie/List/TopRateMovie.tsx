import List from "@components/Hero/List";
import { moviesApi } from "@servers/repo/movie";
import { MovieType } from "@servers/types/props";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import React from "react";

const TopRateMovie = () => {
  const href = "/movie";
  const { data: movies, isLoading } = moviesApi.useGetMoviesQuery({
    type: MovieType.top_rated,
  });

  return (
    <section className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Top Rated Movies</h2>
          <h4>View more</h4>
        </Link>

        <List
          data={movies ?? []}
          createItem={({ data }: { data: Movie }) => (
            <MovieItem
              href={`${href}/${data.id}`}
              src={data.poster_path}
              name={data.title}
              releaseDate={data.release_date}
              popularity={data.popularity}
              voteCount={data.vote_count}
              isAdult={data.adult}
              isLoading={isLoading}
            />
          )}
        />
      </div>
    </section>
  );
};
export default TopRateMovie;
