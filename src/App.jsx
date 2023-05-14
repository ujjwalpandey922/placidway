import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import FooterBanner from "./components/Footerb";
import FooterActual from "./components/FooterActual";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Overview />
      <FooterBanner />
      <FooterActual />
    </BrowserRouter>
  );
}

export default App;
