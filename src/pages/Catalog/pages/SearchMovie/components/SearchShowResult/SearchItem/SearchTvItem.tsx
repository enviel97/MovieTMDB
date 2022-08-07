import React from "react";
import { tvGender } from "@servers/types/gender";
import { BsGraphUp, BsHeart } from "react-icons/bs";
import Chip from "@components/Chip";
import { useAppSelector } from "@/hooks/api/useAppSelector";
import { selectSearchById } from "@servers/repo/video/search.slice";
import useSearchItem from "../styles/SearchItem.styles";
import { formatDate } from "@helpers/date";
import SearchItemImage from "../../SearchItemImage";

const SearchTVItem = (props: SearchItemProps) => {
  const { id, className } = props;
  const data = useAppSelector((state) => selectSearchById(state, id));
  if (!data || data.media_type !== "tv") {
    throw new Error(`'Wrong tv ${id}'`);
  }
  const tv = data as TV;
  const styles = useSearchItem();

  const image = tv.poster_path || tv.backdrop_path;

  return (
    <div className={`${className || ""} ${styles.SearchItem}`}>
      <SearchItemImage
        className={styles.SearchItemImage}
        imagePath={image}
        alt={`Poster: ${tv.name}`}
      />
      <h2 className='type'>TVs</h2>
      <div className={styles.SearchItemInfo}>
        <div className='header'>
          <h2 className='header__title'>
            {tv.name}&nbsp;
            <p className='header__release-date'>
              ({formatDate(tv.first_air_date, { format: "MMM, yyyy" })})
            </p>
          </h2>
        </div>
        <div className='gender-list'>
          {tv.genre_ids.map((data) => (
            <Chip key={data} text={tvGender[data]} />
          ))}
        </div>
        <div className='decription'>
          <span className='decription__overview'>
            <h3>Overview</h3>
            {tv.overview || "Being upload ..."}
          </span>
          <div className='decription__info-voting'>
            <span>
              <BsHeart /> &emsp; {tv.vote_count}
            </span>
            <span>
              <BsGraphUp /> &emsp; {tv.popularity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTVItem;
