import { PageHeader } from "@components/Header";
import React from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
import TVGrid from "../components/TvGrid";

const Catalog = () => {
  const { category } = useParams();
  const title = category === "movie" ? "MOVIES" : "TV SERIES";

  return (
    <React.Fragment>
      <PageHeader>{title}</PageHeader>
      {category === "movie" ? <MovieGrid /> : <TVGrid />}
    </React.Fragment>
  );
};

export default Catalog;
