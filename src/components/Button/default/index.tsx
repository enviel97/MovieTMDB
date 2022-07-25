import React from "react";
import buttonStyle from "./Button.styles";

const Button = (props: IButtonDefaultProps) => {
  const styles = buttonStyle({
    mainColor: props.mainColor,
    color: props.color,
    small: props.small,
  });

  const classList = [styles.btn, props.className ?? ""].join(" ").trim();

  return (
    <button
      disabled={!props.onClick}
      className={classList}
      onClick={props.onClick!}
    >
      {props.children}
    </button>
  );
};

export default Button;
