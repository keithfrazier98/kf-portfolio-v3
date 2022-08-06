import { useEffect } from "react";
import { useState } from "react";
import ReactGA from "react-ga4";
export default function Cookies() {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const cookiesPref = localStorage.getItem("cookiesAllowed");
    if (!cookiesPref) setShowCookies(true);
  }, []);

  function howDareYouHandler() {
    setShowCookies(false);
    window[`ga-disable-${process.env.REACT_APP_GA_ID}`] = false;
    return alert("Cookies have been disabled");
  }

  function thatsOkayHandler() {
    setShowCookies(false);
    localStorage.setItem("cookiesAllowed", true)
  }

  return (
    <div
      className={`w-full h-12 pt-[2px] z-30 items-center pb-[4.5rem] md:pb-0 bg-gradient-to-tr from-blue-700 to-red-600 absolute bottom-0 left-0 ${
        showCookies ? "" : "translate-y-full"
      } transition-transform transform duration-150`}
    >
      <div className="w-full h-full bg-black flex items-center justify-center md pt-2">
        <div className="grid grid-flow-col px-12 gap-3 bg-black text-white text-xs m-auto ">
          <p>Hello, it's great to see you here! FYI, this website uses google analytics to help increase visitation, and only page views are recorded.</p>
          <button
            className="h-fit self-center text-xs px-4 pt-[2px] border border-green-400 hover:bg-green-700 bg-green-200 bg-opacity-25 "
            onClick={thatsOkayHandler}
          >
            Okay, that's cool.
          </button>
          <button className="h-fit self-center text-xs px-4 pt-[2px] border border-red-500 hover:bg-red-700" onClick={howDareYouHandler}>
            Don't do that!
          </button>
        </div>
      </div>
    </div>
  );
}
