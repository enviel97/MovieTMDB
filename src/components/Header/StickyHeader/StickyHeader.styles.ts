import { createUseStyles } from "react-jss";
import { colors, spacings, decorates } from "@constants";
import breakpoint from "@stylesHelper/breakpoint";
import { boxShadow, flex } from "@stylesHelper/mixin";

const headerStyles = createUseStyles({
  header: {
    height: spacings.headerHeight,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 99,
    transition: "height .3s ease, background-color .3s ease",
    "&.shrink": {
      height: spacings.headerShrinkHeight,
      backgroundColor: colors.backgroundColor,
      boxShadow: boxShadow({}),
    },
  },
  headerWrap: {
    height: "100%",
    padding: "0 2rem",
    ...flex("center", "space-between"),
    ...breakpoint.mobile({
      justifyContent: "center",
    }),
  },
  headerNav: {
    ...flex("center", "unset"),
    "& > * ~ *": {
      marginLeft: "2rem",
    },
    "& li": {
      padding: "5px 0px",
      fontWeight: "700",
      position: "relative",
      fontSize: "1.25rem",
      "&:after": {
        position: "absolute",
        content: '""',
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        transition: "width .5s ease",
        height: "2px",
        backgroundColor: colors.primaryColor,
      },
      "&.active:after, &:hover:after": {
        width: "100%",
      },
    },
    ...breakpoint.mobile({
      position: "fixed",
      bottom: "0px",
      left: "0px",
      height: "5rem",
      width: "100%",
      backgroundColor: colors.backgroundColor,
      padding: "0 2rem",
      boxShadow: `${decorates.boxShadow.offset} ${decorates.boxShadow.color}`,
      ...flex("center", "space-between"),
      "& > * ~ *": {
        marginLeft: "0px",
      },
    }),
  },
  logo: {
    fontSize: "2.5rem",
    fontWeight: "600",
    ...flex("center", "unset"),
    "& img": {
      marginRight: "16px",
      width: "100px",
      ...breakpoint.mobile({
        marginRight: "5px",
        width: "80px",
      }),
    },
  },
});

export default headerStyles;
