import { createUseStyles } from "react-jss";

const useMovieSearchStyles = createUseStyles({
  movieSearch: {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      width: "100%",
      paddingRight: "8rem",
    },

    "& button": {
      position: "absolute",
      right: 0,
      bottom: 0,
      top: 0,
    },
  },
});

export default useMovieSearchStyles;
