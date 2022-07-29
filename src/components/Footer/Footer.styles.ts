import { colors } from "@constants";
import breakpoints from "@stylesHelper/breakpoint";
import { center, flex } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useFooterStyles = createUseStyles({
  background: (props: IFooterStyles) => ({
    backgroundImage: `url(${props.src})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: `${colors.backgroundColor}99`,
    },
  }),
  footer: {
    position: "relative",
    padding: ["6rem", "5rem"],
  },
  footerContent: {
    position: "relative",
    maxWidth: "100%",
    "& .menus": {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      ...breakpoints.mobile({
        gridTemplateColumns: "repeat(2, 1fr)",
      }),
      "& .btns": {
        ...center(),
        "& .btn": {
          margin: "1rem",
        },
      },
      "& .title": {
        fontSize: "2rem",
        fontFamily: ["Dosis", "sans-serif"],
      },
      "& .menu": {
        "&.left": {
          ...flex("flex-start", "flex-start"),
          "& p": {
            textAlign: "justify",
          },
        },
        "&.right": {
          ...flex("flex-end", "flex-start"),
          ...breakpoints.mobile({
            gridColumnStart: "2",
          }),
        },

        flexDirection: "column",
        marginTop: "1rem",
        fontSize: "1.2rem",

        "& > * ~ *": {
          marginTop: "1rem",
        },
      },
    },
  },
});

export default useFooterStyles;
