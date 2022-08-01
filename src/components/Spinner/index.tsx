import React from "react";
import { ClockLoader, DotLoader } from "react-spinners";
import useSpinnerStyle from "./Spinner.styles";
import { colors } from "@constants";

const Wrapper = (
  props: ISpinnerStylesProps & IComponentChildren & { className?: string }
) => {
  const styles = useSpinnerStyle({
    height: props.height ?? "100%",
    width: props.width ?? "100%",
  });
  return (
    <div className={`${styles.spinner} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

const DefaultSpinner = (props: ISpinnerProps) => {
  return (
    <Wrapper
      className={props.className}
      height={props.height}
      width={props.width}
    >
      <DotLoader
        size={props.spinnerSize ?? "6.25rem"}
        color={props.color ?? colors.primaryColor}
      />
    </Wrapper>
  );
};

const LoaderSpinner = (props: ISpinnerProps) => {
  return (
    <Wrapper
      className={props.className}
      height={props.height}
      width={props.width}
    >
      <ClockLoader
        size={props.spinnerSize ?? "6.25rem"}
        color={props.color ?? colors.primaryColor}
      />
    </Wrapper>
  );
};

const Spinner = {
  Default: DefaultSpinner,
  Loader: LoaderSpinner,
};

export default Spinner;
