import List from "@components/Hero/List";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import { useAppSelector } from "@/hooks/api/useAppSelector";
import { selectAllTVTrendings } from "@servers/repo/tv/getTvTrending.slice";

const TrendingTV = () => {
  const href = "/tv";
  const isLoading = useAppSelector((state) => state.tvTrending.loading);
  const datas = useAppSelector(selectAllTVTrendings);

  return (
    <section className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Trending TVs</h2>
          <h4>View more</h4>
        </Link>

        <List
          data={datas}
          createItem={({ data }: { data: TV }) => (
            <MovieItem
              href={`${href}/${data.id}`}
              src={data.poster_path}
              name={data.name}
              voteCount={data.vote_count}
              popularity={data.popularity}
              isLoading={isLoading}
            />
          )}
        />
      </div>
    </section>
  );
};
export default TrendingTV;
