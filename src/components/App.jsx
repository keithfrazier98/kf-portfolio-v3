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
import { useContext } from "react";
import { ThemeContext } from "./Context";

function App() {
  const {theme} = useContext(ThemeContext)
  const [pathname, setPathname] = useState("/bio");

  useEffect(() => {
    ReactGA.initialize("G-2M76FPRN8T");
  });

  useEffect(()=>{
    console.log("theme is", theme)
  }, [theme])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <FadeBG pathname={pathname} />
      <Router>
        <Header pathname={pathname} setPathname={setPathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/experience/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </Router>
      <Cookies />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
