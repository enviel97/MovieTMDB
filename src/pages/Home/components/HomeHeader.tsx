import React from "react";
import { HeroSlide } from "@components/Hero";
import { moviesApi, selectMovieById } from "@/servers/repo/movie";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { originImage, w500Image } from "@api/images";
import { createUseStyles } from "react-jss";
import { Button, ButtonOutline } from "@components/Button";
import { useNavigate } from "react-router-dom";
import { colors } from "@constants";
import { flex } from "@stylesHelper/mixin";

const useHomeHeaderItem = createUseStyles({
  item: {
    padding: ["9rem", 0],
    width: "100%",
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: colors.overplay,
    },
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100px",
      backgroundImage: `liner-gradient(to top, ${colors.backgroundColor}, #00000000)`,
    },
  },
  itemContent: {
    ...flex({ justifyContent: "center", alignItems: "center" }),
  },
  itemContentInfo: {
    width: "55%",
    padding: [0, "3rem"],
  },
  itemContentPoster: {},
  title: {},
  overview: {},
  btns: {},
});

const HomeHeaderItem = ({
  data,
  className,
}: {
  data: EntityId;
  className: string;
}) => {
  const styles = useHomeHeaderItem();
  const movie = useSelector((state) => selectMovieById(state, data));
  const navigate = useNavigate();

  if (!movie) return <>Loading</>;
  const background = originImage(movie.backdrop_path ?? movie.poster_path);
  const poster = w500Image(movie.poster_path);
  return (
    <div
      className={`${styles.item} ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={`${styles.itemContent} container`}>
        <div className={`${styles.itemContentInfo}`}>
          <div className='title'>{movie.title}</div>
          <div className='overview'>{movie.overview}</div>
          <div className={`${styles.btns}`}>
            <Button onClick={() => navigate(`/movie/${movie.id}`)}>
              Watch now
            </Button>
            <ButtonOutline onClick={() => console.log("trailer")}>
              Watch now
            </ButtonOutline>
          </div>
        </div>
        <div className={styles.itemContentPoster}>
          <img src={poster} alt={`Poster ${movie.title}`} />
        </div>
      </div>
    </div>
  );
};

const HomeHeader = () => {
  const {
    data: movies,
    isError,
    isLoading,
  } = moviesApi.useGetMoviesPopularQuery({ page: 1 });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error Load</div>;

  return (
    <>
      <HeroSlide data={movies?.ids ?? []} createItem={HomeHeaderItem} />
    </>
  );
};

export default HomeHeader;
