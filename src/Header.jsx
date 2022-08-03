import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useLocation } from "react-router-dom";

export default function Header({ pathname, setPathname }) {
  const activeTabStyle = "text-black bg-white bg-opacity-75";
  const location = useLocation();
  const activeTabCondition = (path) => (path === pathname ? activeTabStyle : "");
  const [transition, setTransition] = useState(false);
  const [openExpMenu, setOpenExpMenu] = useState(false);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  useEffect(() => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 1000);
  }, [location]);

  const colors = ["red", "green", "orange", "blue", "yellow", "purple", "cyan", "pink", "rose", "violet"];
  const hues = ["500", "600", "700", "800", "900"];
  const stdSpanStyle = "text-white transition-colors duration-400";

  function getColor() {
    console.log(`${colors[Math.floor(Math.random() * colors.length)]}-${hues[Math.floor(Math.random() * hues.length)]}`);
    return `${colors[Math.floor(Math.random() * colors.length)]}-${hues[Math.floor(Math.random() * hues.length)]}`;
  }

  return (
    <>
      <header className="flex flex-col md:flex-row fixed z-30 w-full justify-between pt-4 px-8 bg-black ">
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
        <nav className="grid grid-cols-4 gap-[2px] rainbow rounded-t-xl px-[2px] pt-[2px]">
          <Link to="/my-little-bio" className={`rounded-tl-xl ${activeTabCondition("/my-little-bio")}`}>
            home
          </Link>
          <Link to="/say-whats-up" className={`rounded-none ${activeTabCondition("/say-whats-up")}`}>
            contact
          </Link>
          <button onClick={() => setOpenExpMenu(!openExpMenu)} className={`btn rounded-none relative ${activeTabCondition("/check-it-out")}`}>
            experience <BsChevronDown className={`transition-transform transofrm ${openExpMenu ? "rotate-180" : "rotate-0"} text-xs ml-2`} />
            {openExpMenu ? (
              <OutsideClickHandler onOutsideClick={() => setOpenExpMenu(false)}>
                <div className="absolute top-full right-0 left-0 text-sm grid grid-flow-row bg-black text-left text-white expTab">
                  <Link onClick={() => setOpenExpMenu(!false)} to="/experience/resume">
                    Online Resume
                  </Link>
                  <Link onClick={() => setOpenExpMenu(!false)} to="/experience/check-it-out">
                    Personal Projects
                  </Link>
                </div>
              </OutsideClickHandler>
            ) : (
              <></>
            )}
          </button>
          <Link to="/peep-my-stack" className={`rounded-tr-xl ${activeTabCondition("/peep-my-stack")}`}>
            stack
          </Link>
        </nav>
      </header>
      <div className="rainbow w-full h-[2px] relative" />
    </>
  );
}
