import tmdbClient from "@api/client";

const rootReducer = () => {
  return {
    [tmdbClient.reducerPath]: tmdbClient.reducer,
  };
};

export default rootReducer;
