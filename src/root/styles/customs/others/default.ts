import { colors, decorates } from "@constants";
import breakpoint from "../../helpers/breakpoint";
import { kStyles } from "../types/props";

// basic style for web
const defaultStyles: kStyles = {
  "*": {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
    "-webkit-tap-highlight-color": "transparent",
  },
  "#root": {
    width: "100%",
  },
  html: {
    fontSize: "100%",
    ...breakpoint.tablet({
      fontSize: "80%",
    }),
    ...breakpoint.mobile({
      fontSize: "60%",
    }),
  },
  body: {
    background: colors.backgroundColor,
    color: colors.white,

    // default font
    fontFamily: ["Lato", "sans-serif"],
    fontSize: 13,
    fontWeight: 300,
    lineHeight: 1.5,

    ...breakpoint.mobile({
      marginBottom: "3rem",
    }),
  },
  button: {
    cursor: "pointer",
    fontFamily: decorates.fontFamily,
  },
};

export default defaultStyles;
