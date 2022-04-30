import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MiddleContainer from "./MiddleContainer";
import ProjectItem from "./ProjectItem";
import RepoItem from "./RepoItem";
export default function Projects() {
  const [allRepos, setAllRepos] = useState([]);
  const [pinnedRepos, setPinnedRepos] = useState();
  const [languagePercent, setLanguagePercent] = useState({
    colors: null,
    percentages: null,
    total: 0,
  });
  const config = {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_BEARER}` },
  };
  const githubUrl = "https://api.github.com/graphql";

  const nodes = `name
  createdAt
  description
  homepageUrl
  owner{
    avatarUrl
    url
    login
  }
  isPrivate
  url
  primaryLanguage {
      name
      color
  }`;

  useEffect(() => {
    const body = {
      query: `query {
        user(login: "keithfrazier98") { 
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                ${nodes}
              }
            }
          }
        }
      }`,
    };

    axios.post(githubUrl, body, config).then((res) => {
      setPinnedRepos(res.data.data.user.pinnedItems.nodes);
    });
  }, []);

  useEffect(() => {
    const langCount = {};
    const langColor = {};
    const langPerc = {};
    if (allRepos.length > 0) {
      allRepos.forEach((repo) => {
        console.log(repo.primaryLanguage);
        const langObject = repo.primaryLanguage;
        if (langObject) {
          const color = langObject.color;
          const name = langObject.name;
          if (langCount[name]) {
            langCount[name] = langCount[name] + 1;
          } else {
            langCount[name] = 1;
            langColor[name] = color;
          }
        }
      });

      console.log(langCount, langColor);
      let totalPerc = 0;
      for (let [language, value] of Object.entries(langCount)) {
        const percentage = (value / allRepos.length) * 100;
        langPerc[language] = percentage;
        totalPerc += percentage;
      }

      setLanguagePercent({
        colors: langColor,
        total: totalPerc,
        percentages: langPerc,
      });
    }
  }, [allRepos]);

  function makeLanguageChart() {
    if (!languagePercent || !languagePercent.percentages) return;
    let elements = [];
    for (let [language, percent] of Object.entries(languagePercent.percentages)) {
      console.log(language, percent);
      elements.push(
        <div className={`h-full group relative overflow-visible`} style={{ backgroundColor: languagePercent.colors[language], width: `${percent}%` }}>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden opacity-0 group-hover:opacity-100 duration-300 transition-opacity group-hover:block z-30">
            <p className="">{language}</p>
          </div>
        </div>
      );
    }

    console.log(elements);
    return elements;
  }

  useEffect(() => {
    const body = {
      query: `query {
      repositoryOwner(login:"keithfrazier98"){
      login
      id
      repositories(last:50, orderBy:{direction: DESC, field:CREATED_AT} ){
      nodes{
      ${nodes}
            }
          }
        }
      }`,
    };

    axios.post(githubUrl, body, config).then((res) => {
      setAllRepos(res.data.data.repositoryOwner.repositories.nodes);
    });
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="absolute w-full h-full z-20">
        <div className="flex w-full h-full justify-center items-center">
          <div className="max-w-3xl bg-gradient-to-tl from-green-400 via-yellow-500 to-indigo-700 p-[2px] rounded-lg mr-12">
            <div className="w-full max-h-[35rem] rounded text-left bg-zinc-700">
              <div className="topography text-center px-2 rounded-lg">
                <h2 className="text-2xl text-white pt-1">Pinned Repository Readmes</h2>
                {pinnedRepos ? (
                  <Carousel axis="horizontal" infiniteLoop={true} stopOnHover={true} swipeable={true} showStatus={false}>
                    {pinnedRepos?.map((repo) => {
                      console.log(repo);
                      return <ProjectItem data={repo} />;
                    })}
                  </Carousel>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className=" p-[2px] bg-gradient-to-bl from-blue-700 to-indigo-800 via-fuchsia-700 rounded-lg">
              <div className="rounded-lg bg-zinc-700 text-white p-2 text-center">
                <h3 className="w-full text-center bg-zinc-900 p-1 rounded">GitHub Repositories</h3>
                <ul className="max-h-96 overflow-scroll hide-scrollbar max-w-sm my-1 text-left">
                  {allRepos?.map((data) => {
                    if (!data.isPrivate) {
                      return <RepoItem data={data} />;
                    }
                  })}
                </ul>
                <span className="text-zinc-400">Powered by GitHub GraphQL API</span>
              </div>
            </div>
            <div className="w-full flex flex-col text-center mt-4">
              <p className="">Language Analysis</p>
              <div className="w-full h-5 p-[2px] bg-gradient-to-tr from-indigo-800 to-blue-700 via-fuchsia-700 rounded-full">
                <div className="w-full h-full bg-zinc-700 rounded-full first:rounded-l-full last:rounded-r-full flex">
                  {languagePercent ? makeLanguageChart()?.map((element) => element) : <></>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
