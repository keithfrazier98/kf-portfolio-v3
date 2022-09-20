import Bio from "./Bio";
import ContactMe from "./ContactMe";
import Hero from "./Hero";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Skills />
      <ContactMe />
      <footer className="py-7 flex w-full justify-center dark:bg-zinc-800">
        <span> © Keith Frazier 2022 </span>
      </footer>
    </>
  );
}
