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
      className={`z-[2] ${
        fadeInContent ? "opacity-100" : "opacity-0"
      } text-black dark:text-gray-200 transition-transform duration-[2000ms] px-12 md:px-0 absolute top-1/2 w-full md:w-2/3 lg:w-2/5 left-1/2 -translate-x-1/2 text-base lg:text-xl ${
        fadeInContent ? "-translate-y-1/2" : "-translate-y-0"
      }`}
    >
      <span className="transition-colors duration-1000">
        I am a web developer with a long time interest in creating amazing things with computers. With a focus on front-end engineering, I also like to dabble with producing music,
        graphic design, and creating 3D models for printing or machining. Feel free to check out my experience and stack through the links above, or contact me if you'd like to
        chat!
      </span>{" "}
    </p>
  );
}

//TODO: Add a secttion here that allows the user to scroll down and readmore about why I code, what my coding philosophy is, and my career goals.
//TODO: have a small mouse animation at the bottom of the screen to signal that the page can be scrolled and have it auto scroll and frame
//TODO: on scroll event. This section is mainly supposed to look good, and be visually impressive, nobody will likely ever read it
