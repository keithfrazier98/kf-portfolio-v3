import { useContext } from "react";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "./Context";
import ThemeToggle from "./ThemeToggle";

export default function Header({ pathname, setPathname }) {
  const { theme } = useContext(ThemeContext);
  const activeTabStyle = "text-black dark:text-white bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-50";
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

  const letterTheme = (colorClass) => (theme !== "dark" ? "hover:" + colorClass : "");

  return (
    <div className="fixed z-30 w-full transition-colors duration-1000 rainbow pb-1px flex">
      <header className="flex h-auto bg-black items-center justify-between transition-none w-max">
        <h1 className="text-4xl font-sans w-max px-8 pt-1 ">
          <span className={`${letterTheme("text-blue-400")} ${stdSpanStyle}`}>K</span>
          <span className={`${letterTheme("text-yellow-600")} ${stdSpanStyle}`}>e</span>
          <span className={`${letterTheme("text-red-900")} ${stdSpanStyle}`}>i</span>
          <span className={`${letterTheme("text-violet-600")} ${stdSpanStyle}`}>t</span>
          <span className={`${letterTheme("text-green-700")} ${stdSpanStyle}`}>h</span>
          <span className={`${letterTheme("text-blue-700")} ${stdSpanStyle}`}> </span>
          <span className={`${letterTheme("text-purple-600")} ${stdSpanStyle}`}>F</span>
          <span className={`${letterTheme("text-pink-400")} ${stdSpanStyle}`}>r</span>
          <span className={`${letterTheme("text-rose-700")} ${stdSpanStyle}`}>a</span>
          <span className={`${letterTheme("text-orange-600")} ${stdSpanStyle}`}>z</span>
          <span className={`${letterTheme("text-cyan-500")} ${stdSpanStyle}`}>i</span>
          <span className={`${letterTheme("text-green-400")} ${stdSpanStyle}`}>e</span>
          <span className={`${letterTheme("text-yellow-300")} ${stdSpanStyle}`}>r</span>
        </h1>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </header>
      <div className="h-auto bg-black flex-grow mx-1px" />
      <nav className={`grid grid-flow-col bg-transparent w-max gap-1px`}>
        <Link to="/bio" className={activeTabCondition("/bio")}>
          home
        </Link>
        <div className="w-max">
          <OutsideClickHandler onOutsideClick={() => setOpenExpMenu(false)}>
            <button onClick={() => setOpenExpMenu(!openExpMenu)} className={`btn relative ${activeTabCondition("/experience")}`}>
              experience <BsChevronDown className={`hidden md:block transition-transform transform ${openExpMenu ? "rotate-180" : "rotate-0"} text-xs ml-2`} />
              <div
                className={`expTab ${
                  openExpMenu ? "h-22" : "h-0"
                }`}
              >
                <Link className="flex items-center" onClick={() => setOpenExpMenu(!false)} to="/experience/resume">
                  <span className="hidden md:block mr-1">Online</span> Resume
                </Link>
                <Link className="flex items-center" onClick={() => setOpenExpMenu(!false)} to="/experience/projects">
                  <span className="hidden md:block mr-1">Personal</span> Projects
                </Link>
              </div>
            </button>
          </OutsideClickHandler>
        </div>
        <Link to="/stack" className={activeTabCondition("/stack")}>
          stack
        </Link>
        <Link to="/contact-me" className={activeTabCondition("/contact-me")}>
          contact
        </Link>
          <ThemeToggle />
      </nav>
    </div>
  );
}
