import { colors } from "@constants";
import { createUseStyles } from "react-jss";

const useButtonOutlineStyles = createUseStyles({
  btnOutline: (props: { mainColor: string; hoverColor: string }) => ({
    border: [2, "solid", props.mainColor],
    backgroundColor: colors.transparent,
    color: props.mainColor,
    boxShadow: "unset",
    transition: ["color", ".3s", "ease,", "background-color", ".3s", "ease"],
    "&:hover": {
      boxShadow: "unset",
      color: props.hoverColor,
      backgroundColor: props.mainColor,
    },
  }),
});

export default useButtonOutlineStyles;
