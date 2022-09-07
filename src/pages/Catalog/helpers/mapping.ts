const isTvs = (datas: any): datas is TV[] => {
  return datas.length !== 0 && datas[0].name !== undefined;
};

const herf = (datas: any) => {
  if (isTvs(datas)) return "/tv/";
  return "/movie/";
};

export const mapDatasToProps = (datas: any[]) => {
  const href = herf(datas);
  return datas.map((data) => ({
    href: `${href}${data.id}`,
    src: data.poster_path ?? data.backdrop_path,
    name: data.title ?? data.name,
    voteCount: data.vote_count,
    popularity: data.popularity,
    releaseDate: data.release_date ?? "",
    isAdult: !!data.adult,
  }));
};
