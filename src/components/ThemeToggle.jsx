import { useContext, useEffect, useState } from "react";
import { BsRainbow, BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "./Context";

export default function ThemeToggle() {
  const { setTheme, theme } = useContext(ThemeContext);
  useEffect(() => {
    const pref = localStorage.getItem("theme");
    console.log(pref, theme);
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
    console.log(htmlElement?.classList.contains("dark"));
    if (force === false) {
      console.log("setting local storage null")
      htmlElement?.classList.remove("dark");
      localStorage.setItem("theme", null);
    } else {
      console.log("setting local storage light")

      htmlElement?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  return (
      <button
      className="text-white"
        onClick={() => {
          if (theme !== "dark") {
            console.log("setting rainboq theme")
            setTheme("dark");
            toggleDark(true);
          } else {
            console.log("setting refular theme")

            setTheme(null);
            toggleDark(false);
          }
        }}
      >
        {theme !== "dark" ? <BsMoonStarsFill size={16} /> : <BsRainbow size={18} />}
      </button>
  );
}
