import { useContext, useEffect, useState } from "react";
import { BsRainbow, BsMoonStarsFill } from "react-icons/bs";
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
      setTheme(null)
    }

  }, [theme]);

  function toggleDark(force) {
    const htmlElement = document.querySelector("html");
    if (force === false) {
      htmlElement?.classList.remove("dark");
      localStorage.setItem("theme", null);
    } else {
      htmlElement?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  return (
      <button
      className="text-white w-full h-full btn"
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
        {theme !== "dark" ? <BsMoonStarsFill size={16} /> : <BsRainbow size={18} />}
      </button>
  );
}
