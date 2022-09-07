import { colors } from "@constants";
import { kStyles } from "../types/props";

const interactive: kStyles = {
  a: {
    textDecoration: "none",
    color: "unset",
    "&:hover": {
      color: colors.primaryColor,
    },
    "&.normal": {
      "&:hover": {
        color: "unset",
      },
    },
  },
  "button, input": { outline: 0 },
  ul: { listStyleType: "none" },
  img: { maxWidth: "100%" },
  iframe: { border: 0 },
  section: { height: "fit-content" },
};

export default interactive;
