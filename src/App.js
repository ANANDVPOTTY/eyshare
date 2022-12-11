import { Navbar } from "react-bootstrap";
import "./App.css";

import Viewers from "./components/Viewers/Viewers";
import Navbar1 from "./components/Navbar/Navbar1";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import LFCS from "./components/LFCServices/LFCS";
import LMS from "./components/LMServices/LMS";

function App() {
  return (
    <>
      <Navbar1 />
      <Home />
      <Services />
      <LMS />
      <LFCS />
      {/* <Viewers /> */}
    </>
  );
}

export default App;
