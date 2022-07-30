import List from "@components/Hero/List";
import { moviesApi, selectMovieTrending } from "@servers/repo/movie";
import { MovieType } from "@servers/types/props";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import React from "react";
import { useSelector } from "react-redux";

const TopRateMovie = () => {
  const href = "/movie";
  const { isLoading } = moviesApi.useGetMoviesTrendingQuery({});

  const movies = useSelector(selectMovieTrending);

  return (
    <section className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Top Rated Movies</h2>
          <h4>View more</h4>
        </Link>

        <List
          data={Object.values(movies) ?? []}
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
