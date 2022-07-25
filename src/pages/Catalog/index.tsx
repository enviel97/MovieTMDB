import Catalog from "./pages";
import { RouteObject } from "react-router-dom";

const catalogRoute: RouteObject[] = [
  {
    path: "/catalog",
    element: <Catalog />,
  },
];

export default catalogRoute;
