import { center, flex } from "../../helpers/mixin";
import { colors } from "@constants";
import { kStyles } from "../types/props";

// Marterial style my self
const decorate: kStyles = {
  "body::-webkit-scrollbar": {
    width: "1.6vh",
    "&-track": {
      backgroundColor: "#101010",
      boxShadow: "inset 0 0 2px #202020",
    },
    "&-thumb": {
      backgroundColor: "#000000",
      border: "0.1vw outset #202020",
      borderRadius: "0px",
      transition: ["border-radius", ".5s", "ease"],
      "&:hover": {
        background: "#ffffff10",
        borderRadius: "5vw",
      },
    },
  },

  ".overlay": { backgroundColor: colors.overplay },
  ".container": {
    maxWidth: "85vw",
    margin: "auto",
  },
  ".mb3": { marginBottom: "3rem" },
  ".mb2": { marginBottom: "2rem" },
  ".vw100": { minWidth: "100vw" },
  ".vh100": { minHeight: "100vh" },
  ".center": center(),
  ".title": {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  ".section": {
    padding: [0, "2rem"],
    "&__header": {
      ...flex("end", "space-between"),
    },
    "&__title": {
      cursor: "pointer",
      "&:hover": {
        color: "inherit",
        "& > :nth-child(2)": {
          color: colors.primaryColor,
        },
      },
    },
  },
};

export default decorate;
