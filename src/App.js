import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactMe from "./ContactMe";
import Home from "./Home";
import "./index.css";
import Navigation from "./Navigation";
import Projects from "./Project";
import Stack from "./Stack";

function App() {
  useEffect(() => {
    console.log(window.location.hash);
    if (!window.location.hash) {
      window.location.href = window.location.href + "#my-little-bio";
    }
  }, []);

  return (
    <div className="App relative w-full h-full">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/#my-little-bio" element={Home} />
          <Route path="/#say-whats-up" element={ContactMe} />
          <Route path="/#check-it-out" element={Projects} />
          <Route path="/#peep-my-stack" element={Stack} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
