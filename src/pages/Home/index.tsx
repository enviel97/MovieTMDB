import { RouteObject } from "react-router-dom";
import Home from "./pages";

const homeRoute: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

// const homeRoute = () => {
//   return (
//     <Route path='/' element={<Home />}>
//       <Route path='/videos/:id' element={<Home />} />
//     </Route>
//   );
// };

export default homeRoute;
