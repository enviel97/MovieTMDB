import { useParams } from "react-router-dom";

const ItemHeaderError = () => {
  const { id } = useParams();
  return <div className='center'>Error!! Don't have any data {id ?? ""}</div>;
};
export default ItemHeaderError;
