import React from "react";
import useBackgroundStyle from "./Background.styles";

const Background = (props: BackgroundProps) => {
  const {
    src,
    position = "center",
    repeat = "no-repeat",
    size = "cover",
  } = props;
  const styles = useBackgroundStyle({
    src,
    position,
    repeat,
    size,
  });

  return <div className={`${styles.background} ${props.className || ""}`} />;
};

export default Background;
