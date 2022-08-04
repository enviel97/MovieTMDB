import React, { useEffect, useState } from "react";
import placeholder from "@assets/gif/placeholder.gif";
import error from "@assets/images/No_Image_Available.jpg";

const LazyLoadBackground = (props: IBackgroundProps) => {
  const { load = 1 } = props;
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    if (!props.src) {
      throw new Error("Loading empty image");
    }
    if (src === props.src || load === 0) return;
    const image = new Image();
    image.src = props.src;
    // set src affter loading success
    image.onload = () => {
      setSrc(props.src);
      setLoading(() => false);
    };
    image.onerror = () => {
      setSrc(error);
      setLoading(() => false);
    };
  }, [props.src, load, src]);

  const placeholderStyle = isLoading
    ? {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }
    : {};

  return (
    <div
      {...props}
      style={{
        backgroundImage: `url(${src ?? placeholder})`,
        ...placeholderStyle,
      }}
    />
  );
};
export default LazyLoadBackground;
