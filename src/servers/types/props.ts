// TMBD api config
export enum Category {
  movie = "movie",
  tv = "tv",
}

export enum SearchType {
  movie = "movie",
  tv = "tv",
  person = "person",
  all = "multi",
}

export enum MovieType {
  upcoming = "upcoming",
  popular = "popular",
  top_rated = "top_rated",
}

export enum TvType {
  on_the_air = "on_the_air",
  popular = "popular",
  top_rated = "top_rated",
}

export interface Paginate<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface PaginateParams<T = MovieType | TvType> {
  page?: number;
  type: T;
}

export interface VideoParams {
  type: Category;
  id: string;
}

export interface SearchParams {
  query: string;
  type?: SearchType;
  page?: number;
}
