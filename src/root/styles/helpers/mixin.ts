import { Styles } from "react-jss";

export const flex = (props: {
  alignItems: string;
  justifyContent: string;
}) => ({
  display: "flex",
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
});

export const center = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
});

export const boxShadow = ({
  color = "rgba(255, 255, 255, 0.2)",
  offset = "0px 10px 20px -7px",
}: {
  color?: string;
  offset?: string;
}) => `${color} ${offset}`;

export const stickyHover = (props: Styles) => ({
  // eslint-disable-next-line
  ["@media (hover: hover) and (pointer: fine)"]: { ...props },
});
