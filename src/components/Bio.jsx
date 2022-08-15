import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffsetBorder from "./OffsetBorder";

export default function Bio() {
  return (
    <div className="bg-white dark:bg-black py-24 flex justify-center items-center dark:border-white border-black border-y">
      <p className="max-w-2xl h-fit mr-12">
        I am a web developer with a long time interest in creating amazing things with computers. With a focus on front-end engineering, I also like to dabble with producing music,
        graphic design, and creating 3D models for printing or machining. Feel free to check out my experience and stack through the links above, or contact me if you'd like to
        chat!
      </p>
      <div className="h-96 w-96 bg-pic bg-contain relative">

        <OffsetBorder offsetPx={"6"} shadow={"solid"} />
      </div>
    </div>
  );
}

//TODO: Add a secttion here that allows the user to scroll down and readmore about why I code, what my coding philosophy is, and my career goals.
//TODO: have a small mouse animation at the bottom of the screen to signal that the page can be scrolled and have it auto scroll and frame
//TODO: on scroll event. This section is mainly supposed to look good, and be visually impressive, nobody will likely ever read it
