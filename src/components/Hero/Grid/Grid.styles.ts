import breakpoints from "@stylesHelper/breakpoint";
import { createUseStyles } from "react-jss";
const gridTemplateColumns = (width: string) =>
  `repeat(auto-fill, minmax(${width}, 1fr))`;
const useGridStyles = createUseStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: gridTemplateColumns("200px"),
    gap: "1rem",
    marginBottom: "3rem",
    ...breakpoints.tablet({
      gridTemplateColumns: gridTemplateColumns("150px"),
    }),
  },
});

export default useGridStyles;
