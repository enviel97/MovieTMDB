import React from "react";
import buttonStyle from "./Button.styles";

const Button = (props: IButtonDefaultProps) => {
  const styles = buttonStyle({
    mainColor: props.mainColor,
    color: props.color,
    small: props.small,
  });

  return (
    <button
      disabled={props.disable ?? false}
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick!}
    >
      {props.children}
    </button>
  );
};

export default Button;
