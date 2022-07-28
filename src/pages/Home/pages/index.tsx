import React from "react";
import HomeHeader from "../components/HomeHeader";
import {
  TopRateMovie,
  TrendingMovie,
  TrendingTV,
} from "../components/HomeListMovie";

const Home = () => {
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
