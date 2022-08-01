import React, { useEffect, useState } from "react";
import placeholder from "@assets/gif/placeholder.gif";

const LazyLoadBackground = (props: IBackgroundProps) => {
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState<string>(placeholder);

  useEffect(() => {
    if (!props.src) return;
    const loader = new Image();
    loader.src = props.src;
    loader.onload = () => {
      setSrc(props.src);
      setLoading(() => false);
    };
  }, [props.src]);

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
        backgroundImage: `url(${src})`,
        ...placeholderStyle,
      }}
    />
  );
};
export default LazyLoadBackground;
