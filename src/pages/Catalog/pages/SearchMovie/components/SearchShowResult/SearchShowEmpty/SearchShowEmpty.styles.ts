import { colors } from "@constants";
import { createUseStyles } from "react-jss";

const useSearchShowEmpty = createUseStyles({
  none: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    fontSize: "1.5rem",
    textAlign: "right",
    color: colors.primaryColor,
    "& p": {
      backgroundColor: colors.black,
      padding: "1rem",
      maxWidth: "50vw",
      boxShadow: [
        [0, 4, 8, 0, "#ffffff33"],
        [0, 6, 20, 0, "#ffffff32"],
      ],
    },
    "& b": {
      fontFamily: ["Dosis", "sans-serif"],
      fontSize: "2rem",
      color: colors.white,
      textAlign: "end",
    },
  },
});
export default useSearchShowEmpty;
