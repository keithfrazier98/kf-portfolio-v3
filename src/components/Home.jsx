import Bio from "./Bio";
import ContactMe from "./ContactMe";
import Hero from "./Hero";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about" className="h-full w-full bg-transparent" />
      <Skills />
      <ContactMe />
    </>
  );
}
