import { useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import OffsetBorder from "./OffsetBorder";

export default function RepoItem({ data }) {
  const [color, setColor] = useState("#2b7489");

  useEffect(() => {
    setColor(data.primaryLanguage?.color);
  }, [data.primaryLanguage?.color]);

  function formatTime(stamp) {
    const date = new Date(stamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  // <div className="border border-black relative">
  //   <div className="relative z-10 p-6 w-full h-full bg-white">
  //     <h3 className="text-xl">{repo.name}</h3>
  //     <p>{repo.description}</p>
  //   </div>
  // </div>

  return (
    <li className="border border-black relative flex">
      <div className="relative z-10 p-4 w-full flex flex-col justify-between bg-white dark:bg-black">
        <div className="flex justify-between">
          <a href={data.url} target="_blank" className=" mr-4 flex justify-between items-center max-w-[60%] text-xl text-purple-400 hover:text-red-400 active:text-green-500 ">
            {data.name}
          </a>
          <div className="flex items-center">
            <a href={data.owner.url} className="mr-2 text-blue-500 hover:text-green-400 active:text-red-500 ">
              {data.owner.login}
            </a>
            <img src={data.owner.avatarUrl} className="w-6 h-6" />
          </div>
        </div>
        <p>{data.description || "No description ☹️"}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-2 h-2 mr-2`} style={{ backgroundColor: color }} />
            <span>{data.primaryLanguage?.name}</span>
          </div>
          <span className="text-zinc-400">{formatTime(data.createdAt)} </span>{" "}
        </div>
      </div>
      <OffsetBorder offsetPx="8" shadow="solid" />
    </li>
  );
}
