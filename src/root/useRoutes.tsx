import NotFound from "@pages/static/NotFound";
import React from "react";
import { useRoutes } from "react-router-dom";
import * as pages from "@pages";

const Router = () => {
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
