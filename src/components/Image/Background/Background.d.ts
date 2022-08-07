interface BackgroundStyles {
  src: string;
  position?: string;
  repeat?: string;
  size?: string;
}

interface BackgroundView {
  className?: string;
  alt?: string;
}

type BackgroundProps = BackgroundStyles & BackgroundView & IComponentChildren;
