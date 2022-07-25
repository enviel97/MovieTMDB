export const flex = (props: {
  alignItems: string;
  justifyContent: string;
}) => ({
  display: "flex",
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
});
