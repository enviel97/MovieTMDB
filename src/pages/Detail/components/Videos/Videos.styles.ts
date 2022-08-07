import { createUseStyles } from "react-jss";

const useVideosStyles = createUseStyles({
  video: {
    "& .videoContent": {
      marginBottom: "3rem",
      "&__title": {
        marginBottom: "1.5rem",
      },
    },
  },
});

export default useVideosStyles;
