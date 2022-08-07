import { originImage } from "@api/helpers";
import Background from "@components/Image/Background";
import React from "react";
import Casts from "../Casts";
import useItemHeaderStyles from "./ItemHeader.styles";
import error from "@assets/images/No_Image_Available.jpg";

const ItemHeader = ({
  id,
  bannerSrc,
  posterSrc,
  title,
  genres,
  overview,
  date,
  tagline,
  popularity = 0,
  voteRating = 0,
}: ItemHeaderProps) => {
  const styles = useItemHeaderStyles();
  return (
    <>
      <Background className={`${styles.header}`} src={originImage(bannerSrc)}>
        <div>let cgeck</div>
      </Background>
      <div className={`mb3 ${styles.movieContent}`}>
        <div className='poster'>
          <img
            className='poster__image'
            src={originImage(posterSrc)}
            onLoad={(e) => {
              e.currentTarget.classList.add("loaded");
            }}
            onError={(e) => {
              e.currentTarget.src = error;
            }}
            alt={`Poster: ${title}`}
          />
        </div>

        <div className='info'>
          <div>
            <h1 className='info__title'>{title}</h1>
            {tagline && (
              <p className='info__subTitle'>&quot; {tagline} &quot;</p>
            )}
            <p className='info__date'>{date}</p>
          </div>
          <div className='info__genres'>
            {genres
              ? genres.slice(0, 5).map((gender) => (
                  <span className='info__genres--item' key={gender.id}>
                    {gender.name}
                  </span>
                ))
              : "Being updata ..."}
          </div>
          <div>
            <p className='info__overview'>{overview}</p>
            <span className='info__voting'>
              <b>Like:&nbsp;</b>
              {voteRating}&emsp;-&emsp;<b>Popularity:&nbsp;</b>
              {popularity}
            </span>
          </div>
          <Casts className='info__casts' id={id} />
        </div>
      </div>
    </>
  );
};

export default ItemHeader;
