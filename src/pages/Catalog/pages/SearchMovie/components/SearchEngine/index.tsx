import useAppDispatch from "@/hooks/api/useAppDispatch";
import useAppSelector from "@/hooks/api/useAppSelector";
import ButtonLoadMore from "@pages/Catalog/components/ButtonLoadMore";
import LoadingWraper from "@pages/Catalog/components/LoadingWrapper";
import MovieSearch from "@pages/Catalog/components/MovieSearch";
import { resetStateSearch, searchBy } from "@servers/repo/video/search.slice";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchShowResult from "../SearchShowResult";

const SearchEngine = () => {
  let [searchParams] = useSearchParams();
  const [query, searchQuery] = useState<string>(searchParams.get("q") ?? "");
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { loading, isFirstLoad, totalPage } = useAppSelector(
    (state: any) => state["search"]
  );
  const _loadMore = useCallback(() => {
    setPage((state) => state + 1);
  }, []);

  useEffect(() => {
    if (query.length === 0) return;
    if (page === 1) {
      dispatch(resetStateSearch());
    }
    dispatch(searchBy({ page: page, query: query }));
    return () => {};
  }, [page, dispatch, query]);

  return (
    <section className='container'>
      <div className='section mb3'>
        <div className='mb3'>
          <MovieSearch
            initSearchValue={query}
            searchConfirm={(value) => {
              setPage(1);
              searchQuery(value);
            }}
          />
        </div>
        <LoadingWraper isLoading={isFirstLoad}>
          <div className='mb3'>
            <SearchShowResult />
          </div>
          <ButtonLoadMore
            loadMore={_loadMore}
            loading={loading}
            isLoadMore={totalPage > page}
          />
        </LoadingWraper>
      </div>
    </section>
  );
};

export default SearchEngine;
