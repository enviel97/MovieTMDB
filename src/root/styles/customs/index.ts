import * as elements from "./elements";
import defaultStyles from "./others/default";

const globalStyles: any = {
  ...defaultStyles,
  ...Object.assign({}, ...Object.values(elements)),
};

export default globalStyles;
