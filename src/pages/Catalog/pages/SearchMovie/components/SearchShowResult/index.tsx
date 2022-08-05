import { useAppSelector } from "@/hooks/api/useAppSelector";
import { selectAllSearchs } from "@servers/repo/video/search.slice";
import SearchMovieItem from "./SearchItem/SearchMovieItem";
import SearchShowEmpty from "./SearchShowEmpty";
import SearchTVItem from "./SearchItem/SearchTvItem";
import useSearchShowResultStyles from "./styles/SearchShowResult.styles";
import SearchPeopleItem from "./SearchItem/SearchPeopleItem";

const SearchShowResult = () => {
  const styles = useSearchShowResultStyles();

  const datas = useAppSelector(selectAllSearchs);

  if (datas.length === 0) return <SearchShowEmpty />;
  // useselector
  return (
    <div className={styles.searchShowResult}>
      {datas.map((data) => {
        switch (data.media_type) {
          case "tv":
            return (
              <SearchTVItem
                className={styles.searchShowResultItem}
                key={`tv-${data.id}`}
                id={data.id}
              />
            );
          case "movie":
            return (
              <SearchMovieItem
                className={styles.searchShowResultItem}
                key={`movie-${data.id}`}
                id={data.id}
              />
            );
          case "person":
            return (
              <SearchPeopleItem
                className={styles.searchShowResultItem}
                key={`people-${data.id}`}
                id={data.id}
              />
            );
        }
        return null;
      })}
    </div>
  );
};

export default SearchShowResult;
