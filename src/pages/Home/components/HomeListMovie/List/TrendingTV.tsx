import List from "@components/Hero/List";
import { TvType } from "@servers/types/props";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import React from "react";
import { tvApi } from "@servers/repo/tv";

const TrendingTV = () => {
  const href = "/tv";
  const { data: tv, isLoading } = tvApi.useGetTvsQuery({
    type: TvType.popular,
  });

  return (
    <section className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Trending TVs</h2>
          <h4>View more</h4>
        </Link>

        <List
          data={tv ?? []}
          createItem={({ data }: { data: TV }) => (
            <MovieItem
              href={`${href}/${data.id}`}
              src={data.poster_path}
              name={data.name}
              isLoading={isLoading}
            />
          )}
        />
      </div>
    </section>
  );
};
export default TrendingTV;
