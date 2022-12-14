import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchPinnedRepos } from "../utils/graphql-requests";
import ProjectItem from "./ProjectItem.jsx";

export default function Projects() {
  const { data } = useQuery(["featured_projects"], () => fetchPinnedRepos(3), { cacheTime: 300000, staleTime: 300000 });

  console.log(data);

  return (
    <div className="relative bg-gray-100 dark:bg-zinc-900">
    <section className="m-auto py-24 max-w-md">
      <div>
        <h1 className="text-3xl">Projects</h1>
        <p className="max-w-md">
          Here are the 3 most recent projects I have pinned on GitHub. To get a better idea of my work, checkout my{" "}
          <Link className="text-blue-500 hover:text-red-500" to="/experience/github">
            GitHub Overview
          </Link>
          , which displays the READMEs of all my pinned repositories and more!
        </p>
      </div>
      <div className="mt-6">
        {data?.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </section>
    </div>
  );
}
