import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [fadeInContent, setFadeInContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeInContent(true);
    }, 250);
  }, []);

  return (
    <p
      className={`${
        fadeInContent ? "opacity-100" : "opacity-0"
      } text-black dark:text-gray-200 transition-transform duration-[2000ms] px-12 md:px-0 absolute top-1/2 w-full md:w-2/3 lg:w-2/5 left-1/2 -translate-x-1/2 text-base lg:text-xl ${
        fadeInContent ? "-translate-y-1/2" : "-translate-y-0"
      }`}
    >
      <span>
        I am a developer with a long-time interest in learning all things computer; web development has been a natural interest of mine. I also like to tinker with product
        engineering, love to cook, and love spending time with my family. Check out my
      </span>{" "}
      <span>
        {" "}
        <Link className="text-cyan-600 hover:text-blue-700" to="/check-it-out">
          projects
        </Link>
      </span>{" "}
      and{" "}
      <span>
        {" "}
        <Link className="text-orange-600 hover:text-yellow-200" to="/peep-my-stack">
          stack
        </Link>
      </span>{" "}
      through the navigation links above, and feel free to reach out via my{" "}
      <span>
        {" "}
        <Link className="text-green-600 hover:text-purple-700" to="/say-whats-up">
          contact
        </Link>
      </span>{" "}
      links.
    </p>
  );
}
