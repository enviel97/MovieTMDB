import React, { useEffect, useState } from "react";
import { size } from "@/helpers/size";
import useBox from "@/hooks/styles/useBox";
import { w500Image } from "@api/helpers";
import Spinner from "@components/Spinner";
import { Link } from "react-router-dom";
import useMovieItemStyle from "./MovieItem.styles";
import { GiPlayButton } from "react-icons/gi";
import { Button } from "@components/Button";

const MovieItem = ({ src, name, href, isLoading }: IMovieItemProps) => {
  const [loading, setLoading] = useState(true);
  const boxStyle = useBox({ height: size(160)["%"] });
  const styles = useMovieItemStyle({ src: w500Image(src) });

  useEffect(() => {
    setLoading((_) => isLoading ?? true);
  }, [isLoading]);

  if (loading) {
    return (
      <div className={`${boxStyle.border} ${styles.movieCard}`}>
        <Spinner.Default height={size(100)["%"]} />
      </div>
    );
  }

  return (
    <Link to={href}>
      <div className={`${styles.backgroud} ${styles.movieCard}`}>
        <Button className={"btn-play"}>
          <GiPlayButton />
        </Button>
      </div>
      <h3 className={styles.movieTitle}>{name}</h3>
    </Link>
  );
};

export default MovieItem;
