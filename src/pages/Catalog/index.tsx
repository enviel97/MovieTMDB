import Catalog from "./pages";
import { RouteObject } from "react-router-dom";

const catalogRoute: RouteObject[] = [
  {
    path: "/:category",
    element: <Catalog />,
  },
];

export default catalogRoute;
