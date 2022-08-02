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
      className={`w-full h-12 pt-[2px] z-30 items-center pb-[4.5rem] md:pb-0 bg-gradient-to-tr from-blue-700 to-red-600 absolute bottom-0 left-0 ${
        showCookies ? "" : "translate-y-full"
      } transition-transform transform duration-150`}
    >
      <div className="w-full h-full bg-black flex items-center justify-center md pt-2">
        <div className="grid grid-flow-col px-12 gap-3 bg-black text-white text-xs m-auto ">
        <p>
          Hello I am keith, glad to see you here! My website uses google analytics to help me better track visitation.
        </p>
        <button className="h-fit self-center rounded-full text-xs px-4 pt-[2px] border border-green-400 hover:bg-green-700 bg-green-200 bg-opacity-25 " onClick={thatsOkayHandler}>
          Okay
        </button>
        <button className="h-fit self-center rounded-full text-xs px-4 pt-[2px] border border-red-500 hover:bg-red-700" onClick={howDareYouHandler}>
          No!
        </button>
      </div>
      </div>
      
    </div>
  );
}
