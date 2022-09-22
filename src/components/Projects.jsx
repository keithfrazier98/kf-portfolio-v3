import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchPinnedRepos } from "../utils/graphql-requests";
import ProjectItem from "./ProjectItem.jsx";

export default function Projects() {
  const { data } = useQuery(["featured_projects"], () => fetchPinnedRepos(3), { cacheTime: 300000, staleTime: 300000 });

  console.log(data);

  return (
    <section className="m-auto pt-24 w-min">
      <div>
        <h1 className="text-3xl">Projects</h1>
        <p className="max-w-md">
          To get a better idea of what I have worked on you can checkout my{" "}
          <Link className="text-blue-500 hover:text-red-500" to="/experience/github">
            GitHub Overview
          </Link>
          , but here are the side-projects I have been working on recently!
        </p>
      </div>
      <div className="mt-6">
        {data?.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </section>
  );
}
