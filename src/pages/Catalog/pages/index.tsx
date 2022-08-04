import { PageHeader } from "@components/Header";
import React from "react";
import { useParams } from "react-router-dom";
import ShowVideo from "../components/ShowVideo";

const Catalog = () => {
  const { category = "movie" } = useParams();
  const title = category === "movie" ? "MOVIES" : "TV SERIES";

  return (
    <React.Fragment>
      <PageHeader title={title} />
      <ShowVideo category={category} />
    </React.Fragment>
  );
};

export default Catalog;
