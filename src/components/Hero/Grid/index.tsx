import React from "react";

import useGridStyles from "./Grid.styles";

const Grid = (props: IGridProps) => {
  const styles = useGridStyles();

  return (
    <div className={`${styles.gridContainer}`}>
      {props.data.map((data, i) => (
        <div key={i}>{props.createItem({ data })}</div>
      ))}
    </div>
  );
};

export default Grid;
