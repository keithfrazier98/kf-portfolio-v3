import { useEffect, useRef,useState } from "react";
import Hero from "./Hero";
import Bio from "./Bio";
import ContactMe from "./ContactMe";
import Skills from "./Skills";

export default function Home({scrollingDown, setScrollingDown}) {
  const [bioIsAtTop, setBioIsAtTop] = useState(false);
  const lastScrollTop = useRef(0);
  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;

    if (scrollTop > lastScrollTop.current) {
      if (!scrollingDown) setScrollingDown(true);
    } else if (scrollTop < lastScrollTop.current) {
      if (scrollingDown) setScrollingDown(false);
    }

    lastScrollTop.current = scrollTop;
    const aboutWindow = document.getElementById("about");
    const aboutPosition = aboutWindow?.getBoundingClientRect();

    if (aboutPosition.top <= 0) {
      if (!bioIsAtTop) setBioIsAtTop(true);
    } else {
      if (bioIsAtTop) setBioIsAtTop(false);
    }
  };

  useEffect(() => {
    const root = document.getElementById("root");
    root.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      root.removeEventListener("scroll", handleScroll);
    };
  }, [bioIsAtTop, scrollingDown]);

  return (
    <>
      <div className="bg-white absolute top-0 left-0 right-0 bottom-0">
        <Bio />
      </div>

      <div className="relative w-full h-full bg-gray-100 dark:bg-zinc-900">
        <Hero />

        <div
          id="about"
          className={`w-full h-full ${
            bioIsAtTop ? "bg-white " : " bg-transparent"
          }`}
        >
          {bioIsAtTop ? <Bio /> : <></>}
        </div>

        <Skills />
        <ContactMe />
      </div>
    </>
  );
}
