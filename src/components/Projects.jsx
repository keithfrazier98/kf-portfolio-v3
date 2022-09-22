import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchPinnedRepos } from "../utils/graphql-requests";
import ProjectItem from "./ProjectItem.jsx";

export default function Projects() {
  const { data } = useQuery(["featured_projects"], () => fetchPinnedRepos(3), { cacheTime: 300000, staleTime: 300000 });

  console.log(data);

  return (
    <section className="m-auto py-24 max-w-md">
      <div>
        <h1 className="text-3xl">Projects</h1>
        <p className="max-w-md">
          Here are the top 3 side-projects I have been working on recently! To get a better idea of my work, checkout my{" "}
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
  );
}
