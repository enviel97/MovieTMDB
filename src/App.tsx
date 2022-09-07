import { HashRouter } from "react-router-dom";
import Footer from "@components/Footer";
import { StickyHeader } from "@components/Header";
import Routes from "./root/useRoutes";

const App = () => {
  const baseName = process.env;
  console.log(baseName);
  return (
    <HashRouter basename='MovieTMDB'>
      <StickyHeader />
      <Routes />
      <Footer />
    </HashRouter>
  );
};

export default App;
