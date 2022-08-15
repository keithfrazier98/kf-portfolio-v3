import { Link } from "react-router-dom";
import OffsetBorder from "./OffsetBorder";
import ThemeToggle from "./ThemeToggle";

export default function Header() {

  const links = [
    ["home", "/"],
    [
      "experience",
      [
        ["GitHub Overview", "/experience/github"],
        ["Resume", "/resume"],
      ],
    ],
    ["skills", "/#skills"],
    ["contact", "#contact"]
  ];

  return (
    <header className="items-center justify-around backdrop-blur-sm transition-none w-full fixed flex flex-col md:flex-row p-2 z-30 border-b">
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm border-b" /> */}
      <div className="h-7 w-7 text-center bg-black dark:bg-white relative">
        <span className="m-auto relative z-10 text-white dark:text-black">kf</span>
        <OffsetBorder offsetPx={"3"} shadow={false} />
      </div>
      <nav className={`flex`}>
        {links.map((link, index) => {
          if (Array.isArray(link[1])) {
            return (
              <div className="group btnReg mx-2 relative">
                <span>experience</span>
                <div className="hidden group-hover:block absolute -left-1px -right-1px top-full text-xs bg-white dark:bg-black dark:border-white border-black border-x border-b">
                  {link[1].map((embed) => (
                    <Link key={`nav_link_${index}`} to={embed[1]} className="flex flex-col py-3 px-1 hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-10">
                      {embed[0]}
                    </Link>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <Link key={`nav_link_${index}`} to={link[1]} className="mx-2">
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
