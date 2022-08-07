import { Styles } from "react-jss";
import { spacings } from "@constants";

const media = (maxWidth: number, minWidth?: number) => {
  let breakpoint = `@media only screen and (max-width: ${maxWidth}px)`;
  if (!!minWidth) breakpoint += ` and (min-width: ${minWidth}px)`;
  return breakpoint;
};

const breakpoints = {
  mobile: (props: Styles) => ({
    [media(spacings.device.mobile)]: { ...props },
  }),
  tablet: (props: Styles) => ({
    [media(spacings.device.tablet)]: { ...props },
  }),
  custom: (value: { maxLimit: number; minLimit?: number }, props: Styles) => ({
    [media(value.maxLimit, value.minLimit)]: { ...props },
  }),
};

export default breakpoints;
