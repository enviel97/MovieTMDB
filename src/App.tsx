import { HashRouter } from "react-router-dom";
import Footer from "@components/Footer";
import { StickyHeader } from "@components/Header";
import Routes from "./root/useRoutes";

const App = () => {
  return (
    <HashRouter>
      <StickyHeader />
      <Routes />
      <Footer />
    </HashRouter>
  );
};

export default App;
