import React, { useEffect, useState } from "react";
import placeholder from "@assets/gif/placeholder.gif";
import error from "@assets/images/No_Image_Available.jpg";
import useOnScreens from "@/hooks/features/useOnView";

const LazyLoadBackground = (props: IBackgroundProps) => {
  // const { load = 1 } = props;
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState<string>();
  const { ref, visible } = useOnScreens<HTMLDivElement>();

  useEffect(() => {
    if (!visible || src === props.src) return;
    setSrc(placeholder);
    const image = new Image();
    image.src = props.src;
    // set src affter loading success
    image.onload = (e) => {
      if (image.complete) {
        setSrc(props.src);
        setLoading(() => false);
      }
    };
    image.onerror = () => {
      setSrc(error);
      setLoading(() => false);
    };
    return () => {};
  }, [props.src, visible, src]);

  const placeholderStyle = isLoading
    ? {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }
    : {};

  return (
    <div
      ref={ref}
      {...props}
      style={{
        backgroundImage: `url(${src})`,
        ...placeholderStyle,
      }}
    />
  );
};
export default LazyLoadBackground;
