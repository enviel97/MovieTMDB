import { originImage, w500Image } from "@api/helpers";
import { Button, ButtonOutline } from "@components/Button";
import { selectMoviePopularById } from "@servers/repo/movie/getMoviesPopular.slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useHomeHeaderItem from "./HomeHeaderItem.styles";

const HomeHeaderItem = ({
  data,
  className,
  onWatchMovieClick,
  onWatchTrialClick,
}: IHomeHeaderItemProps) => {
  const styles = useHomeHeaderItem();
  const movie = useSelector((state) => selectMoviePopularById(state, data));

  if (!movie) return <>Loading</>;

  const background = originImage(movie.backdrop_path ?? movie.poster_path);
  const poster = w500Image(movie.poster_path);

  return (
    <>
      <div
        className={`${styles.item} ${className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={`${styles.itemContent} container`}>
          <div className={`${styles.itemContentInfo}`}>
            <div className='title'>{movie.title}</div>
            <div className='overview'>{movie.overview}</div>
            <div className='btns'>
              <Button onClick={() => onWatchMovieClick(`${data}`)}>
                Watch now
              </Button>
              <ButtonOutline onClick={() => onWatchTrialClick(`${data}`)}>
                Watch trailer
              </ButtonOutline>
            </div>
          </div>
          <div className={styles.itemContentPoster}>
            <img src={poster} alt={`Poster ${movie.title}`} loading='lazy' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeaderItem;
