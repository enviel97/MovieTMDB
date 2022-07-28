import { colors, decorates } from "@constants";
import { stickyHover } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useMovieItemStyle = createUseStyles({
  backgroud: (props: IMovieItemStyles) => ({
    backgroundImage: `url(${props.src})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
  movieCard: {
    position: "relative",
    paddingTop: "160%",
    borderRadius: decorates.borderRadius,
    marginBottom: "1rem",
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
      "&:hover .btn-play": {
        transform: "translate(-50%, -50%) scale(1)",
      },
    }),
  },
  movieTitle: {
    textAlign: "center",
  },
});

export default useMovieItemStyle;
