interface VideoGridView {
  data: TV[] | Movie[];
  isLoadMore?: boolean;
  loading?: boolean;
  isFirstLoad?: boolean;
  loadMore: () => void;
}

interface VideoGrid {
  href: string;
  src: string;
  name: string;
  voteCount: number;
  popularity: number;
  releaseDate: string;
  isAdult?: boolean;
}

type VideoGridProps = VideoGridView;
