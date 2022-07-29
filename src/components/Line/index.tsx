import React from "react";
import useLineStyle from "./Line.styles";

const Line = (props: IComponentChildren) => {
  const styles = useLineStyle();

  return (
    <div className={styles.lineDisplay}>
      <hr className={styles.line} />
      {props.children}
      {props.children && <hr className={styles.line} />}
    </div>
  );
};

export default Line;
