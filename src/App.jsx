import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ContactMe from "./ContactMe";
import Cookies from "./Cookies";
import FadeBG from "./FadeBG";
import Home from "./Home";
import "./index.css";
import Header from "./Header";
import Projects from "./Projects";
import Stack from "./Stack";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  const [pathname, setPathname] = useState("my-little-bio");

  useEffect(() => {
    ReactGA.initialize("G-2M76FPRN8T");
  });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <FadeBG pathname={pathname} />
      <Router>
        <Header pathname={pathname} setPathname={setPathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-little-bio" element={<Home />} />
          <Route path="/say-whats-up" element={<ContactMe />} />
          <Route path="/experience/check-it-out" element={<Projects />} />
          <Route path="/peep-my-stack" element={<Stack />} />
        </Routes>
      </Router>
      <Cookies />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
