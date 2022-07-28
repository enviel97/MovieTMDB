interface IHeroSlideView<T> {
  data: T[];
  createItem: ({ data: T, className: string }) => JSX.Element;
}

interface IHeroSlideStyles {}

type IHeroSlideProps<T = any> = IHeroSlideView<T> & IHeroSlideStyles;

interface HeroSlideItemProps {
  data: any;
  className: string;
}
