import { colors } from "@constants";
import DotLoader from "react-spinners/DotLoader";
import Wrapper from "../Wrapper";

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

export default DefaultSpinner;
