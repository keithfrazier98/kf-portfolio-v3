import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ContactMe from "./ContactMe";
import Cookies from "./Cookies";
import Bio from "./Bio";
import Header from "./Header";
import GitHub from "./GitHub";
import Skills from "./Skills";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Resume from "./Resume";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  const [pathname, setPathname] = useState("/bio");

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    window[`ga-disable-${process.env.REACT_APP_GA_ID}`] = true;
  });

  return (
    <div className="relative w-full h-full bg-gray-100 dark:bg-zinc-900">
      <Router>
        <Header pathname={pathname} setPathname={setPathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/experience/github" element={<GitHub />} />
          <Route path="/experience/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/stack" element={<Skills />} />
        </Routes>
      </Router>
      {/* <Cookies /> */}
      <ReactQueryDevtools initialIsOpen={false} />
      <footer className="py-7 flex w-full justify-center dark:bg-zinc-900">
        <span> © Keith Frazier 2022 </span>
      </footer>
    </div>
  );
}

export default App;
