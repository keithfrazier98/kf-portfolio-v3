import { BsArrowUpRightSquare } from "react-icons/bs";
import OffsetBorder from "./OffsetBorder";
import Topics from "./Topics";
import { BsCodeSlash } from "react-icons/bs";
import { useState } from "react";

export default function ProjectItem({ project }) {
  const [errored, setErrored] = useState(false);
  return (
    <article className="border dark:border-white relative my-6 ">
      <div className="relative p-4 z-10 bg-gray-50 dark:bg-zinc-800">
        <div className="relative">
          {errored ? (
            <div className="w-full flex justify-center py-2 bg-black bg-opacity-5">
              <BsCodeSlash size={32} />
            </div>
          ) : (
            <>
              <img
                onError={() => {
                  setErrored(true);
                }}
                src={`${process.env.REACT_APP_GITHUB_URL}${project.name}/main/thumbnail.jpg`}
                className="relative z-10"
                alt={project.name + "_thumbnail"}
              />
              <OffsetBorder offsetPx={3} shadow="blur" />
            </>
          )}
        </div>
        <h2 className="text-3xl font-semibold mt-4">{project.name}</h2>
        <div className="flex">
          <a
            href={project.url}
            target="_blank"
            className="flex items-center text-blue-500 hover:text-red-500"
          >
            Repository <BsArrowUpRightSquare className="w-3 ml-2 mr-6" />
          </a>{" "}
          {project.homepageUrl ? (
            <a
              href={project.homepageUrl}
              target="_blank"
              className="flex items-center text-blue-500 hover:text-red-500"
            >
              Live App <BsArrowUpRightSquare className="w-3 ml-2" />
            </a>
          ) : (
            <></>
          )}
        </div>
        <p className="mt-2">{project.description}</p>
        <Topics data={project} />
      </div>
      <OffsetBorder offsetPx={6} shadow="solid" />
    </article>
  );
}
