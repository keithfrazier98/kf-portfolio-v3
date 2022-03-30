import { Link } from "react-router-dom";

export default function Home() {
  const contacts = (
    <Link className="text-green-600 hover:text-purple-700" to="/say-whats-up">
      contact
    </Link>
  );
  const projects = (
    <Link className="text-cyan-600 hover:text-blue-700" to="/check-it-out">
      projects
    </Link>
  );
  const stack = (
    <Link className="text-orange-600 hover:text-yellow-200" to="/peep-my-stack">
      stack
    </Link>
  );

  const bioParagraph = `I am a developer with a long-time interest
    in learning all things computer; web development has been a natural interest of mine.
    I also like to tinker with product engineering, love to cook, and love spending time with my family. 
    Check out my projects and stack through the navigation links, and feel free to reach out via my `;

  return (
    <div className="absolute top-0 w-full h-full homeBG" id="home">
      <div className="flex w-full h-full items-center md:px-[30rem] md:text-lg lg:text-xl font-light">
        <p>
          <span>
            I am a developer with a long-time interest in learning all things computer; web development has been a natural interest of mine. I also like to tinker with product
            engineering, love to cook, and love spending time with my family. Check out my
          </span>{" "}
          <span>{projects}</span> and <span>{stack}</span> through the navigation links, and feel free to reach out via my <span>{contacts}</span> links
        </p>
      </div>
    </div>
  );
}
