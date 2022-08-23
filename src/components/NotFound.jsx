import OffsetBorder from "./OffsetBorder";

export default function NotFound() {
  return (
    <div className="p-12 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="w-full h-full relative">
        <p>404, nothing here to see!</p>
        <OffsetBorder offsetPx={12} shadow="blur" />
      </div>
    </div>
  );
}
