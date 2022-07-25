import { Styles } from "react-jss";
import { spacings } from "@constants";

const media = (breakPoint: number) => {
  return `@media only screen and (max-width: ${breakPoint}px)`;
};

const breakpoints = {
  mobile: (props: Styles) => ({
    [media(spacings.device.mobile)]: { ...props },
  }),
  tablet: (props: Styles) => ({
    [media(spacings.device.tablet)]: { ...props },
  }),
};

export default breakpoints;
