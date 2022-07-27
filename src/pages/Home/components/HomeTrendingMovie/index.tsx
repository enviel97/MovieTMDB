import { Link } from "react-router-dom";

const HomeTrendingMovie = () => {
  const href = "/movie";
  return (
    <div className='container'>
      <div className='section mb3'>
        <Link className='section__header section__title mb2' to={href}>
          <h2>Trending Movies</h2>
          <a>View more</a>
        </Link>
      </div>
    </div>
  );
};
export default HomeTrendingMovie;
