interface ItemHeaderStyles {}

interface ItemHeaderView {
  bannerSrc: string;
  posterSrc: string;
  title: string;
  genres: Genres[];
  overview: string;
  id: number;
  date: string;
  tagline?: string;
  popularity?: number;
  voteRating?: number;
}
type ItemHeaderProps = ItemHeaderStyles & ItemHeaderView;
