import useAppDispatch from "@/hooks/api/useAppDispatch";
import { getMoviesPopular } from "@servers/repo/movie/getMoviesPopular.slice";
import { getMoviesTrending } from "@servers/repo/movie/getMoviesTrending.slice";
import { getTvsTrending } from "@servers/repo/tv/getTvTrending.slice";
import React, { useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import {
  TopRateMovie,
  TrendingMovie,
  TrendingTV,
} from "../components/HomeListMovie";

const Home = () => {
  // load data
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(getMoviesPopular());
      await dispatch(getMoviesTrending());
      await dispatch(getTvsTrending());
    };
    fetch();
    return () => {};
  }, [dispatch]);

  return (
    <React.Fragment>
      <HomeHeader />
      <TrendingMovie />
      <TopRateMovie />
      <TrendingTV />
    </React.Fragment>
  );
};

export default Home;
