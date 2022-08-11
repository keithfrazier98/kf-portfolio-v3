import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ContactMe from "./ContactMe";
import Cookies from "./Cookies";
import FadeBG from "./FadeBG";
import Home from "./Home";
import Header from "./Header";
import Projects from "./Projects"; 
import Stack from "./Stack";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Resume from "./Resume";

function App() {
  const [pathname, setPathname] = useState("/bio");

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    window[`ga-disable-${process.env.REACT_APP_GA_ID}`] = true
  });


  return (
    <div className="relative w-full h-full overflow-hidden">
      <FadeBG pathname={pathname} />
      <Router>
        <Header pathname={pathname} setPathname={setPathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/experience/github" element={<Projects />} />
          <Route path="/experience/resume" element={<Resume/>} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </Router>
      <Cookies />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
