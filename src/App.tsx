import { HashRouter } from "react-router-dom";
import Footer from "@components/Footer";
import { StickyHeader } from "@components/Header";
import Routes from "./root/useRoutes";

const App = () => {
  const baseName = process.env.NODE_ENV === "development" ? "" : "MovieTMDB";

  return (
    <HashRouter basename={baseName}>
      <StickyHeader />
      <Routes />
      <Footer />
    </HashRouter>
  );
};

export default App;
