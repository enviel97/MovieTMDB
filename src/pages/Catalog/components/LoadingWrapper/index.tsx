import Spinner from "@components/Spinner";
import React, { useEffect, useState } from "react";

const LoadingWraper = (props: LoadingWraperProps) => {
  const {
    isLoading,
    loadingComponent = (
      <div className='vh100 center'>
        <Spinner.Default />
      </div>
    ),
  } = props;
  const [loading, setLoading] = useState<boolean>(isLoading);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading) {
    return loadingComponent;
  }
  return <>{props.children}</>;
};

export default LoadingWraper;
