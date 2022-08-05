import { useContext } from "react";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
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
    console.log(theme);
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
    <div className="fixed z-30 w-full transition-colors duration-1000">
      <header className="flex flex-col md:flex-row justify-between pt-4 px-1 md:px-8 bg-black">
        <div className="flex items-center px-4 justify-between transition-none">
          <h1 className="text-5xl font-sans pb-2">
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
        </div>

        <div className="grid grid-flow-col gap-4 transition-colors duration-1000">
          <nav className={`grid grid-cols-4 gap-[2px] rounded-t-xl px-[2px] pt-[2px] ${theme !== "dark" ? "rainbow" : "bg-gray-500"}`}>
            <Link to="/bio" className={`rounded-tl-xl ${activeTabCondition("/my-little-bio")}`}>
              home
            </Link>
            <OutsideClickHandler onOutsideClick={() => setOpenExpMenu(false)}>
              <button onClick={() => setOpenExpMenu(!openExpMenu)} className={`btn rounded-none relative ${activeTabCondition("/check-it-out")}`}>
                experience <BsChevronDown className={`hidden md:block transition-transform transform ${openExpMenu ? "rotate-180" : "rotate-0"} text-xs ml-2`} />
                {openExpMenu ? (
                  <div className="absolute top-full right-0 left-0 text-sm grid grid-flow-row dark:bg-white dark:bg-opacity-10 bg-black text-left text-white expTab">
                    <Link className="flex" onClick={() => setOpenExpMenu(!false)} to="/experience/resume">
                      <span className="hidden md:block mr-1">Online</span> Resume
                    </Link>
                    <Link className="flex" onClick={() => setOpenExpMenu(!false)} to="/experience/projects">
                      <span className="hidden md:block mr-1">Personal</span> Projects
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </OutsideClickHandler>
            <Link to="/stack" className={`${activeTabCondition("/my-stack")}`}>
              stack
            </Link>{" "}
            <Link to="/contact-me" className={`rounded-tr-xl ${activeTabCondition("/say-whats-up")}`}>
              contact
            </Link>
          </nav>
          <div className="hidden md:block self-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className={`${theme !== "dark" ? "rainbow" : "bg-gray-500"} w-full h-[2px] aboslute transition-colors duration-1000`} />
    </div>
  );
}
