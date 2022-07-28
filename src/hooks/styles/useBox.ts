import { center } from "@stylesHelper/mixin";
import { createUseStyles } from "react-jss";
interface IBoxProps {
  display?: string;
  height?: string | number;
  width?: string | number;
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
  center: { ...center() },
});

export default useBox;
