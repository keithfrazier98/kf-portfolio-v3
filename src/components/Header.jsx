import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import OffsetBorder from "./OffsetBorder";
import ThemeToggle from "./ThemeToggle";

export default function Header({ scrollingDown }) {
  const links = [
    ["about", "/#about"],
    [
      "experience",
      [
        ["GitHub overview", "/experience/github"],
        // ["resume", "/resume"],
        ["projects", "/experience/projects"],
      ],
    ],
    ["skills", "/#skills"],
    ["contact", "/#contact"],
  ];

  return (
    <header
      className={`${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      } items-center justify-around backdrop-blur-sm flex transition-transform w-full fixed p-2 z-30 border-b`}
    >
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm border-b" /> */}
      <nav className={`flex flex-wrap`}>
        <a
          href={"/#top"}
          className="px-4 py-2 mx-2 text-center border border-white dark:border-black bg-black dark:bg-white relative"
        >
          <span className="m-auto relative z-10 text-white dark:text-black">
            kf
          </span>
          <OffsetBorder offsetPx={"3"} shadow={"blur"} />
        </a>
        {links.map((link, index) => {
          if (Array.isArray(link[1])) {
            return (
              <div
                key={"nav_link_menu_" + index}
                className="group btnReg mx-2 mt-2 relative cursor-pointer"
              >
                <span>{link[0]}</span>
                <div className="hidden z-20 group-hover:block absolute -left-1px -right-1px top-full text-xs bg-white dark:bg-black dark:border-white border-black border-x border-b">
                  {link[1].map((embed) => (
                    <Link
                      key={`nav_sub_link_${embed[1]}_${index}`}
                      to={embed[1]}
                      className="flex flex-col py-3 px-1 hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-10"
                    >
                      {embed[0]}
                    </Link>
                  ))}
                </div>
              </div>
            );
          } else if (index >= 2 || index === 0) {
            return (
              <HashLink
                key={"nav_link_" + index}
                to={link[1]}
                className="mx-2 mt-2 btnReg"
              >
                {link[0]}
              </HashLink>
            );
          } else {
            return (
              <Link
                key={`nav_link_${index}`}
                to={link[1]}
                className="mx-2 mt-2 btnReg"
              >
                {link[0]}
              </Link>
            );
          }
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
