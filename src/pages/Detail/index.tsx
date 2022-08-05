import Detail from "./pages";
import { RouteObject } from "react-router-dom";
import DetailNotDefine from "./pages/DetailNotDefine";

const detailRoute: RouteObject[] = [
  {
    path: "/person/:id",
    element: <DetailNotDefine />,
  },
  {
    path: "/:category/:id",
    element: <Detail />,
  },
];

export default detailRoute;
