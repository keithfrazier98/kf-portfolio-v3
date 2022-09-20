import OffsetBorder from "./OffsetBorder";

//TODO: BG - EFFECT diagonal lines accross entire background
/** Bg effect description
 * Diagonal lines approx 15-20px apart all a light gray
 * When cursor is over the lines they turn to a darker
 * black in a 30px radius around the users cursor
 *
 * Lagg effect makes previous position fade slowly
 * (possible just transisiton color or opacity duration)
 */

export default function Hero() {
  return (
    <>
      <a name="top" id="top"></a>
      <div className="w-full h-full flex items-center justify-center">
        {/* {Array(10)
        .fill("")
        .map((_, index) => (
          <div className={`w-1/2 top-1/2 -left-10 h-1px bg-black -rotate-12 absolute translate-y-${index * 2}`} />
        ))} */}
        {/* <div className={`w-1/2 top-1/2 -left-10 h-1px bg-black -rotate-12 absolute`} />*/}
        {/* <div className={`w-1/2 top-1/2 -left-10 h-1px bg-black -rotate-12 absolute translate-y-8`} /> */}
        <div className="relative bg-white">
          <div className="relative z-10 py-48 px-6 md:py-48 md:px-56 border dark:border-white border-black dark:bg-black bg-white shadow-xl">
            <h1 className="text-5xl font-bold">Keith Frazier</h1>
            <h2>Web Developer</h2>
          </div>
          <OffsetBorder offsetPx={"12"} shadow={"blur"} />
        </div>
      </div>
    </>
  );
}
