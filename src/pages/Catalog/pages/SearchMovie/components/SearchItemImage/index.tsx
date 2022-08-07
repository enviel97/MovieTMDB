import React from "react";
import { w500Image } from "@api/helpers";
import error from "@assets/images/No_Image_Available.jpg";
import aldutOnly from "@assets/images/aldut-only.png";
import placeholder from "@assets/gif/placeholder.gif";
import useSearchItemImage from "./SearchItemImage.styles";

const SearchItemImage = (props: SearchItemImage) => {
  const { className, imagePath, alt, aldut = false } = props;
  const styles = useSearchItemImage();
  const src = !imagePath ? error : w500Image(imagePath);
  return (
    <figure className={`${styles.image} ${className || ""}`}>
      <img
        src={src}
        loading='lazy'
        alt={alt}
        onError={(e) => (e.currentTarget.src = error)}
        placeholder={placeholder}
      />
      {aldut && (
        <img
          className='aldut-notice'
          src={aldutOnly}
          alt={alt}
          onError={(e) => (e.currentTarget.src = error)}
        />
      )}
    </figure>
  );
};

export default SearchItemImage;
