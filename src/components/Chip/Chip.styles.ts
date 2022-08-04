import { colors, decorates } from "@constants";
import { createUseStyles } from "react-jss";

const useChipStyles = createUseStyles({
  chip: {
    display: "inline-block",
    position: "relative",
    fontSize: "1rem",
    padding: "0 5px",
    borderRadius: decorates.borderRadius,
    color: colors.white,
    backgroundColor: colors.backgroundColor,
    fontFamily: ["Dosis", "sans-serif"],
    border: [2, "solid"],
    "& img": {
      float: "left",
      margin: [0, 10, 0, -25],
      height: "2rem",
      width: "2rem",
      borderRadius: "50%",
    },
  },
});
export default useChipStyles;
