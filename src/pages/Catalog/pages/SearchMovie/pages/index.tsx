import { PageHeader } from "@components/Header";
import React from "react";
import SearchEngine from "../components/SearchEngine";

const SearchPage = () => {
  return (
    <React.Fragment>
      <PageHeader title='Result' />
      <SearchEngine />
    </React.Fragment>
  );
};

export default SearchPage;
