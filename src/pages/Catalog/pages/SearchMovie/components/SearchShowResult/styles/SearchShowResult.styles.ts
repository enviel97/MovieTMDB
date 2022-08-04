import breakpoints from "@stylesHelper/breakpoint";
import { createUseStyles } from "react-jss";

const useSearchShowResultStyles = createUseStyles({
  searchShowResult: {
    columnCount: 2,
    ...breakpoints.tablet({
      columnCount: 1,
    } as any),
    columnGap: "1.5rem",
  },
  searchShowResultItem: {
    breakInside: "avoid",
    marginBottom: "1.5rem",
  },
});
export default useSearchShowResultStyles;
