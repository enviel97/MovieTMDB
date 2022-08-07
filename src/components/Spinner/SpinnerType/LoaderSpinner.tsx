import { colors } from "@constants";
import ClockLoader from "react-spinners/ClockLoader";
import Wrapper from "../Wrapper";

const LoaderSpinner = (props: ISpinnerProps) => {
  return (
    <Wrapper
      className={props.className}
      height={props.height}
      width={props.width}
    >
      <ClockLoader
        size={props.spinnerSize ?? "40px"}
        color={props.color ?? colors.primaryColor}
      />
    </Wrapper>
  );
};

export default LoaderSpinner;
