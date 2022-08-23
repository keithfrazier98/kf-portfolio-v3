import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffsetBorder from "./OffsetBorder";

export default function Bio() {
  return (
    <div id="about" className="bg-white py-32 dark:bg-black flex flex-col md:flex-row justify-center items-center dark:border-white border-black border-y">
      <p className="max-w-2xl h-fit mx-12 mb-6">
        I am a web developer with a long time interest in creating amazing things with computers. With a focus on front-end engineering, I also like to dabble with producing music,
        graphic design, and creating 3D models for printing or machining. Feel free to check out my experience and stack through the links above, or contact me if you'd like to
        chat!
      </p>
      <div className="h-64 w-64 md:h-96 md:w-96 bg-pic bg-cover relative bg-no-repeat">

        <OffsetBorder offsetPx={"6"} shadow={"solid"} />
      </div>
    </div>
  );
}

//TODO: Add a secttion here that allows the user to scroll down and readmore about why I code, what my coding philosophy is, and my career goals.
//TODO: have a small mouse animation at the bottom of the screen to signal that the page can be scrolled and have it auto scroll and frame
//TODO: on scroll event. This section is mainly supposed to look good, and be visually impressive, nobody will likely ever read it
