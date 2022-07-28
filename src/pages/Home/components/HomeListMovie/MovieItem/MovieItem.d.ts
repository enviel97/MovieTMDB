interface IMovieItemStyles {
  src: string;
}

interface IMovieItemViews {
  name: string;
  href: string;
  isLoading?: boolean;
}

type IMovieItemProps = IMovieItemStyles & IMovieItemViews;
