interface IMovieItemStyles {
  src: string;
}

interface IMovieItemViews {
  name: string;
  href: string;
  releaseDate?: string;
  voteCount?: number;
  popularity?: number;
  isAdult?: boolean;
  isLoading?: boolean;
}

type IMovieItemProps = IMovieItemStyles & IMovieItemViews;
