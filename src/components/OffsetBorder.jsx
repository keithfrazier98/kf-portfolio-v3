export default function OffsetBorder({ offsetPx, shadow }) {
  return (
    <div
      style={{ transform: `translate(${offsetPx}px, ${offsetPx}px)` }}
      className={`absolute z-0 top-0 left-0 right-0 bottom-0 border border-black ${shadow === "solid" ? "shadow-solid" : shadow === "blur" ? "shadow-xl" : ""}`}
    />
  );
}
