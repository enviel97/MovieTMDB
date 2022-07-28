import { center } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";

const useSpinnerStyle = createUseStyles({
  spinner: (props: ISpinnerStylesProps) => ({
    ...center(),
    height: props.height,
    width: props.width,
  }),
});

export default useSpinnerStyle;
