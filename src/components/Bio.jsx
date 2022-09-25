import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffsetBorder from "./OffsetBorder";

export default function Bio() {
  return (
    <div
      className="bg-white absolute py-24 top-0 left-0 right-0 bottom-0 dark:bg-black flex flex-col md:flex-row justify-center items-center dark:border-white border-black border-y"
    >
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
