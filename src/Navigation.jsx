import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation({pathname, setPathname}) {
  const activeTabStyle = "text-black bg-white bg-opacity-75";
  const location = useLocation()
  const activeTabCondition = (path) => (path === pathname ? activeTabStyle : "");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const colors = ["red", "green", "orange", "blue", "yellow", "purple", "cyan", "pink", "rose", "violet"];
  const hues = ["500", "600", "700", "800", "900"];
  const stdSpanStyle = "text-white transition-colors duration-400";

  function getColor() {
    console.log(`${colors[Math.floor(Math.random() * colors.length)]}-${hues[Math.floor(Math.random() * hues.length)]}`);
    return `${colors[Math.floor(Math.random() * colors.length)]}-${hues[Math.floor(Math.random() * hues.length)]}`;
  }

  return (
    <div className="absolute top-0 z-30 w-full ">
      <header className="flex flex-col md:flex-row justify-between pt-4 px-8 bg-black ">
        <h1 className="text-5xl font-sans pb-2">
          <span className={`hover:text-blue-400 ${stdSpanStyle}`}>K</span>
          <span className={`hover:text-yellow-600 ${stdSpanStyle}`}>e</span>
          <span className={`hover:text-red-900 ${stdSpanStyle}`}>i</span>
          <span className={`hover:text-violet-600 ${stdSpanStyle}`}>t</span>
          <span className={`hover:text-green-700 ${stdSpanStyle}`}>h</span>
          <span className={`hover:text-blue-700 ${stdSpanStyle}`}> </span>
          <span className={`hover:text-purple-600 ${stdSpanStyle}`}>F</span>
          <span className={`hover:text-pink-400 ${stdSpanStyle}`}>r</span>
          <span className={`hover:text-rose-700 ${stdSpanStyle}`}>a</span>
          <span className={`hover:text-orange-600 ${stdSpanStyle}`}>z</span>
          <span className={`hover:text-cyan-500 ${stdSpanStyle}`}>i</span>
          <span className={`hover:text-green-400 ${stdSpanStyle}`}>e</span>
          <span className={`hover:text-yellow-300 ${stdSpanStyle}`}>r</span>
        </h1>
        <nav className="grid grid-cols-4 gap-[2px] rainbow rounded-t px-[2px] pt-[2px]">
          <Link to="/my-little-bio" className={activeTabCondition("/my-little-bio")}>
            home
          </Link>
          <Link to="/say-whats-up" className={activeTabCondition("/say-whats-up")}>
            contact
          </Link>
          <Link to="/check-it-out" className={activeTabCondition("/check-it-out")}>
            projects
          </Link>
          <Link to="/peep-my-stack" className={activeTabCondition("/peep-my-stack")}>
            stack
          </Link>
        </nav>
      </header>
      <div className="rainbow w-full h-[2px]" />
    </div>
  );
}
