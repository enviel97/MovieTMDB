import { createUseStyles } from "react-jss";
import { colors, decorates } from "@constants";
import { flex } from "@stylesHelper/mixin";
import breakpoints from "@stylesHelper/breakpoint";

const useHomeHeaderItem = createUseStyles({
  item: {
    padding: ["9rem", 0],
    width: "100%",
    height: "90vh",
    ...breakpoints.tablet({
      height: "auto",
    }),
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: colors.overplay,
    },

    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100px",
      backgroundImage: `liner-gradient(to top, ${colors.backgroundColor}, #00000000)`,
    },

    "&.active > $itemContent": {
      "& > $itemContentPoster > img": { transform: "scale(1)" },
      "& > $itemContentInfo ": {
        "& .btns, .title, .overview": {
          opacity: 1,
          transform: "translateY(0)",
        },
        "& .title": { transitionDelay: [".3s", ".3s"] },
        "& .overview": { transitionDelay: [".6s", ".6s"] },
        "& .btns": { transitionDelay: [".9s", ".9s"] },
      },
    },
  },
  itemContent: {
    ...flex("center", "center"),
  },
  itemContentInfo: {
    width: "55%",
    padding: [0, "3rem"],
    position: "relative",

    ...breakpoints.tablet({ width: "100%" }),
    "& > * ~ *": {
      marginTop: "3rem",
    },
    "& .title": {
      fontSize: "3rem",
      fontWeight: "bold",
      lineHeight: 1,

      ...breakpoints.tablet({
        fontSize: "2.5rem",
      }),
    },
    "& .overview": {
      fontSize: "1.2rem",
      fontWeight: 300,
    },
    "& .btns > * ~ *": {
      marginLeft: "1rem",
    },
    "& .btns, .title, .overview": {
      opacity: 0,
      transform: "translateY(-100px)",
      transition: [
        ["transform", ".5s", "ease"],
        ["opacity", ".5s", "ease"],
      ],
    },
  },
  itemContentPoster: {
    flex: 1,
    position: "relative",
    ...flex("center", "center"),
    "& img": {
      width: "400px",
      borderRadius: decorates.borderRadius,
      boxShadow: decorates.boxShadow,

      transform: "scale(0)",
      transition: ["transform", ".7s", "ease"],
    },
    ...breakpoints.tablet({ display: "none" }),
  },
});

export default useHomeHeaderItem;
