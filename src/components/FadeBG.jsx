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

  useEffect(() => {
    console.log("theme is", theme);
  }, [theme]);

  console.log("theme is", theme);
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
{
  /* <div className="relative w-full h-full overflow-clip hide-scrollbar">
<div className={`absolute z-30 left-0 bg-black h-full rounded-r w-[2px] transition-transform ${transition ? "translate-y-48" : "translate-y-0"} duration-1000`} />
<div className={`absolute z-20 left-0 bg-gradient-to-b from-red-500 via-emerald-500 to-blue-600 h-1/4 rounded-r w-[2px]`} />
<div
  className={`absolute z-30 left-0 bottom-[98.4%] bg-black rounded-r h-full w-[2px] transition-transform ${
    transition ? "translate-y-48" : "translate-y-0"
  } duration-[1500ms]`}
/>

<div className={`absolute z-30 right-0 bg-black h-full w-[2px] rounded-l transition-transform ${transition ? "-translate-y-[8rem]" : "translate-y-0"} duration-1000`} />
<div className={`absolute z-20 right-0 bottom-0 bg-gradient-to-b from-red-500 via-emerald-500 to-blue-600 h-1/4 rounded-r w-[2px]`} />
<div
  className={`absolute z-30 right-0 top-[103%] rounded-l bg-black h-full w-[2px]  transition-transform ${
    transition ? "-translate-y-[8rem]" : "translate-y-0"
  } duration-[1500ms]`}
/>

<div className={`absolute bottom-0 bg-black w-full h-[2px] rounded-t transition-transform ${transition ? "translate-x-[8rem]" : "translate-x-0"} duration-1000`} />
<div
  className={`absolute bottom-0 right-[100.3%] bg-black w-full rounded-t h-[2px] transition-transform ${
    transition ? "translate-x-[8rem]" : "translate-x-0"
  } duration-[1500ms]`}
/>
</div> */
}
