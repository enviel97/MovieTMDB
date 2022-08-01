interface VideoGridView {
  category: string;
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
