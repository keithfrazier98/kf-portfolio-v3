import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProjectItem from "./ProjectItem";
import RepoItem from "./RepoItem";
export default function Projects() {
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

  const pinnedReposQuery = useQuery(["pinned_repos"], fetchPinnedRepos, { staleTime: 300000, cacheTime: 300000 });

  useEffect(() => {
    console.log(pinnedReposQuery);
  }, [pinnedReposQuery.isLoading]);

  async function fetchPinnedRepos() {
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

    const response = await axios.post(githubUrl, body, config);
    return response.data.data.user.pinnedItems.nodes;
  }

  const allReposQuery = useQuery(["all_repos"], fetchAllRepos, { staleTime: 300000, cacheTime: 300000 });

  async function fetchAllRepos() {
    const body = {
      query: `query {
      repositoryOwner(login:"keithfrazier98"){
      login
      id
      repositories(last:100, orderBy:{direction: DESC, field:UPDATED_AT},  privacy: PUBLIC ){
      nodes{
      ${nodes}
            }
          }
        }
      }`,
    };

    const response = await axios.post(githubUrl, body, config);
    return response.data.data.repositoryOwner.repositories.nodes;
  }

  useEffect(() => {
    const langCount = {};
    const langColor = {};
    const langPerc = {};
    if (allReposQuery?.data?.length > 0) {
      allReposQuery.data.forEach((repo) => {
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

      let totalPerc = 0;
      for (let [language, value] of Object.entries(langCount)) {
        const percentage = (value / allReposQuery?.data?.length) * 100;
        langPerc[language] = percentage;
        totalPerc += percentage;
      }

      setLanguagePercent({
        colors: langColor,
        total: totalPerc,
        percentages: langPerc,
      });
    }
  }, [allReposQuery.data]);

  function makeLanguageChart() {
    if (!languagePercent || !languagePercent.percentages) return;
    let elements = [];
    let totalPerc = 0;
    let totalLang = 0;
    for (let [language, percent] of Object.entries(languagePercent.percentages)) {
      totalPerc += percent;
      totalLang += 1;
    }

    const offset = (100 - totalPerc) / totalLang;

    for (let [language, percent] of Object.entries(languagePercent.percentages)) {
      elements.push(
        <div
          className={`h-full group relative overflow-visible first:rounded-l-full last:rounded-r-full`}
          style={{ backgroundColor: languagePercent.colors[language], width: `${percent + offset}%` }}
        >
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden opacity-0 group-hover:opacity-100 duration-300 transition-opacity group-hover:block z-30">
            <p className="w-max">
              {language} {Math.floor(percent)}%
            </p>
          </div>
        </div>
      );
    }

    return elements;
  }

  return (
    <div className="h-full px-3 max-w-full grid grid-flow-row md:grid-flow-col gap-4 w-min m-auto mt-24 overflow-scroll">
      <div className="z-10 h-fit bg-gradient-to-tl from-green-400 via-yellow-500 to-indigo-700 p-[2px] rounded-lg">
          <div className="rounded-lg h-[450px] md:h-[700px] text-center pt-2 bg-black max-w-2xl overflow-scroll">
              <h2 className="text-2xl text-white">Pinned Repositories</h2>
              {pinnedReposQuery.data ? (
                <Carousel showThumbs={false} axis="horizontal" infiniteLoop={true} stopOnHover={true} swipeable={true} showStatus={false}>
                  {pinnedReposQuery?.data?.map((repo) => {
                    return <ProjectItem data={repo} />;
                  })}
                </Carousel>
              ) : (
                <></>
              )}
          </div>
      </div>
      <div className="z-10">
        <div className="p-[2px] bg-gradient-to-bl from-blue-700 to-indigo-800 via-fuchsia-700 rounded-lg">
          <div className="rounded-lg bg-zinc-700 text-white p-2 text-center">
            <h3 className="w-full text-center bg-zinc-900 p-1 rounded">GitHub Repositories ({allReposQuery?.data?.length})</h3>
            <div className="w-full flex justify-center items-center">
              <a
                href="https://skyline.github.com/keithfrazier98/2021"
                target={"_blank"}
                className="text-xs mx-1 w-full border border-blue-600 text-center p-1 rounded-full my-1 hover:bg-blue-400 hover:bg-opacity-20"
              >
                3D Commit History
              </a>{" "}
              <a
                href="https://github.com/keithfrazier98"
                className="text-xs mx-1 w-full border border-blue-600 text-center p-1 rounded-full my-1 hover:bg-blue-400 hover:bg-opacity-20"
                target={"_blank"}
              >
                GitHub!
              </a>
            </div>

            <ul className="max-h-96 overflow-scroll hide-scrollbar max-w-sm my-1 text-left">
              {allReposQuery.data?.map((data) => {
                if (!data.isPrivate) {
                  return <RepoItem data={data} />;
                }
              })}
            </ul>
            <span className="text-zinc-400">Powered by GitHub GraphQL API</span>
          </div>
        </div>
        <div className="w-full flex flex-col text-center mt-4 text-black dark:text-white">
          <p>Language Analysis</p>
          <div className="w-full h-5 p-[2px] bg-gradient-to-tr from-indigo-800 to-blue-700 via-fuchsia-700 rounded-full">
            <div className="w-full h-full bg-zinc-700 rounded-full first:rounded-l-full last:rounded-r-full flex">
              {languagePercent ? makeLanguageChart()?.map((element) => element) : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}