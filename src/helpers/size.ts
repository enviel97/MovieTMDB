export const size = (size: number) => ({
  "": size,
  // eslint-disable-next-line
  ["%"]: `${size}%`,
  rem: `${size}rem`,
  px: `${size}px`,
});
