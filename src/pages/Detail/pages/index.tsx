import useFetchData from "@/hooks/api/useFetchData";
import videoApi from "@servers/api/videoApi";
import { Category, VideoParams } from "@servers/types/props";
import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ItemHeader from "../components/ItemHeader";
import Similar from "../components/Similar";
import ItemHeaderError from "../components/static/ItemHeaderError";
import ItemHeaderLoading from "../components/static/ItemHeaderLoading";
import Videos from "../components/Videos";
import { mapToProp } from "../mapping/mapToProps";

interface DetailProps {
  category: string;
}

const Detail = (props: DetailProps) => {
  const { id } = useParams();
  const type = props.category === "movie" ? Category.movie : Category.tv;

  const params = useMemo(() => ({ type: type, id: id ?? "" }), [id, type]);
  const { data, loading } = useFetchData<VideoParams, MovieDetail | TVDetail>(
    [params],
    videoApi.getDetail
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <ItemHeaderLoading />;
  if (!data) return <ItemHeaderError />;

  return (
    <React.Fragment>
      <ItemHeader {...mapToProp(data)} />
      <Videos category={type} id={data.id} />
      <Similar category={type} id={data.id} />
    </React.Fragment>
  );
};

export default Detail;
