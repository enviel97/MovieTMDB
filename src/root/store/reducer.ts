import * as Repos from "@servers/repo";

const rootReducer = () => {
  const repos = Object.assign({}, ...Object.values(Repos));
  return {
    ...repos,
  };
};

export default rootReducer;
