import useAppSelector from "@/hooks/api/useAppSelector";
import { selectAllSearchs } from "@servers/repo/video/search.slice";
import SearchMovieItem from "./SearchItem/SearchMovieItem";
import SearchShowEmpty from "./SearchShowEmpty";
import SearchTVItem from "./SearchItem/SearchTvItem";
import useSearchShowResultStyles from "./styles/SearchShowResult.styles";
import SearchPeopleItem from "./SearchItem/SearchPeopleItem";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  id: number;
  mediaType: "tv" | "movie" | "person";
  className: string;
}

const Item = (data: ItemProps) => {
  switch (data.mediaType) {
    case "tv":
      return <SearchTVItem className={data.className} id={data.id} />;
    case "movie":
      return <SearchMovieItem className={data.className} id={data.id} />;
    case "person":
      return <SearchPeopleItem className={data.className} id={data.id} />;
  }
};

const SearchShowResult = () => {
  const styles = useSearchShowResultStyles();
  const navigator = useNavigate();
  const datas = useAppSelector(selectAllSearchs);
  if (datas.length === 0) return <SearchShowEmpty />;
  return (
    <div className={styles.searchShowResult}>
      {datas.map((data) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigator(`/${data.media_type}/${data.id}`);
          }}
          key={`${data.media_type}-${data.id}`}
          className='normal'
        >
          <Item
            id={data.id}
            className={styles.searchShowResultItem}
            mediaType={data.media_type}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchShowResult;
