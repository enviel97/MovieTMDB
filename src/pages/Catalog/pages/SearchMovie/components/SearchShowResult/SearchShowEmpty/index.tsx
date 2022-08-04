import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearchShowEmpty from "./SearchShowEmpty.styles";

const SearchShowEmpty = () => {
  const [queryString] = useSearchParams();

  const styles = useSearchShowEmpty();
  return (
    <div className={`${styles.none}`}>
      <p>
        Don't have any result about
        <br />
        <b>"{queryString.get("q")}"</b>
      </p>
    </div>
  );
};

export default SearchShowEmpty;
