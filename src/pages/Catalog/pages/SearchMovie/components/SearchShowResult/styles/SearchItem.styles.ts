import { createUseStyles } from "react-jss";
import { flex } from "@stylesHelper/mixin";
import { colors } from "@constants";
import breakpoints from "@stylesHelper/breakpoint";

const useSearchItem = createUseStyles({
  SearchItem: {
    display: "flex",
    position: "relative",
    backgroundColor: "#000",
    maxHeight: "fit-content",
    boxShadow: [
      [0, 6, 10, 0, "#ffffff33"],
      [0, 8, 22, 0, "#ffffff32"],
    ],
  },
  SearchItemImage: {
    flex: 1,
    "& > img": {
      height: "100%",
      width: "100%",
      display: "block",
      objectFit: "cover",
      objectPosition: "right",
    },
  },
  SearchItemInfo: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "1rem",
    width: "100%",
    "& .header": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      "&__job": {
        textTransform: "capitalize",
        fontFamily: "Lato",
        fontSize: ".9rem",
        color: `${colors.white}aa`,
      },
      "&__release-date": {
        display: "inline-block",
        fontSize: ".9rem",
        color: `${colors.white}aa`,
      },
      "&__title, &__type": {
        fontFamily: ["Dosis", "sans-serif"],
        fontSize: "1.5rem",
      },
      "&__title": {
        width: "85%",
        color: colors.primaryColor,
        textTransform: "uppercase",
      },
      "&__type": {
        height: "fit-content",
        width: "fit-contnet",
        padding: [".1rem", ".9rem"],
        border: [3, "solid", "#FFFFFF"],
        textAlign: "center",
        boxShadow: [0, 4, 4, "#00000033"],
        borderRadius: [10, 10, 10, 25],
      },
    },
    "& .gender-list": {
      whiteSpace: "1rem",
      "& *": {
        marginRight: "5px",
        marginTop: ".5rem",
      },
    },
    "& .decription": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      marginTop: "1rem",
      "&__project-participate": {
        width: "100%",
        "& .list-item": {
          width: "25%",
          "& .info": {
            display: "none",
          },
          "& h3": {
            fontSize: "1rem",
            display: "-webkit-box",
            "-webkit-line-clamp": 1,
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
          },
        },
      },
      "&__overview": {
        fontSize: "1rem",
        display: "-webkit-box",
        "-webkit-line-clamp": 5,
        ...breakpoints.mobile({
          "-webkit-line-clamp": 3,
        } as any),
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
      },
      "&__info-voting": {
        ...flex("center", "end"),
        backgroundColor: colors.backgroundColor,
        fontFamily: ["Dosis", "sans-serif"],

        "& span": {
          ...flex("center", "center"),
          margin: ".1rem 1rem",
        },
      },
    },
  },
});
export default useSearchItem;
