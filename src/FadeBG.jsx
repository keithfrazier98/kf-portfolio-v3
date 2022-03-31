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
      <div className={`absolute top-0 w-full h-full ${outer[0]} ${outerCondition}`} />
      <div className={`absolute top-0 w-full h-full ${outer[1]} ${outerCondition}`} />
      <div className={`absolute top-0 w-full h-full ${inner[0]} ${innerCondition}`} />
      <div className={`absolute top-0 w-full h-full ${inner[1]} ${innerCondition}`} />
    </>
  );
}
