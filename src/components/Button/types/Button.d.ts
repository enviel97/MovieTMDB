interface IButtonProps {
  className?: Classes | string;
  onClick?: () => void;
  children?: any;
  mainColor?: string;
}

interface DefaultButotn {
  small?: boolean;
  color?: string;
}

type IButtonDefaultProps = IButtonProps & DefaultButotn;

interface OutlineProps {
  onHoverColor?: string;
}

type IButtonOutlineProps = IButtonProps & OutlineProps;
