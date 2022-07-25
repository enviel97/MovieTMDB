import { colors, decorates } from "@constants";
import { createUseStyles } from "react-jss";

const buttonStyle = createUseStyles({
  btn: (props: { mainColor?: string; color?: string; small?: boolean }) => {
    const { mainColor = colors.primaryColor, color = colors.white } = props;
    const isSmall = !!props.small;
    const borderWidth = isSmall ? 1 : 2;
    const padding = isSmall ? [".25rem", "1.5rem"] : ["0.5rem", "1.25rem"];
    const fontSize = isSmall ? "1rem" : "1.25rem";
    return {
      position: "relative",
      border: [borderWidth, "solid", colors.transparent],
      backgroundColor: mainColor,
      color: color,
      borderRadius: decorates.borderRadius,
      padding: padding,
      fontSize: fontSize,
      fontWeight: 900,
      boxShadow: [0, 0, 2.5, 5, `${mainColor}4d`],
      transition: ["box-shadow", ".3s", "ease"],
      "&:hover": {
        boxShadow: [0, 0, 5, 10, `${mainColor}4d`],
      },
    };
  },
});

export default buttonStyle;
