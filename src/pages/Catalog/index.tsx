import { RouteObject } from "react-router-dom";
import Catalog from "./pages";
import { SearchPage } from "./pages/SearchMovie";

const catalogRoute: RouteObject[] = [
  {
    path: "/:category",
    element: <Catalog />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
];

export default catalogRoute;
