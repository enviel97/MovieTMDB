import React from "react";
import Button from "../default";
import useStyles from "./ButtonOutline.styles";
import { colors } from "@constants";

const ButtonOutline = (props: IButtonOutlineProps) => {
  const styles = useStyles({
    mainColor: props.mainColor ?? colors.white,
    hoverColor: props.onHoverColor ?? colors.primaryColor,
  });

  return (
    <Button
      {...props}
      className={`${styles.btnOutline} ${props.className ?? ""}`}
    >
      {props.children}
    </Button>
  );
};

export default ButtonOutline;
