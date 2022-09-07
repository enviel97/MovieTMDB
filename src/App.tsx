import { BrowserRouter } from "react-router-dom";
import Footer from "@components/Footer";
import { StickyHeader } from "@components/Header";
import Routes from "./root/useRoutes";

const App = () => {
  const baseName = process.env;
  console.log(baseName);
  return (
    <BrowserRouter basename='MovieTMDB'>
      <StickyHeader />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
