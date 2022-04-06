import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactMe from "./ContactMe";
import FadeBG from "./FadeBG";
import Home from "./Home";
import "./index.css";
import Navigation from "./Navigation";
import Projects from "./Project";
import Stack from "./Stack";

function App() {
  const [pathname, setPathname] = useState("my-little-bio");

  return (
    <>
      {" "}
      <FadeBG pathname={pathname} />
      <div className="absolute top-0 left-0 z-20 w-full h-full hide-scrollbar">
        <Router>
          <Navigation pathname={pathname} setPathname={setPathname} />
          <Routes>
            <Route path="/">
              <Route path="my-little-bio" element={<Home />} />
              <Route path="say-whats-up" element={<ContactMe />} />
              <Route path="check-it-out" element={<Projects />} />
              <Route path="peep-my-stack" element={<Stack />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
