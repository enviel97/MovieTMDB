import useAppDispatch from "@/hooks/api/useAppDispatch";
import { useAppSelector } from "@/hooks/api/useAppSelector";
import { ButtonOutline } from "@components/Button";
import Grid from "@components/Hero/Grid";
import Spinner from "@components/Spinner";
import MovieItem from "@pages/Home/components/HomeListMovie/MovieItem";
import { getTvs, selectAllTVs } from "@servers/repo/tv/getTv.slice";
import { TvType } from "@servers/types/props";
import React, { useCallback, useEffect, useState } from "react";
import { mapDatasToProps } from "../helpers/mapping";

const TVGrid = () => {
  // hooks
  // const { search } = useParams();
  const [page, setPage] = useState(1);
  const tvs = useAppSelector(selectAllTVs);
  const loading = useAppSelector((state: any) => state.tvs.loading);
  const isFirstLoad = useAppSelector((state: any) => state.tvs.isFirstLoad);
  const totalPage = useAppSelector((state: any) => state.tvs.totalPage);
  const dispatch = useAppDispatch();

  const _loadMore = useCallback(() => {
    setPage((state) => state + 1);
  }, []);

  useEffect(() => {
    dispatch(getTvs({ page: page, type: TvType.popular }));
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
              data={mapDatasToProps(tvs)}
              createItem={({ data }) => (
                <MovieItem {...data} isLoading={isFirstLoad} />
              )}
            />
            {totalPage > page && (
              <div className='center'>
                <ButtonOutline onClick={_loadMore} disable={loading}>
                  <div>Load More</div>
                </ButtonOutline>
                {loading && <Spinner.Loader spinnerSize={"1.2rem"} />}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TVGrid;
