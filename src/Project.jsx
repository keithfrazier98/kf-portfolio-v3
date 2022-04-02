import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProjectItem from "./ProjectItem";
import RepoItem from "./RepoItem";
export default function Projects() {
  const [allRepos, setAllRepos] = useState();
  const [pinnedRepos, setPinnedRepos] = useState();
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
            <div className="w-full max-h-[30rem] rounded text-left bg-zinc-700">
              <div className="burgersAndFries text-center px-2 rounded-lg">
                  <h2 className="text-2xl text-white pt-1">Spotlight Projects</h2>
                  {pinnedRepos ? (
                    // autoPlay={true} interval={5000} stopOnHover={true}
                    <Carousel axis="horizontal" className="flex flex-col">
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
        </div>
      </div>
    </div>
  );
}
