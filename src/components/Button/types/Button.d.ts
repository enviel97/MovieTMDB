interface IButtonProps {
  className?: Classes | string;
  onClick?: () => void;
  disable?: boolean;
  children?: any;
  mainColor?: string;
}

interface DefaultButton {
  small?: boolean;
  color?: string;
}

type IButtonDefaultProps = IButtonProps & DefaultButton;

interface OutlineProps {
  onHoverColor?: string;
}

type IButtonOutlineProps = IButtonProps & OutlineProps & DefaultButton;
