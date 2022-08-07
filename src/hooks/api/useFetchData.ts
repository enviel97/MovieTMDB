import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
/**
 * Use fetch data by call api request
 * @param arg list param of query
 * @param fetch query function return type AxiosResponse
 * @returns {{data: any, loading: boolean | undefined}}
 */
const useFetchData = <Params = any, Results = any>(
  arg: Params[],
  fetch: (...arg: Params[]) => Promise<AxiosResponse<Results, any>>
) => {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<Results>();

  useEffect(() => {
    let getData: any | undefined;
    if (loading === undefined) {
      setLoading(true);
      getData = async () => {
        const result = await fetch(...arg);
        setLoading(false);
        if (!result) return;
        setData(result.data);
      };
      getData?.call(this);
    }
    return () => {};
  }, [arg, fetch, loading]);
  return {
    data,
    loading,
  };
};

export default useFetchData;
