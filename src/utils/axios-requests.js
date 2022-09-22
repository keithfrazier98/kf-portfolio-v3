import axios from "axios";

export async function getReadme({queryKey}) {
  console.log(queryKey)
  const {data: repoData} = queryKey[1];
  console.log(repoData)
  const readme = await axios.get(readmeUrl(repoData.owner.login, repoData.name, "main"));
  return readme.data;
}

function readmeUrl(owner, name, main) {
  if (name === "scripts") main = "master";
  return `https://raw.githubusercontent.com/${owner}/${name}/${main}/README.md`;
}
