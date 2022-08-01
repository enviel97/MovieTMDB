import useAppDispatch from "@/hooks/api/useAppDispatch";
import { useAppSelector } from "@/hooks/api/useAppSelector";
import { ButtonOutline } from "@components/Button";
import Grid from "@components/Hero/Grid";
import Spinner from "@components/Spinner";
import MovieItem from "@pages/Home/components/HomeListMovie/MovieItem";
import {
  getMovies,
  selectAllMovies,
} from "@servers/repo/movie/getMovies.silce";
import { MovieType } from "@servers/types/props";
import React, { useCallback, useState, useEffect } from "react";
import { mapDatasToProps } from "../helpers/mapping";

const MovieGrid = () => {
  // hooks
  // const { search } = useParams();
  const [page, setPage] = useState(1);
  const movies = useAppSelector(selectAllMovies);
  const loading = useAppSelector((state: any) => state.movies.loading);
  const isFirstLoad = useAppSelector((state: any) => state.movies.isFirstLoad);
  const totalPage = useAppSelector((state: any) => state.movies.totalPage);
  const dispatch = useAppDispatch();

  const _loadMore = useCallback(() => {
    setPage((state) => state + 1);
  }, []);

  useEffect(() => {
    dispatch(getMovies({ page: page, type: MovieType.popular }));
    return () => {};
  }, [page, dispatch]);

  return (
    <section className='container'>
      <div className='section mb3'>
        {isFirstLoad ? (
          <div className='100hv center'>
            <Spinner.Default />
          </div>
        ) : (
          <>
            <Grid
              data={mapDatasToProps(movies)}
              createItem={({ data }) => (
                <MovieItem {...data} isLoading={false} />
              )}
            />
            {totalPage > page && (
              <div className='center'>
                <ButtonOutline onClick={_loadMore} disable={loading}>
                  Load More
                </ButtonOutline>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
