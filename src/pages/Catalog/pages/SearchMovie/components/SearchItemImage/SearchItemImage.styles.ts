import { createUseStyles } from "react-jss";

const useSearchItemImage = createUseStyles({
  image: {
    position: "relative",
    "& .aldut-notice": {
      position: "absolute",
      left: "1rem",
      bottom: "1rem",
      marginRight: "1rem",
      width: "5.2em",
      height: "5.2em",
    },
  },
});

export default useSearchItemImage;
