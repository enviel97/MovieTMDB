import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeTrendingMovie from "../components/HomeTrendingMovie";

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeTrendingMovie />
    </React.Fragment>
  );
};

export default Home;
