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
import MiddleContainer from "./MiddleContainer";

export default function stack() {
  const pics = [
    css3,
    bootstrap,
    dbeaver,
    expressjs,
    git,
    github,
    heroku,
    html5,
    nodejs,
    postgressql,
    postman,
    reactlogo,
    vercel,
    vscode,
    css3,
    bootstrap,
    dbeaver,
    expressjs,
    git,
    github,
    heroku,
    html5,
    nodejs,
    postgressql,
    postman,
    reactlogo,
    vercel,
    vscode,
  ];
  return (
    <MiddleContainer>
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute w-full h-full z-20">
          <div className="flex w-full h-full justify-center items-center">
            {" "}
            <div className="relative rotate-45">
              <div className="marquee">
                {pics.map((pic) => (
                  <div className="relative">
                  <div className="absolute rotate-45">
                    <img src={pic} className="stackImg" alt={`${pic}`}></img>
                    </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MiddleContainer>
  );
}
