import { BrowserRouter } from "react-router-dom";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Routes from "./root/useRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
