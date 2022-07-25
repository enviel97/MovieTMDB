import { colors } from "@constants";
import breakpoints from "@stylesHelper/breakpoint";
import { flex } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useModalStyles = createUseStyles({
  modal: {
    ...flex({ alignItems: "center", justifyContent: "center" }),
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    overflow: "auto",
    background: `${colors.black}66`,
    opacity: 0,
    visibility: "hidden",
  },
  modalContent: {
    position: "relative",
    padding: "2rem",
    background: colors.backgroundColor,
    transition: [
      ["transform", ".6s", "ease"],
      ["opacity", ".6s", "ease"],
    ],
    width: "50%",
    ...breakpoints.tablet({ width: "80%" }),
    ...breakpoints.mobile({ width: "100%" }),
    opacity: 0,
    transform: "translateY(-250px)",
  },
  modalContentClose: {
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: "1.5rem",
    cursor: "pointer",
    "&:hover": {
      color: colors.primaryColor,
    },
  },
  active: {
    opacity: [1, "!important"],
    visibility: ["visible", "!important"],
    "& > $modalContent": {
      opacity: 1,
      transform: "translateY(0px)",
    },
  },
});

export default useModalStyles;
