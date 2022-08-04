import { useContext, useEffect, useState } from "react";
import { BsRainbow, BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "./Context";

export default function ThemeToggle() {
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    const pref = localStorage.getItem("theme");
    if (pref === "light") {
      toggleDark(false);
    } else {
      toggleDark(true);
    }
  }, []);

  const [darkEnabled, setDarkEnabled] = useState(false);

  function toggleDark(force) {
    const htmlElement = document.querySelector("html");
    console.log(htmlElement?.classList.contains("dark"));
    if (force === false || htmlElement?.classList.contains("dark")) {
      htmlElement?.classList.remove("dark");
      setDarkEnabled(false);
      localStorage.setItem("theme", "light");
    } else {
      htmlElement?.classList.add("dark");
      setDarkEnabled(true);
      localStorage.setItem("theme", "dark");
    }
  }
  return (
    <div className="grid grid-flow-row h-fit border-gray-700 ">
      <button
        className={`rounded-t  p-1 border-t border-r  border-l hover:text-black ${!darkEnabled ? "bg-gray-700 text-gray-100 border-gray-700" : "bg-transparent border-gray-200"}`}
        onClick={() => setTheme("rainbow")}
      >
        <BsRainbow size={18} />
      </button>
      <button
        className={`p-1 border-l border-b  rounded-b border-r hover:text-black ${darkEnabled ? "bg-gray-200 text-black border-gray-200" : "bg-transparent border-gray-700"}`}
        onClick={() => setTheme("regular")}
      >
        <BsMoonStarsFill size={16} />
      </button>
    </div>
  );
}
