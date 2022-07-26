import { useState } from "react";
import ReactGA from "react-ga4";
export default function Cookies() {
  const [showCookies, setShowCookies] = useState(true);

  function howDareYouHandler() {
    setShowCookies(false);
    ReactGA.event({
      category: "cookie_notice",
      action: "User clicked how dare you button. :)",
      label: "How dare you!",
    });
    return alert("Your reaction has been logged.");
  }

  function thatsOkayHandler() {
    setShowCookies(false);
  }
  

  return (
    <div
      className={`w-full h-12 pt-[2px] z-30 items-center bg-gradient-to-tr from-blue-700 to-red-600 absolute bottom-0 left-0 ${
        showCookies ? "" : "translate-y-full"
      } transition-transform transform duration-150`}
    >
      <div className="w-full h-full flex items-center px-12 bg-black text-white text-xs">
        <p>Hello I am keith, glad to see you here! Just to let you know, my website uses google analytics to help me better track visitation and other key metrics.</p>
        <button className="mx-2 rounded-full text-xs px-4 pt-[2px] border border-green-400 hover:bg-green-700 " onClick={thatsOkayHandler}>
          Thats okay!
        </button>
        <button className="mx-2 rounded-full text-xs px-4 pt-[2px] border border-red-500 hover:bg-red-700" onClick={howDareYouHandler}>
          How dare you!
        </button>
      </div>
    </div>
  );
}
