import OffsetBorder from "./OffsetBorder";

export default function Hero() {
  return (
    <div className="w-full h-full flex items-center justify-center">
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
