import { createUseStyles } from "react-jss";

const useCastsStyles = createUseStyles({
  casts: {
    "& .castsContent": {
      marginTop: "1rem",
      "&__item": {
        "&--img": {
          objectFit: "cover",
          objectPosition: "bottom",
          marginBottom: ".5rem",
        },
        "&--name": {
          fontSize: ".8rem",
        },
        "&--character": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          fontSize: ".8rem",
          "-webkit-line-clamp": 1,
          "-webkit-box-orient": "vertical",
        },
      },
    },
  },
});

export default useCastsStyles;
