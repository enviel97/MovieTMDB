import { center } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useButtonLoadMore = createUseStyles({
  btnLoadMore: {
    ...center(),
    position: "relative",
    "& > .loading": {
      position: "absolute",
      top: "3rem",
    },
  },
});

export default useButtonLoadMore;
