import { useEffect, useRef, useState } from "react";

export default function FadeBG({ pathname }) {
  const home = ["darkYellowTrans", "redTrans"];
  const contact = ["blueTrans", "darkGreenTrans"];
  const projects = ["pinkTrans", "orangeTrans"];
  const stack = ["lightGreenTrans", "lightYellowTrans"];

  const [outer, setOuter] = useState(home);
  const [inner, setInner] = useState(contact);
  const [outerActive, setOuterActive] = useState(true);

  const outerCondition = `${outerActive ? "opacity-100 duration-700" : "opacity-0 duration-1000"} transition-opacity`;
  const innerCondition = `${!outerActive ? "opacity-100 duration-1000" : "opacity-0 duration-700"} transition-opacity`;

  useEffect(() => {
    switch (pathname) {
      case "/peep-my-stack":
        outerActive ? setInner(stack) : setOuter(stack);
        break;
      case "/say-whats-up":
        outerActive ? setInner(contact) : setOuter(contact);
        break;
      case "/check-it-out":
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
      <div className={`absolute top-0 w-full h-full z-0 ${outer[0]} ${outerCondition}`} />
      <div className={`absolute top-0 w-full h-full z-0 ${outer[1]} ${outerCondition}`} />
      <div className={`absolute top-0 w-full h-full z-0 ${inner[0]} ${innerCondition}`} />
      <div className={`absolute top-0 w-full h-full z-0 ${inner[1]} ${innerCondition}`} />
      {/* <div className="relative w-full h-full overflow-clip hide-scrollbar">
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
  </div> */}
    </>
  );
}
