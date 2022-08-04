interface ISpinnerStylesProps {
  height?: Property.Height<string | number>;
  width?: Property.Height<string | number>;
}

interface ISpinnerViewProps {
  className?: string;
  spinnerSize?: Property.Height<string | number>;
  color?: string;
  loading?: boolean;
  speedMultiplier?: number;
}

type ISpinnerProps = ISpinnerStylesProps &
  ISpinnerViewProps &
  IComponentChildren;
