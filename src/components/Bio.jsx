import OffsetBorder from "./OffsetBorder";
import pic from "../images/keith.jpg"

export default function Bio() {
  return (
    <div
      className="bg-white absolute md:p-24 top-0 left-0 right-0 bottom-0 dark:bg-black flex flex-col lg:flex-row justify-center items-center dark:border-white border-black border-y"
    >
      <p className="max-w-2xl h-fit mx-12 mb-6">
        I am a web developer with a long time interest in creating amazing things with computers. With a focus on front-end engineering, I also like to dabble with producing music,
        graphic design, and creating 3D models for printing or machining. Feel free to check out my experience and stack through the links above, or contact me if you'd like to
        chat!
      </p>
      <div className="flex relative max-w-sm">
        <img src={pic} alt="keith" />
        <OffsetBorder offsetPx={"6"} shadow={"solid"} />
      </div>
    </div>
  );
}
