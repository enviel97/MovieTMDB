import { colors, decorates } from "@constants";
import breakpoints from "@stylesHelper/breakpoint";
import { flex } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useItemHeaderStyles = createUseStyles({
  header: {
    position: "relative",
    height: "80vh",
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
      background: `linear-gradient(to top, ${colors.backgroundColor}, #00000000)`,
    },
  },
  movieContent: {
    ...flex("flex-start", "flex-start"),
    maxWidth: "1260px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-200px",
    position: "relative",
    padding: [0, "2rem"],
    "& .poster": {
      flex: 1,
      ...breakpoints.mobile({ display: "none" }),
      "&__image": {
        objectPosition: "center",
        objectFit: "cover",
        borderRadius: decorates.borderRadius,
        opacity: 0.1,
        backgroundColor: colors.black,
        transition: "opacity .5s ease",
        "&.loaded": {
          opacity: 1,
        },
      },
    },
    "& .info": {
      position: "relative",
      width: "70%",
      paddingLeft: "2rem",
      ...breakpoints.mobile({ width: "100%", paddingLeft: "0" }),
      "& > *": {
        marginBottom: "2rem",
      },
      "&__title": {
        fontSize: "3rem",
        lineBreak: 1,
        fontFamily: ["Dosis", "sans-serif"],
      },
      "&__subTitle": {
        fontStyle: "italic",
        fontSize: "1rem",
        lineBreak: 1,
      },
      "&__date": {
        fontSize: "1.2rem",
        lineBreak: 1,
        color: "#dfdfdf",
        fontFamily: ["Dosis", "sans-serif"],
      },
      "&__genres": {
        "& > * ~ *": {
          marginLeft: ".5rem",
        },
        "&--item": {
          padding: [".5rem", "1.5rem"],
          border: `2px solid ${colors.white}`,
          borderRadius: decorates.borderRadius,
          fontSize: ".8rem",
          fontWeight: 600,
          backgroundColor: colors.backgroundColor,
        },
      },
      "&__overview": {
        textAlign: "justify",
        fontSize: ".9rem",
        marginBottom: "1rem",
      },
      "&__voting": {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        fontSize: "1rem",
        "& b": {
          color: colors.primaryColor,
        },
      },
    },
  },
});

export default useItemHeaderStyles;
