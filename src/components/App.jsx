import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Header";
import GitHub from "./GitHub";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import Resume from "./Resume";
import Projects from "./Projects";

import Home from "./Home";

function App() {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    // window[`ga-disable-${process.env.REACT_APP_GA_ID}`] = false;
  }, []);

  return (
    <>
      <Router>
        <Header scrollingDown={scrollingDown} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                scrollingDown={scrollingDown}
                setScrollingDown={setScrollingDown}
              />
            }
          />
          <Route path="/experience/github" element={<GitHub />} />
          <Route path="/experience/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      {/* <Cookies /> */}
      <ReactQueryDevtools initialIsOpen={false} />
      <footer className="py-7 flex w-full justify-center dark:bg-zinc-900">
        <span> © Keith Frazier 2022 </span>
      </footer>
    </>
  );
}

export default App;
