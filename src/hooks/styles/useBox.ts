import { boxShadow, center } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";
interface IBoxProps {
  display?: string;
  height?: string | number;
  width?: string | number;
  border?: {
    color?: string;
    borderWidth?: string | number;
  };
}

const useBox = createUseStyles({
  height: ({ height }: IBoxProps) => ({
    height,
  }),
  width: ({ width }: IBoxProps) => ({
    width,
  }),
  display: ({ display }: IBoxProps) => ({
    display: display,
  }),
  border: ({ border = {} }: IBoxProps) => {
    const { color = "#FFFFFF25", borderWidth = ".5px" } = border;
    return { border: `${color} outset ${borderWidth}` };
  },
  center: { ...center() },
  shadow: { boxShadow: boxShadow({}) },
});

export default useBox;
