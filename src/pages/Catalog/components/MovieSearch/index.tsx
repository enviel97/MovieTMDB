import { Button } from "@components/Button";
import SearchInput from "@components/Form/SearchInput";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMovieSearchStyles from "./MovieSearch.styles";

const MovieSearch = (props: MovieSearchProps) => {
  const styles = useMovieSearchStyles();
  const navigator = useNavigate();
  const [search, setSearch] = useState<string>(props.initSearchValue ?? "");

  const _onChanged = useCallback(
    (value: string) => {
      setSearch(value);
      props.onSearchChange?.call(this, value);
    },
    [props.searchConfirm]
  );

  const confirmSearch = useCallback(() => {
    const query = search?.trim().replaceAll(" ", "+");
    if (!query) return;
    props.searchConfirm?.call(this, search?.trim());
    navigator(`/search?q=${query}`);
  }, [search, props.searchConfirm]);

  useEffect(() => {
    const hitEnterToConfirm = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "Enter") {
        confirmSearch();
      }
    };
    document.addEventListener("keyup", hitEnterToConfirm);
    return () => document.removeEventListener("keyup", hitEnterToConfirm);
  }, [confirmSearch, search]);

  return (
    <div className={styles.movieSearch}>
      <SearchInput
        id='SearchVideo'
        placeHolder='Enter name of movie or tv series...'
        initValue={props.initSearchValue}
        onChanged={_onChanged}
      />
      <Button onClick={confirmSearch} disable={!search.trim()} small>
        Search
      </Button>
    </div>
  );
};

export default MovieSearch;
