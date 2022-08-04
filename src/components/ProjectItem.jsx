import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "../styles/markdown.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import rehypeRaw from 'rehype-raw'
export default function ProjectItem({ data }) {
  const [readme, setReadme] = useState("");
  useEffect(() => {
    axios
      .get(readmeUrl(data.owner.login ,data.name, "main"))
      .then((res) => {
        setReadme(res.data);
      })
      .catch(console.error);
  }, []);
  function readmeUrl(owner,name, main) {
    if(name === "scripts") main = "master"
    return `https://raw.githubusercontent.com/${owner}/${name}/${main}/README.md`;
  }

  return (
      <ReactMarkdown
        className={style.reactMarkDown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter children={String(children).replace(/\n$/, "")} style={atomDark} language={match[1]} PreTag="div" {...props} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {readme}
      </ReactMarkdown>
  );
}
