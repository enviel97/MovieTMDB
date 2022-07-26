import { selectMovieById } from "@/servers/repo/movie";
import { videosApi } from "@/servers/repo/video";
import { Category } from "@/servers/types/props";
import { originImage, trailerVideo, w500Image } from "@api/helpers";
import { Button, ButtonOutline } from "@components/Button";
import { QueryDefinition } from "@reduxjs/toolkit/dist/query/react";
import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useHomeHeaderItem from "./HomeHeaderItem.styles";

const onWatchVideoClick = (navigate: NavigateFunction, id: string) =>
  navigate(`/movie/${id}`);

const onWatchTrailerClick = async (
  id: string,
  getVideo: LazyQueryTrigger<QueryDefinition<VideoParams, any, any, Video, any>>
) => {
  const modalId = `#trial_${id}`;
  const modalContent = `.trial_content_${id}`;
  const modal = document.querySelector(modalId);
  if (!modal) return;
  modal.classList.toggle("active");
  const { data: video, isSuccess } = await getVideo({
    catalog: Category.movie,
    id,
  });

  if (isSuccess && video.results.length !== 0) {
    const videoSrc = trailerVideo(video.results[0].key);
    modal
      .querySelector(`${modalContent} > iframe`)
      ?.setAttribute("src", videoSrc);
  } else {
    const error = document.createTextNode("No trailer");
    modal.querySelector(`${modalContent}`)?.appendChild(error);
  }
};

const HomeHeaderItem = ({ data, className }: IHomeHeaderItemProps) => {
  const styles = useHomeHeaderItem();
  const movie = useSelector((state) => selectMovieById(state, data));
  const [getVideo] = videosApi.useLazyGetVideosQuery();
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
          <div className='btns'>
            <Button onClick={() => onWatchVideoClick(navigate, `${movie.id}`)}>
              Watch now
            </Button>
            <ButtonOutline
              onClick={() => onWatchTrailerClick(`${movie.id}`, getVideo)}
            >
              Watch trailer
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

export default HomeHeaderItem;
