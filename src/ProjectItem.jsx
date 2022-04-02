import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "./markdown.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectItem({ data }) {
  const [readme, setReadme] = useState("");
  useEffect(() => {
    axios
      .get(readmeUrl(data.name, "main"))
      .then((res) => {
        setReadme(res.data);
      })
      .catch(console.error);
  }, []);
  function readmeUrl(name, main) {
    return `https://raw.githubusercontent.com/keithfrazier98/${name}/${main}/README.md`;
  }

  return (
    <div className="max-w-[280px] lg:max-w-3xl w-[48rem] max-h-96 hide-scrollbar overflow-scroll rounded-lg">
      <ReactMarkdown
        className={style.reactMarkDown}
        remarkPlugins={[remarkGfm]}
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
    </div>
  );
}
