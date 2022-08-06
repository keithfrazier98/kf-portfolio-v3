import { useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function RepoItem({ data }) {
  const [color, setColor] = useState("#2b7489");

  useEffect(() => {
    setColor(data.primaryLanguage?.color);
  }, [data.primaryLanguage?.color]);

  function formatTime(stamp) {
    const date = new Date(stamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  return (
    <li className="px-2 py-1 border-b border-gray-500 my-1 hover:bg-white hover:bg-opacity-5">
      <div className="flex w-full justify-between items-center my-1">
        <a href={data.url} target="_blank" className="flex justify-between items-center max-w-[60%] text-xl text-purple-400 hover:text-red-400 active:text-green-500 ">
          {data.name}
        </a>
        <div className="flex items-center">
          <a href={data.owner.url} className="mr-2 text-blue-500 hover:text-green-400 active:text-red-500 ">
            {data.owner.login}
          </a>
          <img src={data.owner.avatarUrl} className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-2 h-2 mr-2`} style={{ backgroundColor: color }} />
          <span>{data.primaryLanguage?.name}</span>
        </div>
        <span className="text-zinc-400">{formatTime(data.createdAt)} </span>{" "}
      </div>
      <p>{data.description}</p>
    </li>
  );
}
