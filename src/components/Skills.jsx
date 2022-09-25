import css3 from "../images/css3.png";
import bootstrap from "../images/Bootstrap_logo.svg.png";
import dbeaver from "../images/DBeaver.png";
import expressjs from "../images/express.png";
import git from "../images/git.png";
import github from "../images/github.png";
import heroku from "../images/heroku.png";
import html5 from "../images/html5.png";
import nodejs from "../images/nodejs.png";
import postgressql from "../images/postgressql.png";
import postman from "../images/postman.png";
import reactlogo from "../images/react.svg";
import sql from "../images/sql.png";
import vercel from "../images/vercel.png";
import vscode from "../images/vscode.png";
import tailwind from "../images/tailwind.png";
import jest from "../images/jest.png";
import graphql from "../images/graphql.png";
import react_query from "../images/react-query.png";
import js from "../images/js.png";
import ts from "../images/ts.png";
import eslint from "../images/eslint.png";
import knex from "../images/knex.png";
import gqlTools from "../images/graphql-tools.png";
import dsa from "../images/dsa.jpg";
import pup from "../images/pup.png";
import DO from "../images/DO.png";
import { useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import OffsetBorder from "./OffsetBorder";

export default function Skills() {
  const pics = {
    "Digital Ocean": DO,
    DSA: dsa,
    Puppeteer: pup,
    ESLint: eslint,
    TypeScript: ts,
    JavaScript: js,
    CSS: css3,
    Bootstrap: bootstrap,
    Express: expressjs,
    Git: git,
    GitHub: github,
    "GitHub Actions": github,
    Heroku: heroku,
    HTML: html5,
    Node: nodejs,
    PostgresSQL: postgressql,
    React: reactlogo,
    Vercel: vercel,
    Tailwind: tailwind,
    Jest: jest,
    GraphQL: graphql,
    "React-Query": react_query,
    Knex: knex,
    "GraphQL-Tools": gqlTools,
  };

  const frontend = ["HTML", "CSS", "React", "Tailwind", "React-Query", "Puppeteer"];
  const backend = ["PostgresSQL", "Express", "DSA", "Knex"];
  const frontAndBack = ["TypeScript", "JavaScript", "Node", "ESLint", "Jest", "GraphQL", "GraphQL-Tools"];
  const tools = ["Vercel", "Git", "GitHub", "GitHub Actions", "Digital Ocean", "Heroku"];
  const stack = [
    ["Frontend", frontend],
    ["Backend", backend],
    ["Front & Back (end)", frontAndBack],
    ["Tools", tools],
  ];

  return (
    <div className="relative bg-gray-100 dark:bg-zinc-900">
      <div id="skills" className="m-auto py-32 max-w-full overflow-x-hidden flex flex-col items-center bg-gray-100 dark:bg-zinc-900">
        <div className="w-full pl-12">
          <div className="w-min">
            {" "}
            <h3 className="text-3xl">Skills</h3>
            <div className="w-[200%] h-1px bg-black my-2" />
          </div>
        </div>
        {/* <div className="z-[2] mx-auto flex flex-col"> */}
        <div className="flex flex-wrap items-center justify-center">
          {stack.map((subStack) => (
            <div className="w-max relative border border-black dark:border-white bg-white dark:bg-black p-8 m-4 text-2xl">
              <div className="relative z-10">
                <h4>{subStack[0]}</h4>
                <div className="w-full h-[1px] bg-gray-500 mb-3" />
                <ul className="grid grid-flow-row gap-3">
                  {subStack[1].map((item, index) => (
                    <li key={subStack[0] + "_item_" + index} className={`flex item-center`}>
                      <img src={pics[item]} className={`w-8 h-8 mr-3 ${["Vercel", "GitHub", "GraphQL", "GitHub Actions"].includes(item) ? "dark:invert" : ""}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <OffsetBorder offsetPx={8} shadow="solid" />
            </div>
          ))}
          {/* </div> */}
        </div>{" "}
      </div>
    </div>
  );
}
