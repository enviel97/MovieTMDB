import { formatDate } from "@helpers/date";

export const mapToProp = (data: MovieDetail | TVDetail) => ({
  id: data.id,
  bannerSrc: data.backdrop_path ?? data.poster_path,
  posterSrc: data.poster_path ?? data.backdrop_path,
  title: (data as any).name || (data as any).title,
  genres: (data as any).genres,
  overview: data.overview,
  tagline: data.tagline,
  voteRating: data.vote_count,
  popularity: data.popularity,
  date: (data as any).release_date
    ? formatDate((data as any).release_date, { format: "MMM, yyyy" })
    : `${formatDate((data as any).first_air_date, {
        format: "yyyy",
      })} - ${formatDate((data as any).last_air_date, {
        format: "yyyy",
      })}`,
});
