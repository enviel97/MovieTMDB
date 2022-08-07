import useFetchMovieOrTVByCatalog from "@pages/Catalog/hooks/useFetchMovieOrTVByCatalog";
import LoadingWraper from "../LoadingWrapper";
import MovieSearch from "../MovieSearch";
import VideoGrid from "../VideoGrid";

const ShowVideo = (props: { category: string }) => {
  const { isFirstLoad, data, isLoadMore, loadMore, loading } =
    useFetchMovieOrTVByCatalog(props.category);

  return (
    <section className='container'>
      <div className='section mb3'>
        <div className='mb3'>
          <MovieSearch />
        </div>
        <LoadingWraper isLoading={isFirstLoad}>
          <VideoGrid
            data={data}
            isFirstLoad={isFirstLoad}
            isLoadMore={isLoadMore}
            loadMore={loadMore}
            loading={loading}
          />
        </LoadingWraper>
      </div>
    </section>
  );
};

export default ShowVideo;
