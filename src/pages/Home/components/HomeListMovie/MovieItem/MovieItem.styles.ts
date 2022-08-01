import { colors, decorates } from "@constants";
import { flex, stickyHover } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useMovieItemStyle = createUseStyles({
  backgroud: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  movieCard: {},
  movieCardContent: {
    position: "relative",
    paddingTop: "160%",
    borderRadius: decorates.borderRadius,
    marginBottom: "1rem",

    "& .adult-flag": {
      position: "absolute",
      top: "5%",
      right: "5%",
      padding: ".25rem .5rem",
      fontSize: "100%",
      fontFamily: ["Dosis", "san-serif"],
      borderRadius: "5px",
      textTransform: "uppercase",
      border: "2px solid white",
      opacity: 0,
      transition: ["opacity", ".5s", "ease"],
      backgroundColor: "#0d0d0d99",
    },

    "& .info": {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      padding: ".5rem 1rem",
      textAlign: "start",
      borderRadius: [0, 0, decorates.borderRadius, decorates.borderRadius],
      "&-voting": {
        ...flex("center", "space-between"),
        marginTop: ".5rem",
        "& span": {
          ...flex("center", "center"),
        },
      },
      opacity: 0,
      transition: ["opacity", ".5s", "ease"],
      background: "#0d0d0d99",
    },

    "& .btn-play": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0)",
      transition: [
        ["transform", ".3s", "ease"],
        ["box-shadow", ".3s", "ease"],
      ],
    },

    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.black,
      opacity: 0,
      transition: ["opacity", ".3s", "ease"],
      borderRadius: decorates.borderRadius,
    },

    ...stickyHover({
      "&:hover::before": { opacity: 0.8 },
      "&:hover .adult-flag, &:hover .info": { opacity: 1 },
      "&:hover .btn-play": {
        transform: "translate(-50%, -50%) scale(1)",
      },
    }),
  },
  movieTitle: {
    textAlign: "center",
    fontFamily: ["Dosis", "san-serif"],
  },
});

export default useMovieItemStyle;
