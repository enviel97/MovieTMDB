import { createUseStyles } from "react-jss";

const useBackgroundStyle = createUseStyles({
  background: (props: BackgroundStyles) => ({
    backgroundImage: `url(${props.src})`,
    backgroundPosition: props.position,
    backgroundRepeat: props.repeat,
    backgroundSize: props.size,
  }),
});

export default useBackgroundStyle;
