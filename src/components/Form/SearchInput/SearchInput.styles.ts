import { colors, decorates } from "@constants";
import { createUseStyles } from "react-jss";

const useSearchInputStyles = createUseStyles({
  inputSearch: {
    border: ["2px", "solid", "#00000000"],
    backgroundColor: "#000000 !important",
    padding: [".5rem", "1.5rem"],
    fontSize: "1rem",
    borderRadius: decorates.borderRadius,
    color: "#ffffff !important",
    fontFamily: ["Lato", "sans-serif"],
    colorScheme: "dark",
    "&:active, &:focus, &:not(:placeholder-shown)": {
      border: ["2px", "ridge", "#5a5a5a5c"],
    },
  },
});

export default useSearchInputStyles;
