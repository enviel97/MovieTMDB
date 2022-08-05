import { ButtonOutline } from "@components/Button";
import Spinner from "@components/Spinner";
import useButtonLoadMore from "./ButtonLoadMore.styles";
export interface ButtonLoadMoreProps {
  isLoadMore?: boolean;
  loadMore: () => void;
  loading?: boolean;
}
const ButtonLoadMore = (props: ButtonLoadMoreProps) => {
  const { loadMore, loading = false, isLoadMore = false } = props;
  const styles = useButtonLoadMore();
  if (!isLoadMore) {
    return <></>;
  }

  return (
    <div className={styles.btnLoadMore}>
      <ButtonOutline onClick={loadMore} disable={loading}>
        <div>Load More</div>
      </ButtonOutline>
      {loading && (
        <Spinner.Loader
          className='loading'
          width={"25px"}
          spinnerSize={"25px"}
        />
      )}
    </div>
  );
};
export default ButtonLoadMore;
