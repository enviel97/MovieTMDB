import { moviesApi, selectMovieIds } from "@servers/repo/movie";
import { MovieType } from "@servers/types/props";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieGrid = (props: MovieGridProps) => {
  const { category } = useParams();
  const { data, isLoading, isSuccess } = moviesApi.useGetMoviesQuery(
    { page: 1, type: MovieType.upcoming },
    { skip: !category }
  );
  const movies = useSelector(selectMovieIds);

  return (
    <section className='container'>
      <div className='section mb3'>MOVIE GRID</div>
    </section>
  );
};

export default MovieGrid;
