import { flex } from "../../helpers/mixin";
import { colors } from "@constants";
import { kStyles } from "../types/props";

// Marterial style my self
const decorate: kStyles = {
  ".overlay": { backgroundColor: colors.overplay },
  ".container": {
    maxWidth: "1660px",
    margin: "auto",
  },
  ".mb3": { marginBottom: "3rem" },
  ".mb2": { marginBottom: "2rem" },
  ".title": {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  ".section": {
    padding: [0, "2rem"],
    "&__header": {
      ...flex({ alignItems: "end", justifyContent: "space-between" }),
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
