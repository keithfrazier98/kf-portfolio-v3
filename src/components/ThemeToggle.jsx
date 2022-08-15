import { useContext, useEffect, useState } from "react";
import { BsRainbow, BsMoonStarsFill, BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "./Context";

export default function ThemeToggle() {
  const { setTheme, theme } = useContext(ThemeContext);
  useEffect(() => {
    const pref = localStorage.getItem("theme");
    if (pref === "dark" | theme === "dark") {
      toggleDark(true);
      setTheme("dark")
    } else {
      toggleDark(false);
      setTheme("light")
    }

  }, [theme]);

  function toggleDark(force) {
    const htmlElement = document.querySelector("html");
    console.log(htmlElement?.classList)
    if (force === false) {
      htmlElement?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
      <button
      className="text-black btnReg relative z-20"
        onClick={() => {
          if (theme !== "dark") {
            setTheme("dark");
            toggleDark(true);
          } else {
            setTheme(null);
            toggleDark(false);
          }
        }}
      >
        {theme !== "dark" ? <BsMoon size={16} /> : <BsSun size={16} />}
      </button>
  );
}
