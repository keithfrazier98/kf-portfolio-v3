import OffsetBorder from "./OffsetBorder";
import "../styles/background.css";

export default function Hero() {
  return (
    <>
      <a name="top" id="top"></a>
      <div className="w-full h-full flex items-center justify-center relative bg-shapes overflow-hidden">
        <svg viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" />
        </svg>
        <svg viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" />
        </svg>{" "}
        <svg viewBox="0 0 50 50">
          <rect width={100} height={100} />
        </svg>{" "}
        <svg viewBox="0 0 50 50">
          <rect width={100} height={100} />
        </svg>
        <svg viewBox="0 0 50 50">
          <rect width={100} height={100} />
        </svg>
        <svg viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" />
        </svg>{" "}
        <svg viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" />
        </svg>{" "}
        <svg viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" />
        </svg>
        <svg viewBox="0 0 50 50">
          <rect width={100} height={100} />
        </svg>
        <svg viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" />
        </svg>
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
