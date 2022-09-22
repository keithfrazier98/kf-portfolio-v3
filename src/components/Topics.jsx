export default function Topics({ data }) {
  return (
    <div className="flex flex-wrap">
      {data.repositoryTopics?.nodes.map((node, index) => (
        <p key={data.name + index} className="p-1 px-3 mr-1 mt-2 border border-blue-400 bg-blue-600 bg-opacity-25 text-xs dark:text-white">
          {node.topic?.name}
        </p>
      ))}
    </div>
  );
}
