import { PageHeader } from "@components/Header";
import React from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";

const Catalog = () => {
  const { category } = useParams();
  const title = !!category && category === "movie" ? "MOVIES" : "TV SERIES";
  return (
    <React.Fragment>
      <PageHeader>{title}</PageHeader>
      <MovieGrid />
    </React.Fragment>
  );
};

export default Catalog;
