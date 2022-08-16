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

function App() {
  const [pathname, setPathname] = useState("/bio");

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    window[`ga-disable-${process.env.REACT_APP_GA_ID}`] = true
  });


  return (
    <div className="relative w-full h-full bg-gray-100 dark:bg-zinc-900">
      <Router>
        <Header pathname={pathname} setPathname={setPathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/experience/github" element={<GitHub />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/stack" element={<Skills />} />
        </Routes>
      </Router>
      {/* <Cookies /> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
