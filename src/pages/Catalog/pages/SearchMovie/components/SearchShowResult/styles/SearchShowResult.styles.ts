import breakpoints from "@stylesHelper/breakpoint";
import { createUseStyles } from "react-jss";

const useSearchShowResultStyles = createUseStyles({
  searchShowResult: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "1.5rem",
    gridTemplateRows: "max-content",

    ...breakpoints.tablet({
      gridTemplateColumns: "auto auto",
    } as any),
    ...breakpoints.mobile({
      gridTemplateColumns: "auto",
    } as any),
  },
  searchShowResultItem: {},
});
export default useSearchShowResultStyles;
