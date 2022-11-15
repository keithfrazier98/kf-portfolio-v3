import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ContactMe from "./ContactMe";
import Bio from "./Bio";
import Header from "./Header";
import GitHub from "./GitHub";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Resume from "./Resume";
import Projects from "./Projects";
import { useRef } from "react";
import Hero from "./Hero";
import Skills from "./Skills";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    // window[`ga-disable-${process.env.REACT_APP_GA_ID}`] = false;
  }, []);

  const [scrollingDown, setScrollingDown] = useState(false);
  const [bioIsAtTop, setBioIsAtTop] = useState(false);
  const lastScrollTop = useRef(0);
  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;

    if (scrollTop > lastScrollTop.current) {
      if (!scrollingDown) setScrollingDown(true);
    } else if (scrollTop < lastScrollTop.current) {
      if (scrollingDown) setScrollingDown(false);
    }

    lastScrollTop.current = scrollTop;
    const aboutWindow = document.getElementById("about");
    const aboutPosition = aboutWindow?.getBoundingClientRect();

    if (aboutPosition.top <= 0) {
      if (!bioIsAtTop) setBioIsAtTop(true);
    } else {
      if (bioIsAtTop) setBioIsAtTop(false);
    }
  };

  useEffect(() => {
    const root = document.getElementById("root");
    root.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      root.removeEventListener("scroll", handleScroll);
    };
  }, [bioIsAtTop, scrollingDown]);

  return (
    <>
      <Router>
        <Header scrollingDown={scrollingDown} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-white absolute top-0 left-0 right-0 bottom-0">
                  <Bio />
                </div>

                <div className="relative w-full h-full bg-gray-100 dark:bg-zinc-900">
                  <Hero />

                  <div
                    id="about"
                    className={`w-full h-full ${
                      bioIsAtTop ? "bg-white " : " bg-transparent"
                    }`}
                  >
                    {bioIsAtTop ? <Bio /> : <></>}
                  </div>

                  <Skills />
                  <ContactMe />
                </div>
              </>
            }
          />
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
    </>
  );
}

export default App;
