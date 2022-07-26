import React from "react";

import { moviesApi } from "@/servers/repo/movie";
import { HeroSlide } from "@components/Hero";
import HomeHeaderItem from "./HomeHeaderItem";
import HomeVideoTrial from "../HomeVideoTrial";

const HomeHeader = () => {
  const {
    data: movies,
    isError,
    isLoading,
  } = moviesApi.useGetMoviesPopularQuery({ page: 1 });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error Load</div>;
  const _movies = (movies?.ids ?? []).slice(0, 5);

  const _buildItem = (props: IHomeHeaderItemProps) => (
    <HomeHeaderItem data={props.data} className={props.className} />
  );

  return (
    <>
      <HeroSlide data={_movies} createItem={_buildItem} />
      {_movies.map((item, i) => {
        return <HomeVideoTrial key={`${i}?${item}`} idVideo={`${item}`} />;
      })}
    </>
  );
};

export default HomeHeader;
