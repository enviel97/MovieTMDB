import React from "react";
import { movieGender } from "@servers/types/gender";
import { BsGraphUp, BsHeart } from "react-icons/bs";
import Chip from "@components/Chip";
import { useAppSelector } from "@/hooks/api/useAppSelector";
import { selectSearchById } from "@servers/repo/video/search.slice";
import useSearchItem from "../styles/SearchItem.styles";
import { formatDate } from "@helpers/date";
import SearchItemImage from "../../SearchItemImage";

const SearchMovieItem = (props: SearchItemProps) => {
  const { id, className } = props;
  const data = useAppSelector((state) => selectSearchById(state, id));
  if (!data || data.media_type !== "movie") {
    throw new Error(`'Wrong movie ${id}'`);
  }
  const movie = data as Movie;
  const styles = useSearchItem();

  const image = movie.poster_path || movie.backdrop_path;

  return (
    <div className={`${className || ""} ${styles.SearchItem}`}>
      <SearchItemImage
        className={styles.SearchItemImage}
        imagePath={image}
        aldut={movie.adult}
        alt={`Poster: ${movie.title}`}
      />
      <h1 className='type'>MOVIEs</h1>
      <div className={styles.SearchItemInfo}>
        <div className='header'>
          <h2 className='header__title'>
            {movie.title}&nbsp;
            <p className='header__release-date'>
              ({formatDate(movie.release_date, { format: "MMM, yyyy" })})
            </p>
          </h2>
        </div>
        <div className='gender-list'>
          {movie.genre_ids.map((data) => (
            <Chip key={data} text={movieGender[data]} />
          ))}
        </div>
        <div className='decription'>
          <span className='decription__overview'>
            <h3>Overview</h3>
            {movie.overview || "Being upload ..."}
          </span>
          <div className='decription__info-voting'>
            <span>
              <BsHeart /> &emsp; {movie.vote_count}
            </span>
            <span>
              <BsGraphUp /> &emsp; {movie.popularity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieItem;
