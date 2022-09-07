import React, { useCallback, useRef } from "react";
import { HeroSlide } from "@components/Hero";
import HomeHeaderItem from "./HomeHeaderItem";
import HomeVideoTrial from "../HomeVideoTrial";
import { useNavigate } from "react-router-dom";
import { Category } from "@/servers/types/props";
import { trailerVideo } from "@api/helpers";
import useAppSelector from "@/hooks/api/useAppSelector";
import { selectMovieSlice } from "@servers/repo/movie/getMoviesPopular.slice";
import videoApi from "@servers/api/videoApi";
import Spinner from "@components/Spinner";

const HomeHeader = () => {
  // hooks
  const navigate = useNavigate();
  const controller = useRef<IHomeVideoTrialController>(null);
  const movies = useAppSelector(selectMovieSlice);
  const onWatchVideoClick = useCallback(
    (id: string) => navigate(`/movie/${id}`),
    [navigate]
  );

  const onWatchTrailerClick = useCallback(async (id: string) => {
    if (!controller.current) return;

    controller.current.loadingIs(true);
    controller.current.openModal();

    try {
      const { data } = await videoApi.getVideos({
        type: Category.movie,
        id,
      });
      let videoSrc: string | undefined;
      if (data.results.length !== 0) {
        videoSrc = trailerVideo(data.results[0].key);
        controller.current.connectTrailer(videoSrc);
      }
      controller.current.loadingIs(false);
    } catch (error) {
      controller.current.loadingIs(false);
    }
  }, []);

  return (
    <section>
      {movies.length === 0 && <Spinner.Default height={"90vh"} />}
      {movies.length !== 0 && (
        <HeroSlide
          data={movies ?? []}
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
      )}
      <HomeVideoTrial ref={controller} />
    </section>
  );
};

export default HomeHeader;
