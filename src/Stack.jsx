import css3 from "./images/css3.png";
import bootstrap from "./images/Bootstrap_logo.svg.png";
import dbeaver from "./images/DBeaver.png";
import expressjs from "./images/ExpressJS.png";
import git from "./images/git.png";
import github from "./images/github.png";
import heroku from "./images/heroku.png";
import html5 from "./images/html5.png";
import nodejs from "./images/nodejs.png";
import postgressql from "./images/postgressql.png";
import postman from "./images/postman.png";
import reactlogo from "./images/react.svg";
import sql from "./images/sql.png";
import vercel from "./images/vercel.png";
import vscode from "./images/vscode.png";

export default function stack() {
  const pics = [css3, bootstrap, dbeaver, expressjs, git, github, heroku, html5, nodejs, postgressql, postman, reactlogo, vercel, vscode];

  const frontend = ["HTML", "CSS", "React", "Tailwind", "Bootstrap", "React-Query", "Puppeteer"];
  const backend = ["PostgresSQL", "Express", "DSA", "Knex"];
  const frontAndBack = ["Typescript", "JavaScript", "ESLint", "Jest", "GraphQL", "Graphql-Tools"];
  const tools = ["Vercel", "GitHub Actions/Workflows", "Digital Ocean", "Heroku"];
  const stack = [
    ["Frontend", frontend],
    ["Backend", backend],
    ["Front & Back (end)", frontAndBack],
    ["Tools", tools],
  ];
  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute rotate-45 -left-[10%] -bottom-1/3">
          <div className="py-12 animate-marquee whitespace-nowrap grid grid-flow-col gap-6 w-max">
            {pics.map((pic) => (
              <img src={pic} className="w-10 h-10 -rotate-45" alt={`${pic}`}></img>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center px-32">
          <div className="grid grid-flow-col gap-12">
            {stack.map((subStack) => (
              <div>
                <h4 className="mt-3">{subStack[0]}</h4>
                <div className="w-full h-[1px] bg-gray-500 mb-3" />
                <ul className="grid grid-flow-row gap-3">
                  {subStack[1].map((item, index) => (
                    <li key={subStack[0] + "_item_" + index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
