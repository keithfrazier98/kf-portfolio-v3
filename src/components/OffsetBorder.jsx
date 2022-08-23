export default function OffsetBorder({ offsetPx, shadow }) {
  return (
    <div
      style={{ transform: `translate(${offsetPx}px, ${offsetPx}px)` }}
      className={`absolute z-0 top-1px left-1px right-1px bottom-1px border dark:border-white border-black ${shadow === "solid" ? "shadow-solid dark:shadow-solid-w" : shadow === "blur" ? "shadow-xl" : ""}`}
    />
  );
}
