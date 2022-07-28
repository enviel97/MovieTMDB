import React from "react";
import { DotLoader } from "react-spinners";
import useSpinnerStyle from "./Spinner.styles";
import { colors } from "@constants";

const Wrapper = (props: ISpinnerStylesProps & IComponentChildren) => {
  const styles = useSpinnerStyle({
    height: props.height ?? "100%",
    width: props.width ?? "100%",
  });
  return <div className={`${styles.spinner}`}>{props.children}</div>;
};

const DefaultSpinner = (props: ISpinnerProps) => {
  return (
    <Wrapper {...props}>
      <DotLoader
        size={props.spinnerSize ?? "6.25rem"}
        color={props.color ?? colors.primaryColor}
        {...props}
      />
    </Wrapper>
  );
};

const Spinner = {
  Default: DefaultSpinner,
};

export default Spinner;
