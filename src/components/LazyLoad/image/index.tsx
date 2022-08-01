import React from "react";
import Lazyload from "react-lazyload";

function LazyloadImg(props: IImageProps) {
  const { throttle = 1000, height = 300, src, alt } = props;
  return (
    <Lazyload throttle={throttle} height={height}>
      <img src={src} alt={alt} onError={props.onError} />
    </Lazyload>
  );
}

export default LazyloadImg;
