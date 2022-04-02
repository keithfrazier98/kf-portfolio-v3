import { useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function RepoItem(data) {
const [color, setColor] = useState("#2b7489")
  const repo = data.data;
  useEffect(()=>{
    setColor(repo.primaryLanguage?.color)
  }, [repo.primaryLanguage?.color])

  function formatTime(stamp) {
    const date = new Date(stamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  return (
    <li className="px-2 py-1 border-b border-gray-500 my-1 hover:bg-white hover:bg-opacity-5 rounded">
      <div className="flex w-full justify-between items-center my-1">
        <a href={repo.url} target="_blank" className="flex justify-between items-center max-w-[60%] text-xl text-purple-400 hover:text-red-400 active:text-green-500 ">
          {data.data.name}
        </a>
        <div className="flex items-center">
          <a href={repo.owner.url} className="mr-2 text-blue-500 hover:text-green-400 active:text-red-500 ">
            {repo.owner.login}
          </a>
          <img src={repo.owner.avatarUrl} className="w-6 h-6 rounded-full" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2`} style={{backgroundColor:color}}/>
          <span>{repo.primaryLanguage?.name}</span>
        </div>
        <span className="text-zinc-400">{formatTime(repo.createdAt)} </span>{" "}
      </div>
      <p>{repo.description}</p>
    </li>
  );
}
