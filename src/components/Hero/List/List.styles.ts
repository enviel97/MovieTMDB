import { size } from "@/helpers/size";
import breakpoints from "@stylesHelper/breakpoint";
import { createUseStyles } from "react-jss";

const useListStyles = createUseStyles({
  list: {
    "& .list-item": {
      width: size(15)["%"],
      ...breakpoints.tablet({ width: size(30)["%"] }),
      ...breakpoints.mobile({ width: size(40)["%"] }),
    },
  },
});

export default useListStyles;
