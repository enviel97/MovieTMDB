import useChipStyles from "./Chip.styles";
import React from "react";

const Chip = (props: ChipView) => {
  const styles = useChipStyles();

  return (
    <div className={styles.chip}>
      {props.imgSrc && (
        <img src={props.imgSrc} alt='Person' width='96' height='96' />
      )}
      {props.text}
    </div>
  );
};
export default Chip;
