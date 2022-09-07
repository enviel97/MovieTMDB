import NotFound from "@pages/static/NotFound";
import { useRoutes } from "react-router-dom";
import * as pages from "@pages";

const Router = () => {
  console.log(...Object.values(pages).flat());
  let element = useRoutes([
    ...Object.values(pages).flat(),
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};

export default Router;
