import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "../styles/markdown.module.css";
import rehypeRaw from "rehype-raw";
import { useQuery } from "@tanstack/react-query";
import { getReadme } from "../utils/axios-requests";
import { useEffect } from "react";

export default function ReadmeItem({ data }) {
  const { data: response, isLoading } = useQuery(
    [`${data.name}_readme`, { data }],
    getReadme,
    { staleTime: 30000 }
  );

  return isLoading ? (
    <div className="w-[50rem] h-96 animate-pulse bg-slate-200"/>
  ) : (
    <ReactMarkdown
      className={style.reactMarkDown}
      escapeHtml={false}
      transformImageUri={(uri) =>
        `${process.env.REACT_APP_GITHUB_URL}/${data.name}/main/${uri}`
      }
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={atomDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {response}
    </ReactMarkdown>
  );
}
