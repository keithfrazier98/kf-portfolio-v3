import OffsetBorder from "./OffsetBorder";

export default function Hero() {
  return (
    <div id="" className="w-full h-full flex items-center justify-center">
      {/* {Array(10)
        .fill("")
        .map((_, index) => (
          <div className={`w-1/2 top-1/2 -left-10 h-1px bg-black -rotate-12 absolute translate-y-${index * 2}`} />
        ))} */}
      {/* <div className={`w-1/2 top-1/2 -left-10 h-1px bg-black -rotate-12 absolute`} />*/}
      {/* <div className={`w-1/2 top-1/2 -left-10 h-1px bg-black -rotate-12 absolute translate-y-8`} /> */}
      <div className="relative bg-white">
        <div className="relative z-10 py-48 px-56 border dark:border-white border-black dark:bg-black bg-white shadow-xl">
          <h1 className="text-5xl font-bold">Keith Frazier</h1>
          <h2>Web Developer</h2>
        </div>
        <OffsetBorder offsetPx={"20"} shadow={"blur"} />
      </div>
    </div>
  );
}
