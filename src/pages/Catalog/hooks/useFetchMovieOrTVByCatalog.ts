import useAppDispatch from "@/hooks/api/useAppDispatch";
import { useAppSelector } from "@/hooks/api/useAppSelector";
import { getMovies } from "@servers/repo/movie/getMovies.silce";
import { getTvs } from "@servers/repo/tv/getTv.slice";
import { selectVideobyCatalog } from "@servers/selector/select_video";
import { MovieType, TvType } from "@servers/types/props";
import { useCallback, useEffect, useState } from "react";

const useFetchMovieOrTVByCatalog = (catelogy: string) => {
  const dispatch = useAppDispatch();
  const catalog = `${catelogy}s`;
  const [page, setPage] = useState(1);
  const data = useAppSelector((state) => selectVideobyCatalog(state, catelogy));
  const { loading, isFirstLoad, totalPage } = useAppSelector(
    (state: any) => state[catalog]
  );
  const _loadMore = useCallback(() => {
    setPage((state) => state + 1);
  }, []);

  useEffect(() => {
    if (catelogy === "movie") {
      dispatch(getMovies({ page: page, type: MovieType.upcoming }));
    } else {
      dispatch(getTvs({ page: page, type: TvType.popular }));
    }
    return () => {};
  }, [page, dispatch, catelogy]);

  return {
    data,
    loading,
    isFirstLoad,
    isLoadMore: totalPage > page,
    loadMore: _loadMore,
  };
};

export default useFetchMovieOrTVByCatalog;
