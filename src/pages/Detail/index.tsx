import Detail from "./pages";
import { RouteObject } from "react-router-dom";
import UpdatingLate from "@pages/static/Updating";

const detailRoute: RouteObject[] = [
  {
    path: "/person/:id",
    element: <UpdatingLate />,
  },
  {
    path: "/movie/:id",
    element: <Detail key={Date.now()} category={"movie"} />,
  },
  {
    path: "/tv/:id",
    element: <Detail key={Date.now()} category={"tv"} />,
  },
];

export default detailRoute;
