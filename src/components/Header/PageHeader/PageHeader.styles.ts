import { colors, spacings } from "@constants";
import { createUseStyles } from "react-jss";

const usePageHeaderStyles = createUseStyles({
  background: (props: IPageHeaderStyles) => ({
    backgroundImage: `url(${props.src})`,
    backgroundPosition: "bottom",
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
  }),
  pageHeader: {
    padding: [spacings.headerHeight, 0, "2rem"],
    textAlign: "center",
    marginBottom: "2rem",
    position: "relative",
    "& h2": {
      position: "relative",
      fontSize: "4rem",
      fontFamily: ["Dosis", "san-serif"],
      zIndex: 99,
    },

    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: spacings.headerHeight,
      backgroundImage: `linear-gradient(to top, ${colors.backgroundColor}, #00000000)`,
    },
  },
});

export default usePageHeaderStyles;
