interface IBackground {
  src: string;
  className?: string;
}

type IBackgroundProps = IBackground & IComponentChildren;
