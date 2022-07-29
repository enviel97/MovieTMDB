import { colors } from "@constants";
import { flex } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useLineStyle = createUseStyles({
  lineDisplay: {
    ...flex("center", "center"),
    width: "100%",
    fontSize: "1rem",
    fontFamily: ["Dosis", "sans-serif"],
    "& $line": {
      margin: ["10px", "1rem"],
    },
  },
  line: {
    background: colors.white,
    color: colors.white,
    borderColor: colors.white,
    height: "0.5px",
    width: "100%",
  },
});
export default useLineStyle;
