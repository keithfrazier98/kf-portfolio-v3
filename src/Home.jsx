export default function Home() {
  const contacts = (
    <a href="#say-whats-up">
      contact
    </a>
  );

  const bioParagraph = `I am a developer with a long-time interest
    in learning all things computer; web development has been a natural interest of mine.
    I also like to work with graphic design, love to cook, and love spending time with my family. 
    Check out my projects and stack below, and feel free to reach out via my `;

  return (
    <div className="absolute w-full h-full" id="home">
      <div className="flex w-full h-full">
        {bioParagraph}
        {contacts}
        {` links.`}
      </div>
    </div>
  );
}
