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
      <section>
        <ReadmeItem data={{ name: "keithfrazier98", owner: { login: "keithfrazier98" } } } />
      </section>
      <section className="mb-12px-4 lg:px-24 h-1/2">
        <h2 className="text-3xl">Repositorys</h2>
        <div className="relative h-full border border-black">
          <div className="relative z-10 h-full bg-gray-100">
            <div className="absolute z-10 top-0 left-0 right-0 bottom-[95%] bg-gradient-to-b from-gray-100 to-transparent" />
            <div className="grid grid-flow-row grid-cols-3 m-auto gap-8 h-full overflow-y-scroll p-6">
              {allReposQuery?.data?.map((repo) => (
                <RepoItem data={repo}/>

              ))}
            </div>
            <div className="absolute z-10 top-[95%] left-0 right-0 bottom-0 bg-gradient-to-t from-gray-100 to-transparent" />
          </div>
          <OffsetBorder offsetPx="12" shadow="blur" />
        </div>
      </section>
    </div>
    // <div className="h-full px-3 max-w-full flex flex-col md:flex-row w-min m-auto mt-24 overflow-scroll pb-48">
    //   <div className="z-10 h-fit max-w-full bg-gradient-to-tl from-green-400 via-yellow-500 to-indigo-700 p-[2px] mb-4 md:mr-4">
    //     <div className="h-[700px] text-center pt-2 bg-black md:max-w-2xl max-w-full md:w-[42rem] overflow-hidden" >
    //       <h2 className="text-2xl text-white">Pinned Repositories</h2>
    //       {pinnedReposQuery.data ? (
    //         <Carousel showThumbs={false} axis="horizontal" infiniteLoop={true} stopOnHover={true} swipeable={false} showStatus={false}>
    //           {pinnedReposQuery?.data?.map((repo) => {
    //             return <ReadmeItem data={repo} />;
    //           })}
    //         </Carousel>
    //       ) : (
    //         <div className="h-full flex justify-center items-center">
    //           <MoonLoader color="white" speedMultiplier={0.5} />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   <div className="z-10 w-full max-w-full md:w-96">
    //     <div className="p-[2px] bg-gradient-to-bl from-blue-700 to-indigo-800 via-fuchsia-700 ">
    //       <div className="bg-zinc-700 text-white p-2 text-center">
    //         <h3 className="w-full text-center bg-zinc-900 p-1">GitHub Repositories ({allReposQuery?.data?.length})</h3>
    //         <div className="w-full flex justify-center items-center">
    //           <a
    //             href="https://skyline.github.com/keithfrazier98/2021"
    //             target={"_blank"}
    //             className="flex justify-center items-center text-xs mr-1 w-full border border-blue-600 text-center p-1 my-1 hover:bg-blue-400 hover:bg-opacity-20"
    //           >
    //            <span className="mr-2 pt-2px">3D Commit History</span> <BsArrowUpRightSquare />
    //           </a>{" "}
    //           <a
    //             href="https://github.com/keithfrazier98"
    //             className="flex justify-center items-center text-xs ml-1 w-full border border-blue-600 text-center p-1 my-1 hover:bg-blue-400 hover:bg-opacity-20"
    //             target={"_blank"}
    //           >
    //            <span className="mr-2 pt-2px">GitHub</span> <BsArrowUpRightSquare />
    //           </a>
    //         </div>

    //         {allReposQuery.isLoading ? (
    //           <div className="w-full h-[490px] flex justify-center items-center">
    //             <MoonLoader color="white" size={48} />
    //           </div>
    //         ) : (
    //           <ul className="max-h-96 overflow-scroll hide-scrollbar max-w-sm my-1 text-left transition-height duration-150">
    //             {allReposQuery.data.map((data) => {
    //               if (!data.isPrivate) {
    //                 return <RepoItem data={data} />;
    //               }
    //             })}
    //           </ul>
    //         )}

    //         <span className="text-zinc-400  ">Powered by GitHub GraphQL API</span>
    //       </div>
    //     </div>
    //     <div className="w-full flex flex-col text-center mt-4 text-black dark:text-white">
    //       <p>Language Analysis</p>
    //       <div className="w-full h-5 p-[2px] bg-gradient-to-tr from-indigo-800 to-blue-700 via-fuchsia-700">
    //         <div className="w-full h-full bg-zinc-700 flex">{languagePercent ? makeLanguageChart()?.map((element) => element) : <></>}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
