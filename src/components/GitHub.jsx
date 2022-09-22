import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MoonLoader } from "react-spinners";
import { fetchAllRepos, fetchPinnedRepos } from "../utils/graphql-requests";
import { makeLanguageChart, parseLanguageData } from "../utils/utils";
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
  const pinnedReposQuery = useQuery(["pinned_repos"], () => fetchPinnedRepos(6), options);
  const { data: allReposQuery, isLoading } = useQuery(["all_repos"], fetchAllRepos, options);

  useEffect(() => {
    if (allReposQuery?.repositories?.nodes) {
      const parsedData = parseLanguageData(allReposQuery?.repositories?.nodes);
      console.log(parsedData);

      setLanguagePercent({ ...parsedData });
    }
  }, [isLoading, allReposQuery?.repositories?.nodes?.length]);

  return (
    <div className="w-full h-full flex flex-col m-auto pt-12">
      <section className="mx-4 lg:mx-24 relative my-12 flex items-center flex-col md:flex-row">
        <div className="w-full md:w-auto flex items-center md:items-start flex-col">
          {allReposQuery?.avatarUrl ? <img src={allReposQuery?.avatarUrl} alt="avatar" className="max-w-[17rem] rounded-full md:mr-12"></img> : <></>}
          <p className="font-bold text-3xl mt-4">Keith Frazier</p>
          <a href={allReposQuery?.url} className="flex items-center text-blue-500 hover:text-red-500">
            {allReposQuery?.login}
            <BsArrowUpRightSquare className="ml-2 w-3" />
          </a>
          <div className="w-full flex flex-col mt-4 text-black dark:text-white overflow-visible">
            <p>Language Analysis</p>
            <p className="text-xs text-gray-500">{"(hover to see language)"}</p>
            <div className="w-full h-5 p-[2px] border border-black relative overflow-visible mr-4  shadow-md">
              <div className="w-full h-full flex relative z-10 bg-gray-100">
                {languagePercent?.percentages ? makeLanguageChart(languagePercent)?.map((element) => element) : <></>}
              </div>
              {/* <OffsetBorder offsetPx={2} /> */}
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="relative h-fit my-4 ml-4">
            <ReadmeItem data={{ name: "keithfrazier98", owner: { login: "keithfrazier98" } }} />
            <OffsetBorder shadow="solid" offsetPx={12} />
          </div>
          {/* <ContributionChart /> */}
        </div>
      </section>
      <section className="mb-12 px-4 lg:px-24 h-full">
        <h2 className="text-3xl">Repositories</h2>
        <div className="relative h-full border border-black dark:border-white">
          <div className="relative z-10 h-full bg-gray-100">
            <div className="absolute z-20 top-0 left-0 right-0 bottom-[95%] bg-gradient-to-b dark:from-zinc-900 from-gray-100 to-transparent" />
            <div className="dark:bg-zinc-900 bg-zinc-100 grid grid-flow-row grid-cols-1  md:grid-cols-2 xl:grid-cols-3 m-auto gap-8 h-full overflow-y-scroll p-6">
              {allReposQuery?.repositories?.nodes?.map((repo, index) => (
                <RepoItem key={"repo_item_" + index} data={repo} />
              ))}
            </div>
            <div className="absolute z-10 top-[95%] left-0 right-0 bottom-0 bg-gradient-to-t dark:from-zinc-900 from-gray-100 to-transparent" />
          </div>
          <OffsetBorder offsetPx="12" shadow="blur" />
        </div>
      </section>
      <section className="h-full w-full px-4 lg:px-24 my-12">
        <h2 className="text-3xl">Pinned Repository READMEs</h2>
        <div className="flex my-4 flex-wrap">
          {pinnedReposQuery.data ? (
            pinnedReposQuery?.data.map((repo, index) => (
              <button key={"pinned_repo_btn_" + index} onClick={() => setShowPin(index)} className="btnReg mr-2 py-1 my-1">
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
