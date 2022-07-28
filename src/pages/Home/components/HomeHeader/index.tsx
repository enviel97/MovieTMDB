import React, { useCallback, useRef } from "react";
import { HeroSlide } from "@components/Hero";
import HomeHeaderItem from "./HomeHeaderItem";
import HomeVideoTrial from "../HomeVideoTrial";
import { useNavigate } from "react-router-dom";
import { Category } from "@/servers/types/props";
import { trailerVideo } from "@api/helpers";
import Spinner from "@components/Spinner";
import { moviesApi } from "@servers/repo/movie";
import { videosApi } from "@servers/repo/video";

const HomeHeader = () => {
  // hooks
  const {
    data: movies,
    isError,
    isLoading,
  } = moviesApi.useGetMoviesPopularQuery({});
  const navigate = useNavigate();
  const [fetch] = videosApi.useLazyGetVideosQuery();
  const controller = useRef<IHomeVideoTrialController>(null);

  const onWatchVideoClick = useCallback(
    (id: string) => navigate(`/movie/${id}`),
    [navigate]
  );

  const onWatchTrailerClick = useCallback(
    async (id: string) => {
      if (!controller.current) return;

      controller.current.loadingIs(true);
      controller.current.openModal();

      const { data, isSuccess } = await fetch({
        catalog: Category.movie,
        id,
      });
      controller.current.loadingIs(false);
      let videoSrc: string | undefined;
      if (isSuccess && data.results.length !== 0) {
        videoSrc = trailerVideo(data.results[0].key);
        controller.current.connectTrailer(videoSrc);
      }
    },
    [fetch]
  );

  if (isLoading) return <Spinner.Default height='90vh' />;
  if (isError) return <div>Error Load</div>;

  return (
    <section>
      <HeroSlide
        data={movies?.ids ?? []}
        createItem={(props: HeroSlideItemProps) => (
          // Item silde design
          <HomeHeaderItem
            data={props.data}
            className={props.className}
            onWatchMovieClick={onWatchVideoClick}
            onWatchTrialClick={onWatchTrailerClick}
          />
        )}
      />
      <HomeVideoTrial ref={controller} />
    </section>
  );
};

export default HomeHeader;
