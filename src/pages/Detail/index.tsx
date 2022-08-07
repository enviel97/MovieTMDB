import Detail from "./pages";
import { RouteObject } from "react-router-dom";
import UpdatingLate from "@pages/static/Updating";

const detailRoute: RouteObject[] = [
  {
    path: "/person/:id",
    element: <UpdatingLate />,
  },
  {
    path: "/:category/:id",
    element: <Detail key={Date.now()} />,
  },
];

export default detailRoute;
