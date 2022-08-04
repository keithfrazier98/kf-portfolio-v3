import css3 from "./images/css3.png";
import bootstrap from "./images/Bootstrap_logo.svg.png";
import dbeaver from "./images/DBeaver.png";
import expressjs from "./images/express.png";
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
import tailwind from "./images/tailwind.png"
import jest from "./images/jest.png"
import graphql from "./images/graphql.png"
import react_query from "./images/react-query.png"
import js from "./images/js.png"
import ts from "./images/ts.png"
import eslint from "./images/eslint.png"
import knex from "./images/knex.png"
import gqlTools from "./images/graphql-tools.png"
import dsa from "./images/dsa.jpg"
import pup from "./images/pup.png"
import DO  from "./images/DO.png"

export default function stack() {
  const pics = {
    "Digital Ocean": DO,
    DSA: dsa,
    Puppeteer: pup,
    ESLint:eslint,
    TypeScript:ts,
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
    Tailwind:tailwind,
    Jest:jest,
    GraphQL: graphql,
    "React-Query": react_query, 
    Knex: knex,
    "GraphQL-Tools": gqlTools
  };

  const frontend = ["HTML", "CSS", "React", "Tailwind", "Bootstrap", "React-Query", "Puppeteer"];
  const backend = ["PostgresSQL", "Express", "DSA", "Knex"];
  const frontAndBack = ["TypeScript", "JavaScript", "Node", "ESLint", "Jest", "GraphQL", "GraphQL-Tools"];
  const tools = ["Vercel", "Git", "GitHub", "GitHub Actions", "Digital Ocean", "Heroku"];
  const stack = [
    ["Frontend", frontend],
    ["Backend", backend],
    ["Front & Back (end)", frontAndBack],
    ["Tools", tools],
  ];

  //TODO: remove marquee and put tool icons next to tools in the table
  //TODO: make each item a button and display paragraph on my history in each item
  //TODO: rate reach item in comfortability and display somehow in the UI (maybe stars)
  //TODO: index each item with a counter and make a unique ID, have a setinterval randomly
  //TODO: pick a part of my stack every 5 seconds until the user engages with the screen
  return (
    <>
        <div className="w-full h-full flex justify-center items-center px-32">
          <div className="grid grid-flow-col gap-12 z-30">
            {stack.map((subStack) => (
              <div>
                <h4 className="mt-3">{subStack[0]}</h4>
                <div className="w-full h-[1px] bg-gray-500 mb-3" />
                <ul className="grid grid-flow-row gap-3">
                  {subStack[1].map((item, index) => (
                    <li key={subStack[0] + "_item_" + index} className="flex item-center">
                      <img src={pics[item]} className="w-4 h-4 mr-3"/>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
