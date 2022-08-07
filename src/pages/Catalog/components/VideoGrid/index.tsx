import Grid from "@components/Hero/Grid";
import MovieItem from "@pages/Home/components/HomeListMovie/MovieItem";
import React from "react";
import { mapDatasToProps } from "../../helpers/mapping";
import ButtonLoadMore from "../ButtonLoadMore";

const VideoGrid = (props: VideoGridView) => {
  // hooks
  const { data, loadMore, loading, isLoadMore, isFirstLoad } = props;

  return (
    <>
      <Grid
        data={mapDatasToProps(data)}
        createItem={({ data }) => (
          <MovieItem {...data} isLoading={isFirstLoad} />
        )}
      />
      <ButtonLoadMore
        loadMore={loadMore}
        loading={loading}
        isLoadMore={isLoadMore}
      />
    </>
  );
};

export default VideoGrid;
