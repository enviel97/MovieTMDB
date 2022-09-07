import { PageHeader } from "@components/Header";
import React from "react";
import ShowVideo from "../components/ShowVideo";

interface CatalogProps {
  category: string;
}

const Catalog = (props: CatalogProps) => {
  const title = props.category === "movie" ? "MOVIES" : "TV SERIES";

  return (
    <React.Fragment>
      <PageHeader title={title} />
      <ShowVideo category={props.category} />
    </React.Fragment>
  );
};

export default Catalog;
