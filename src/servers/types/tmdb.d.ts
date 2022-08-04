interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TV {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface Person {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: KnownFor[];
  name: string;
  popularity: number;
  known_for_department: string;
  gender: number;
}

interface MediaType {
  media_type: "movie" | "person" | "tv";
}

type KnownFor = (TV & MediaType) | (Movie & MediaType);

// video
interface Video {
  id: number;
  results: VideosDetail[];
}

interface VideosDetail {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

type SearchMultiResult =
  | (TV & MediaType)
  | (Movie & MediaType)
  | (Person & MediaType);
