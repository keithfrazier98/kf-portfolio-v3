import { useContext, useEffect, useState } from "react";
import { BsRainbow, BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "./Context";

export default function ThemeToggle() {
  const { setTheme, theme } = useContext(ThemeContext);
  useEffect(() => {
    const pref = localStorage.getItem("theme");
    console.log(pref, theme);
    if (pref === "light" | theme === "dark") {
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
      <button
      className="text-white"
        onClick={() => {
          if (theme === "dark") {
            console.log("setting rainboq theme")
            setTheme("rainbow");
            toggleDark(false);
          } else {
            console.log("setting refular theme")

            setTheme("dark");
            toggleDark(true);
          }
        }}
      >
        {theme === "rainbow" ? <BsMoonStarsFill size={16} /> : <BsRainbow size={18} />}
      </button>
  );
}
