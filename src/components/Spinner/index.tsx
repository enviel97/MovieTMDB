import React from "react";
import { DotLoader } from "react-spinners";
import useSpinnerStyle from "./Spinner.styles";
import { colors } from "@constants";
import { flex } from "@stylesHelper/mixin";

const Wrapper = (props: ISpinnerStylesProps & IComponentChildren) => {
  const styles = useSpinnerStyle({
    height: props.height ?? "100%",
    width: props.width ?? "100%",
  });
  return <div className={`${styles.spinner}`}>{props.children}</div>;
};

const DefaultSpinner = (props: ISpinnerProps) => {
  return (
    <Wrapper height={props.height} width={props.width}>
      <DotLoader
        size={props.spinnerSize ?? "6.25rem"}
        color={props.color ?? colors.primaryColor}
      />
    </Wrapper>
  );
};

const Spinner = {
  Default: DefaultSpinner,
};

export default Spinner;
