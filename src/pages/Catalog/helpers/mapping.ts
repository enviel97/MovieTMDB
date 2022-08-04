export const mapDatasToProps = (datas: any[]) => {
  const isMovie = (datas as Movie[]) !== undefined;
  const href = isMovie ? "movie" : "tv";
  return datas.map((data) => ({
    href: `${href}/${data.id}`,
    src: data.poster_path ?? data.backdrop_path,
    name: data.title ?? data.name,
    voteCount: data.vote_count,
    popularity: data.popularity,
    releaseDate: data.release_date ?? "",
    isAdult: !!data.adult,
  }));
};
