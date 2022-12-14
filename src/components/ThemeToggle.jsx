import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeToggle() {
  useEffect(() => {
    const pref = localStorage.getItem("theme");
    if (pref === "dark") {
      toggleDark(true);
    } else {
      toggleDark(false);
    }
  }, []);

  function toggleDark() {
    const htmlElement = document.querySelector("html");

    if (htmlElement.classList.contains("dark")) {
      htmlElement?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button className="btnReg relative z-10 mx-2 mt-2" onClick={toggleDark}>
      {document.querySelector("html").classList.contains("dark") ? <BsMoon size={16} /> : <BsSun size={16} />}
    </button>
  );
}
