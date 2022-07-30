import React, { useEffect, useState } from "react";
import useBox from "@/hooks/styles/useBox";
import { w500Image } from "@api/helpers";
import Spinner from "@components/Spinner";
import useMovieItemStyle from "./MovieItem.styles";
import { GiPlayButton } from "react-icons/gi";
import { Button } from "@components/Button";
import { BsGraphUp, BsHeart } from "react-icons/bs";
import { formatDate } from "@/helpers/date";

const MovieItemLoading = () => {
  const boxStyle = useBox({});
  return (
    <>
      <div
        className={`${boxStyle.border}`}
        style={{
          position: "relative",
          marginBottom: "1rem",
          padding: "50%",
        }}
      >
        <Spinner.Default />
      </div>
      <h3 style={{ textAlign: "center" }}>loading...</h3>
    </>
  );
};

const MovieItem = ({
  src,
  name,
  href,
  releaseDate,
  voteCount = 0,
  popularity = 0,
  isLoading,
  isAdult,
}: IMovieItemProps) => {
  const [loading, setLoading] = useState(true);
  const styles = useMovieItemStyle({ src: w500Image(src) });

  useEffect(() => {
    setLoading((_) => isLoading ?? true);
  }, [isLoading]);

  if (loading) return <MovieItemLoading />;

  return (
    <div className={styles.movieCard}>
      <div className={`${styles.backgroud} ${styles.movieCardContent}`}>
        <Button className={"btn-play"}>
          <GiPlayButton />
        </Button>
        {!!isAdult && <div className={`${"adult-flag"}`}>adult</div>}
        <div className={"info"}>
          {!!releaseDate && <h3>{formatDate(releaseDate)}</h3>}
          <div className='info-voting'>
            <span>
              <BsHeart />
              &emsp;
              {voteCount}
            </span>
            <span>
              <BsGraphUp />
              &emsp;
              {popularity}
            </span>
          </div>
        </div>
      </div>
      <h3 className={styles.movieTitle}>{name}</h3>
    </div>
  );
};

export default MovieItem;
