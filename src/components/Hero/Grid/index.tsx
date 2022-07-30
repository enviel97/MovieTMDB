import React from "react";
import { useParams } from "react-router-dom";
import useGridStyles from "./Grid.styles";

const Grid = () => {
  const styles = useGridStyles();

  return <div>Grid movies</div>;
};

export default Grid;
