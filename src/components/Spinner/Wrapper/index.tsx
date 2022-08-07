import React from "react";
import useWrapperStyles from "./Wrapper.styles";

const Wrapper = (
  props: ISpinnerStylesProps & IComponentChildren & { className?: string }
) => {
  const styles = useWrapperStyles({
    height: props.height ?? "100%",
    width: props.width ?? "100%",
  });
  return (
    <div className={`${styles.spinner} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};
export default Wrapper;
