import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import SoundcloudTracks from "./components/Instrus/SoundcloudTracks";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
<Router >
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/project" element={<Projects />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/instrumentals" element={<SoundcloudTracks/>} />
          <Route path="*" element={<Navigate to="/Portfolio"/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
