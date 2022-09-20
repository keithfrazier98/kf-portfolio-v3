import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MoonLoader } from "react-spinners";
import { getReadme } from "../requests/axios";
import { fetchAllRepos, fetchPinnedRepos } from "../requests/graphql";
import OffsetBorder from "./OffsetBorder";
import ReadmeItem from "./ReadmeItem";
import RepoItem from "./RepoItem";
export default function GitHub() {
  const [languagePercent, setLanguagePercent] = useState({
    colors: null,
    percentages: null,
    total: 0,
  });
  const [showPin, setShowPin] = useState(0);

  const options = { staleTime: 300000, cacheTime: 300000 };
  const pinnedReposQuery = useQuery(["pinned_repos"], fetchPinnedRepos, options);
  const allReposQuery = useQuery(["all_repos"], fetchAllRepos, options);

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
        <div className={`h-full group relative overflow-visible`} style={{ backgroundColor: languagePercent.colors[language], width: `${percent + offset}%` }}>
          <div className="absolute  overflow-visible -bottom-6 left-1/2 transform -translate-x-1/2 hidden opacity-0 group-hover:opacity-100 duration-300 transition-opacity group-hover:block z-30">
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
    <div className="w-full h-full flex flex-col m-auto pt-24">
      <section className="mx-4 lg:mx-24 relative my-12">
        <ReadmeItem data={{ name: "keithfrazier98", owner: { login: "keithfrazier98" } }} />
        <OffsetBorder shadow="solid" offsetPx={12}/>
      </section>
      <section className="mb-12 px-4 lg:px-24 h-full">
        <h2 className="text-3xl">Repositorys</h2>
        <div className="relative h-full border border-black dark:border-white">
          <div className="relative z-10 h-full bg-gray-100">
            <div className="absolute z-20 top-0 left-0 right-0 bottom-[95%] bg-gradient-to-b dark:from-zinc-900 from-gray-100 to-transparent" />
            <div className="dark:bg-zinc-900 bg-zinc-100 grid grid-flow-row grid-cols-1  md:grid-cols-2 xl:grid-cols-3 m-auto gap-8 h-full overflow-y-scroll p-6">
              {allReposQuery?.data?.map((repo) => (
                <RepoItem data={repo} />
              ))}
            </div>
            <div className="absolute z-10 top-[95%] left-0 right-0 bottom-0 bg-gradient-to-t dark:from-zinc-900 from-gray-100 to-transparent" />
          </div>
          <OffsetBorder offsetPx="12" shadow="blur" />
        </div>
      </section>
      <section className="h-full w-full px-4 lg:px-24 my-12">
        <h2 className="text-3xl">Top Repository READMEs</h2>
        <div className="flex my-4 flex-wrap">
          {pinnedReposQuery.data ? (
            pinnedReposQuery?.data?.map((repo, index) => (
              <button onClick={() => setShowPin(index)} className="btnReg mr-2 py-1 my-1">
                {repo.name}
              </button>
            ))
          ) : (
            <div className="h-full flex justify-center items-center">
              <MoonLoader color="white" speedMultiplier={0.5} />
            </div>
          )}
        </div>
        {pinnedReposQuery.data ? (
          <ReadmeItem data={pinnedReposQuery.data[showPin]} />
        ) : (
          <div className="h-full flex justify-center items-center">
            <MoonLoader color="white" speedMultiplier={0.5} />
          </div>
        )}
      </section>
    </div>
  );
}
