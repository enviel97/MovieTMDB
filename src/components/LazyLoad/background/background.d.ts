interface IBackground {
  src: string;
  className?: string;
  /**
   * prevent load image
   * @param
   * + 1: accept div download image
   * + 2: deny div download image
   */
  load?: 1 | 0;
}

type IBackgroundProps = IBackground & IComponentChildren;
