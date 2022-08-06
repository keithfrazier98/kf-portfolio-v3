import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { ThemeContext } from "./Context";

export default function FadeBG({ pathname }) {
  const { theme } = useContext(ThemeContext);
  const home = ["darkYellowTrans", "redTrans"];
  const contact = ["blueTrans", "darkGreenTrans"];
  const projects = ["pinkTrans", "orangeTrans"];
  const stack = ["lightGreenTrans", "lightYellowTrans"];

  const [outer, setOuter] = useState(home);
  const [inner, setInner] = useState(contact);
  const [outerActive, setOuterActive] = useState(true);

  const usualStyles = "transition-opacity absolute top-0 w-full h-full ";
  const outerCondition = `z-0 ${outerActive ? "opacity-100 duration-700" : "opacity-0 duration-1000"} `;
  const innerCondition = `z-0 ${!outerActive ? "opacity-100 duration-1000" : "opacity-0 duration-700"}`;

  useEffect(() => {
    switch (pathname) {
      case "/stack":
        outerActive ? setInner(stack) : setOuter(stack);
        break;
      case "/contact-me":
        outerActive ? setInner(contact) : setOuter(contact);
        break;
      case "/experience/projects" | "/experience/resume":
        outerActive ? setInner(projects) : setOuter(projects);
        break;
      default:
        outerActive ? setInner(home) : setOuter(home);
        break;
    }
    setOuterActive(!outerActive);
  }, [pathname]);

  return (
    <>
      <div className={`z-[1] bg-black opacity-0 dark:opacity-100 duration-1000 transition-opacity absolute top-0 w-full h-full`} />
      <div className={`${outer[0]} ${outerCondition + " " + usualStyles}`} />
      <div className={`${outer[1]} ${outerCondition + " " + usualStyles}`} />
      <div className={`${inner[0]} ${innerCondition + " " + usualStyles}`} />
      <div className={`${inner[1]} ${innerCondition + " " + usualStyles}`} />
    </>
  );
}
