import "./App.css";

import Viewers from "./components/Viewers/Viewers";
import Navbar1 from "./components/Navbar/Navbar1";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import LFCS from "./components/LFCServices/LFCS";
import LMS from "./components/LMServices/LMS";
import TestNav from "./components/Navbar/TestNav";
import Executives from "./components/Executives/Executives";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <TestNav />
      {/* <Navbar1 /> */}
      <Home />
      <Services />
      <LMS />
      <LFCS />
      <Executives />
      {/* <Viewers /> */}
    </>
  );
}

export default App;
